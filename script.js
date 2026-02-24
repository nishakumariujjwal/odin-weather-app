import displayData from "./domManipulator.js";

const form = document.getElementById("weatherForm");
const placeInput = document.getElementById("place-input");
const loading = document.getElementById("loadingOverlay");
const button = form.querySelector("button");
const errorMsg = document.querySelector(".error-msg");
const errorDiv = document.querySelector(".error");
const weather = document.querySelector(".weather");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  loading.classList.remove("hidden");
  button.disabled = true;

  try {
    let place = placeInput.value;
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=uk&key=28296MDBMCLBTQ7VN2X8NGJNY&contentType=json`,
    );
    const fetchedData = await response.json();

    let data = {
      place: fetchedData.address,
      timezone: fetchedData.timezone,
      maxTemp: fetchedData.days[0].tempmax,
      temp: fetchedData.days[0].temp,
      minTemp: fetchedData.days[0].tempmin,
      desc: fetchedData.days[0].description,
      icon: fetchedData.days[0].icon,
    };

    errorDiv.classList.add("hidden");
    displayData(data);
    weather.classList.remove("hidden");
    placeInput.value = "";
  } catch (error) {
    errorMsg.textContent = "Error : Please enter a valid location !";
    errorDiv.classList.remove("hidden");
    weather.classList.add("hidden");
  } finally {
    loading.classList.add("hidden");
    button.disabled = false;
  }
});
