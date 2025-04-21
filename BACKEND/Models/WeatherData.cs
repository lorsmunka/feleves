namespace WeatherForecast.Models;

public class WeatherData
{
    public required string Day { get; set; }
    public int Temperature { get; set; }
    public required string Condition { get; set; }
    public int WindSpeed { get; set; }
    public int Humidity { get; set; }
    public int UvIndex { get; set; }
    public int Precipitation { get; set; }
    public int Pressure { get; set; }
}