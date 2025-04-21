export class DataService {
  static async getWeatherData() {
    const url = "https://localhost:7001/api/WeatherForecast/history/7";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return data;
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
