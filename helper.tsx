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

function getCurrentDay() {
  let final = [];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  const getDay = new Date();
  let day = days[getDay.getDay()];
  final.push(day);

  const getDate = new Date();
  final.push(getDate.getDate());

  const months = [
    "Jan",
    "Feb",
    "Ma",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getMonth = new Date();
  let month = months[getMonth.getMonth()];
  final.push(month);
  return final.reverse();
}

export { weather, getCurrentDay };
