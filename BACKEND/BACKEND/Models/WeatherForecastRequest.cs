namespace WeatherForecast.Models;

public class WeatherForecastRequest
{
    public List<WeatherData> PreviousWeather { get; set; } = new();
}