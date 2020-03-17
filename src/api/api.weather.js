import axios from "axios";

// TODO: Resolve the temp unit by user locale ?
// api.openweathermap.org/data/2.5/weather?units=metric&lat=35&lon=139&APPID=c2152ce33eec94f628bcb40cda3da446

let apiKey;

if (process.env.NODE_ENV !== "production") {
  apiKey = process.env.REACT_APP_WEATHER_MAP_API_KEY;
} else {
  apiKey = process.env.WEATHER_MAP_API_KEY;
}

const getIconCode = icon => {
  switch (icon.substr(0, 2)) {
    case "01":
      return "sun";
    case "02":
      return "cloud-sun";
    case "03":
    case "04":
      return "cloud-meatball";
    case "10":
      return "cloud-rain";
    case "09":
      return "showers-heavy";
    case "11":
      return "poo-storm";
    case "13":
      return "snowflake";
    case "50":
      return "smog";
    default:
      return null;
  }
};

export const getWeatherDataByCoords = async (lat, lng, units = "metric") => {
  try {
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?units=${units}&lat=${lat}&lon=${lng}&APPID=${apiKey}`
    );
    const {
      weather,
      main: {temp}
    } = data;
    const {main, icon} = Array.isArray(weather) ? weather[0] : weather;
    return {
      description: main,
      temperature: temp,
      iconCode: getIconCode(icon)
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};
