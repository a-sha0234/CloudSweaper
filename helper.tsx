const weather: { type: string; image: string }[] = [
  {
    type: "Clouds",
    image: "cloudy.gif",
  },
  {
    type: "Thunderstorm",
    image: "storm.gif",
  },
  { type: "Drizzle", image: "drizzle.gif" },
  { type: "Rain", image: "rain.gif" },
  { type: "Snow", image: "snow.gif" },
  { type: "Clear", image: "sun.gif" },
];

function kelvinToCelcius(temp: number): number {
  return temp - 273.15;
}

export { weather, kelvinToCelcius };
