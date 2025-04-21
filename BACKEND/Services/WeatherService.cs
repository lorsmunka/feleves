using WeatherForecast.Models;

namespace WeatherForecast.Services;

public class WeatherService
{
    private readonly Random _random = new();
    private readonly string[] _conditions = { "Sunny", "Cloudy", "Rainy", "Snowy", "Windy", "Foggy", "Stormy" };
    
    public WeatherData PredictNextDayWeather(List<WeatherData> previousWeather)
    {
        if (previousWeather == null || previousWeather.Count < 3)
        {
            return GenerateRandomWeather(GetNextDay(previousWeather ?? new List<WeatherData>()));
        }
        
        var lastThreeDays = previousWeather.TakeLast(3).ToList();
        
        bool hasConsistentWeather = lastThreeDays.All(d => d.Condition == lastThreeDays[0].Condition);
        
        string day = GetNextDay(previousWeather);
        
        if (hasConsistentWeather)
        {
            return PredictWeatherWithConsistentHistory(lastThreeDays, day);
        }
        
        return GenerateRandomWeather(day);
    }
    
    private string GetNextDay(List<WeatherData> previousWeather)
    {
        if (previousWeather == null || previousWeather.Count == 0)
        {
            return "Monday";
        }
        
        string lastDay = previousWeather.Last().Day;
        
        return lastDay switch
        {
            "Monday" => "Tuesday",
            "Tuesday" => "Wednesday",
            "Wednesday" => "Thursday",
            "Thursday" => "Friday",
            "Friday" => "Saturday",
            "Saturday" => "Sunday",
            "Sunday" => "Monday",
            _ => "Monday"
        };
    }
    
    private WeatherData PredictWeatherWithConsistentHistory(List<WeatherData> lastThreeDays, string day)
    {
        int probabilityValue = _random.Next(1, 101);
        string currentCondition = lastThreeDays[0].Condition;
        string nextCondition;
        
        if (probabilityValue <= 70)
        {
            nextCondition = currentCondition;
        }
        else if (probabilityValue <= 90)
        {
            nextCondition = ImproveWeatherCondition(currentCondition);
        }
        else
        {
            nextCondition = WorsenWeatherCondition(currentCondition);
        }
        
        return new WeatherData
        {
            Day = day,
            Condition = nextCondition,
            Temperature = GenerateTemperatureBasedOnCondition(nextCondition),
            WindSpeed = _random.Next(5, 31),
            Humidity = _random.Next(30, 96),
            UvIndex = GenerateUvIndexBasedOnCondition(nextCondition),
            Precipitation = GeneratePrecipitationBasedOnCondition(nextCondition),
            Pressure = _random.Next(995, 1026)
        };
    }
    
    private string ImproveWeatherCondition(string currentCondition)
    {
        return currentCondition switch
        {
            "Rainy" => "Cloudy",
            "Cloudy" => "Sunny",
            "Snowy" => "Cloudy",
            "Foggy" => "Cloudy",
            "Stormy" => "Rainy",
            "Windy" => "Cloudy",
            _ => "Sunny"
        };
    }
    
    private string WorsenWeatherCondition(string currentCondition)
    {
        return currentCondition switch
        {
            "Sunny" => "Cloudy",
            "Cloudy" => "Rainy",
            "Rainy" => "Stormy",
            "Windy" => "Rainy",
            _ => "Rainy"
        };
    }
    
    private int GenerateTemperatureBasedOnCondition(string condition)
    {
        return condition switch
        {
            "Sunny" => _random.Next(18, 31),
            "Cloudy" => _random.Next(15, 25),
            "Rainy" => _random.Next(10, 20),
            "Snowy" => _random.Next(-5, 5),
            "Windy" => _random.Next(15, 25),
            "Foggy" => _random.Next(5, 15),
            "Stormy" => _random.Next(8, 18),
            _ => _random.Next(10, 25)
        };
    }
    
    private int GenerateUvIndexBasedOnCondition(string condition)
    {
        return condition switch
        {
            "Sunny" => _random.Next(5, 10),
            "Cloudy" => _random.Next(2, 6),
            "Rainy" => _random.Next(1, 3),
            "Snowy" => 1,
            "Windy" => _random.Next(3, 7),
            "Foggy" => 1,
            "Stormy" => 1,
            _ => _random.Next(1, 10)
        };
    }
    
    private int GeneratePrecipitationBasedOnCondition(string condition)
    {
        return condition switch
        {
            "Sunny" => 0,
            "Cloudy" => _random.Next(0, 3),
            "Rainy" => _random.Next(5, 20),
            "Snowy" => _random.Next(5, 15),
            "Windy" => 0,
            "Foggy" => _random.Next(0, 3),
            "Stormy" => _random.Next(15, 30),
            _ => 0
        };
    }
    
    private WeatherData GenerateRandomWeather(string day)
    {
        string randomCondition = _conditions[_random.Next(_conditions.Length)];
        
        return new WeatherData
        {
            Day = day,
            Condition = randomCondition,
            Temperature = GenerateTemperatureBasedOnCondition(randomCondition),
            WindSpeed = _random.Next(5, 31),
            Humidity = _random.Next(30, 96),
            UvIndex = GenerateUvIndexBasedOnCondition(randomCondition),
            Precipitation = GeneratePrecipitationBasedOnCondition(randomCondition),
            Pressure = _random.Next(995, 1026)
        };
    }
}