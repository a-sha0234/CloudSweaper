import axios from "axios";

async function fetchWeatherData(data: string, setter: any) {
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

export { fetchWeatherData };
