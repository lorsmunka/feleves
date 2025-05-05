using Microsoft.AspNetCore.Mvc;
using WeatherForecast.Models;
using WeatherForecast.Services;

namespace WeatherForecast.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly WeatherService _weatherService;
    
    public WeatherForecastController(WeatherService weatherService)
    {
        _weatherService = weatherService;
    }
    
    [HttpGet]
    public ActionResult<List<WeatherData>> GetSampleWeatherData()
    {
        var weatherData = new List<WeatherData>
        {
            new() { Day = "Monday", Temperature = 20, Condition = "Sunny", WindSpeed = 10, Humidity = 40, UvIndex = 7, Precipitation = 0, Pressure = 1015 },
            new() { Day = "Tuesday", Temperature = 0, Condition = "Snowy", WindSpeed = 7, Humidity = 78, UvIndex = 2, Precipitation = 12, Pressure = 1006 },
            new() { Day = "Wednesday", Temperature = 16, Condition = "Stormy", WindSpeed = 30, Humidity = 85, UvIndex = 1, Precipitation = 20, Pressure = 998 },
            new() { Day = "Thursday", Temperature = 10, Condition = "Foggy", WindSpeed = 6, Humidity = 90, UvIndex = 1, Precipitation = 2, Pressure = 1009 },
            new() { Day = "Friday", Temperature = 21, Condition = "Windy", WindSpeed = 25, Humidity = 45, UvIndex = 6, Precipitation = 0, Pressure = 1010 },
            new() { Day = "Saturday", Temperature = 23, Condition = "Sunny", WindSpeed = 10, Humidity = 38, UvIndex = 7, Precipitation = 0, Pressure = 1014 },
            new() { Day = "Sunday", Temperature = 19, Condition = "Cloudy", WindSpeed = 14, Humidity = 55, UvIndex = 4, Precipitation = 0, Pressure = 1012 }
        };
        
        return Ok(weatherData);
    }
    
    [HttpPost("predict")]
    public ActionResult<WeatherData> PredictNextDayWeather([FromBody] WeatherForecastRequest request)
    {
        if (request == null || request.PreviousWeather == null)
        {
            return BadRequest("Previous weather data is required");
        }
        
        var nextDayWeather = _weatherService.PredictNextDayWeather(request.PreviousWeather);
        
        return Ok(nextDayWeather);
    }
    
    [HttpGet("random")]
    public ActionResult<WeatherData> GetRandomWeatherForecast([FromQuery] string day = "Monday")
    {
        var nextDayWeather = _weatherService.PredictNextDayWeather(new List<WeatherData>
        {
            new() { Day = day, Condition = "Sunny" }
        });
        
        return Ok(nextDayWeather);
    }
    
    [HttpGet("history/{days}")]
    public ActionResult<List<WeatherData>> GetHistoricalWeatherData(int days = 7)
    {
        if (days < 1 || days > 30)
        {
            return BadRequest("Days must be between 1 and 30");
        }
        
        var result = new List<WeatherData>();
        var daysOfWeek = new[] { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };
        var random = new Random();
        var conditions = new[] { "Sunny", "Cloudy", "Rainy", "Snowy", "Windy", "Foggy", "Stormy" };
        
        for (int i = 0; i < days; i++)
        {
            string day = daysOfWeek[i % 7];
            string condition = conditions[random.Next(conditions.Length)];
            
            result.Add(new WeatherData
            {
                Day = day,
                Temperature = random.Next(-5, 31),
                Condition = condition,
                WindSpeed = random.Next(5, 31),
                Humidity = random.Next(30, 96),
                UvIndex = random.Next(1, 10),
                Precipitation = random.Next(0, 30),
                Pressure = random.Next(995, 1026)
            });
        }
        
        return Ok(result);
    }
}