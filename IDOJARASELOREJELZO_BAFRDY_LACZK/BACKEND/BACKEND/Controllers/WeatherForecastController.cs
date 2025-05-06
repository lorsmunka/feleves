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
    
[HttpGet("history/{days}")]
public ActionResult<List<WeatherData>> GetHistoricalWeatherData(int days = 7)
{
    if (days < 1 || days > 30)
    {
        return BadRequest("Days must be between 1 and 30");
    }
    
    var today = DateTime.Now.DayOfWeek;
    var daysOfWeek = new string[7];
    
    for (int i = 0; i < 7; i++)
    {
        int dayIndex = ((int)today + i) % 7;
        daysOfWeek[i] = Enum.GetName(typeof(DayOfWeek), dayIndex);
    }
    
    var result = _weatherService.GetForecastedWeather(days, daysOfWeek);
    
    return Ok(result);
}
}