const placeElement = document.querySelector(".place");
const timezoneElement = document.querySelector(".timezone");
const minTempElement = document.querySelector(".actual-min-temp");
const tempElement = document.querySelector(".actual-temp");
const maxTempElement = document.querySelector(".actual-max-temp");
const descElement = document.querySelector(".desc");
const icon = document.querySelector("img");

function toSentenceCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export default function displayData(data) {
  ((placeElement.textContent = toSentenceCase(data.place)),
    (timezoneElement.textContent = data.timezone));
  minTempElement.textContent = data.minTemp;
  tempElement.textContent = data.temp;
  maxTempElement.textContent = data.maxTemp;
  descElement.textContent = data.desc;
  icon.src = `./WeatherIcons/${data.icon}.png`;
}
