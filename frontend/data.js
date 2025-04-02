/**
 * Generates weather data for a week (3 days past, today, and 3 days future)
 * Uses a simple prediction model when all previous days have the same weather
 * @returns {Array} Array of weather data objects
 */
const generateWeekData = () => {
  const weatherTypes = ["sunny", "cloudy", "rainy", "snowy"];
  const today = new Date();
  const weekData = [];

  // Generate data for past 3 days
  for (let i = 3; i > 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    weekData.push({
      date,
      temperature: Math.floor(Math.random() * 20 + 5),
      weatherType: weatherTypes[Math.floor(Math.random() * weatherTypes.length)],
      windSpeed: Math.floor(Math.random() * 20 + 5),
    });
  }

  // Generate forecast for tomorrow using the prediction model
  const pastThreeDays = weekData.slice(-3);
  const pastWeatherTypes = pastThreeDays.map((day) => day.weatherType);
  const allSameWeather = pastWeatherTypes.every((type) => type === pastWeatherTypes[0]);

  let nextWeatherType;
  if (allSameWeather) {
    const random = Math.random() * 100;
    const currentType = pastWeatherTypes[0];

    if (random < 70) {
      nextWeatherType = currentType;
    } else if (random < 90) {
      const weatherOrder = ["rainy", "cloudy", "sunny"];
      const currentIndex = weatherOrder.indexOf(currentType);
      nextWeatherType = currentIndex < weatherOrder.length - 1 ? weatherOrder[currentIndex + 1] : currentType;
    } else {
      const weatherOrder = ["sunny", "cloudy", "rainy", "snowy"];
      const currentIndex = weatherOrder.indexOf(currentType);
      nextWeatherType = currentIndex < weatherOrder.length - 1 ? weatherOrder[currentIndex + 1] : currentType;
    }
  } else {
    nextWeatherType = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
  }

  const todayDate = new Date(today);
  weekData.push({
    date: todayDate,
    temperature: Math.floor(Math.random() * 20 + 5),
    weatherType: nextWeatherType,
    windSpeed: Math.floor(Math.random() * 20 + 5),
  });

  // Generate random data for next 3 days
  for (let i = 1; i <= 3; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);

    weekData.push({
      date,
      temperature: Math.floor(Math.random() * 20 + 5),
      weatherType: weatherTypes[Math.floor(Math.random() * weatherTypes.length)],
      windSpeed: Math.floor(Math.random() * 20 + 5),
    });
  }

  return weekData;
};

/**
 * Public function to get weather data
 * This function abstracts away the data generation details
 * @returns {Array} Array of weather data objects
 */
export const getData = () => {
  return generateWeekData();
};

/**
 * Returns appropriate greeting based on time of day
 * @returns {string} Greeting message
 */
export const getCurrentGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};
