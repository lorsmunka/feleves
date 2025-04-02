export class DataService {
  static getWeatherData() {
    const weatherData = [
      {
        day: "Monday",
        temperature: 20,
        condition: "Sunny",
        windSpeed: 10, // km/h
        humidity: 40, // %
        uvIndex: 7,
        precipitation: 0, // mm
        pressure: 1015, // hPa
      },
      {
        day: "Tuesday",
        temperature: 0,
        condition: "Snowy",
        windSpeed: 7,
        humidity: 78,
        uvIndex: 2,
        precipitation: 12,
        pressure: 1006,
      },
      {
        day: "Wednesday",
        temperature: 16,
        condition: "Stormy",
        windSpeed: 30,
        humidity: 85,
        uvIndex: 1,
        precipitation: 20,
        pressure: 998,
      },
      {
        day: "Thursday",
        temperature: 10,
        condition: "Foggy",
        windSpeed: 6,
        humidity: 90,
        uvIndex: 1,
        precipitation: 2,
        pressure: 1009,
      },
      {
        day: "Friday",
        temperature: 21,
        condition: "Windy",
        windSpeed: 25,
        humidity: 45,
        uvIndex: 6,
        precipitation: 0,
        pressure: 1010,
      },
      {
        day: "Saturday",
        temperature: 23,
        condition: "Sunny",
        windSpeed: 10,
        humidity: 38,
        uvIndex: 7,
        precipitation: 0,
        pressure: 1014,
      },
      {
        day: "Sunday",
        temperature: 19,
        condition: "Cloudy",
        windSpeed: 14,
        humidity: 55,
        uvIndex: 4,
        precipitation: 0,
        pressure: 1012,
      },
    ];

    return weatherData;
  }
  static getPersonalizedGreeting() {
    const date = new Date();
    const hours = date.getHours();

    const greetings = {
      morning: ["Good morning", "Rise and shine", "A fresh start", "A bright new day", "Awaken possibility"],
      afternoon: ["Good afternoon", "Onward and upward", "The day unfolds", "Keep the momentum", "Stay inspired"],
      evening: ["Good evening", "Unwind and reflect", "A moment of calm", "The night whispers", "Embrace the twilight"],
    };

    const inspirations = [
      "Imagine beyond",
      "Craft something beautiful",
      "See the unseen",
      "Shape tomorrow",
      "Elegance in simplicity",
      "Push what's possible",
    ];

    let timeCategory;

    if (hours < 12) {
      timeCategory = "morning";
    } else if (hours < 18) {
      timeCategory = "afternoon";
    } else {
      timeCategory = "evening";
    }

    const greetingList = greetings[timeCategory];
    const greeting = greetingList[Math.floor(Math.random() * greetingList.length)];

    if (Math.random() < 0.6) {
      const inspiration = inspirations[Math.floor(Math.random() * inspirations.length)];
      return greeting + ". " + inspiration;
    }

    return greeting;
  }
}
