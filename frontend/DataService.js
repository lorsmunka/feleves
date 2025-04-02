export class DataService {
  static getWeatherData() {
    const weatherData = [
      {
        day: "Monday",
        temperature: 20,
        condition: "Sunny",
      },
      {
        day: "Tuesday",
        temperature: 22,
        condition: "Cloudy",
      },
      {
        day: "Wednesday",
        temperature: 18,
        condition: "Rainy",
      },
      {
        day: "Thursday",
        temperature: 25,
        condition: "Sunny",
      },
      {
        day: "Friday",
        temperature: 21,
        condition: "Windy",
      },
      {
        day: "Saturday",
        temperature: 23,
        condition: "Sunny",
      },
      {
        day: "Sunday",
        temperature: 19,
        condition: "Cloudy",
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
