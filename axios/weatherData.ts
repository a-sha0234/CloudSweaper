import axios from "axios";

async function fetchWeatherData(data: string, setter: any) {
  // fetch weather data based on city
  try {
    const res = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=708dbd9b677bb41f1461a55259144588`
    );

    if (res.status !== 200) {
      throw new Error();
    }
    setter(res);
  } catch (err) {
    console.log(err);
  }
}

async function getWeatherForecast(city: string, setter: any) {
  // get 5 day weather forecast from city
  try {
    const res = await axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=708dbd9b677bb41f1461a55259144588`
    );
    if (res.status !== 200) {
      throw new Error();
    }

    setter(res);
  } catch (err) {
    console.log(err);
  }
}

async function fetchWeatherDataLongLat(lon: string, lat: string, setter: any) {
  // get current weather on city using geolcation
  try {
    const res = await axios(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=708dbd9b677bb41f1461a55259144588
`
    );
    if (res.status !== 200) {
      throw new Error();
    }

    setter(res);
  } catch (err) {
    console.log(err);
  }
}

async function fetchWeatherForecastLongLat(
  lon: string,
  lat: string,
  setter: any
) {
  // get 5 day weather forecast using geolocation
  try {
    const res = await axios(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=708dbd9b677bb41f1461a55259144588
`
    );
    if (res.status !== 200) {
      throw new Error();
    }

    setter(res);
  } catch (err) {
    console.log(err);
  }
}

export {
  fetchWeatherData,
  getWeatherForecast,
  fetchWeatherDataLongLat,
  fetchWeatherForecastLongLat,
};
