using WeatherForecast.Models;

namespace WeatherForecast.Services;

public class WeatherService
{
    private readonly Random _random = new();
    private readonly string[] _conditions = { "Sunny", "Cloudy", "Rainy", "Snowy", "Windy", "Foggy", "Stormy" };
    
    public List<WeatherData> GetForecastedWeather(int days, string[] daysOfWeek)
    {
        var result = new List<WeatherData>();
        
        int randomDays = days <= 3 ? days : 3;
        
        for (int i = 0; i < randomDays; i++)
        {
            string day = daysOfWeek[i % 7];
            result.Add(GenerateRandomWeather(day));
        }
        
        if (days > 3)
        {
            for (int i = 3; i < days; i++)
            {
                string day = daysOfWeek[i % 7];
                var previousThreeDays = result.Skip(i - 3).Take(3).ToList();
                result.Add(PredictNextDayWeather(previousThreeDays, day));
            }
        }
        
        return result;
    }
    
    private WeatherData PredictNextDayWeather(List<WeatherData> previousThreeDays, string day)
    {
        bool allSameConditions = previousThreeDays.All(d => d.Condition == previousThreeDays[0].Condition);
        
        if (allSameConditions)
        {
            string currentCondition = previousThreeDays[0].Condition;
            int probability = _random.Next(1, 101);
            string newCondition;
            
            if (probability <= 70)
            {
                newCondition = currentCondition;
            }
            else if (probability <= 90)
            {
                newCondition = ImproveWeatherCondition(currentCondition);
            }
            else
            {
                newCondition = WorsenWeatherCondition(currentCondition);
            }
            
            return CreateWeatherData(day, newCondition);
        }
        else
        {
            return GenerateRandomWeather(day);
        }
    }
    
    private WeatherData CreateWeatherData(string day, string condition)
    {
        return new WeatherData
        {
            Day = day,
            Condition = condition,
            Temperature = GenerateTemperatureBasedOnCondition(condition),
            WindSpeed = _random.Next(5, 31),
            Humidity = _random.Next(30, 96),
            UvIndex = GenerateUvIndexBasedOnCondition(condition),
            Precipitation = GeneratePrecipitationBasedOnCondition(condition),
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
        return CreateWeatherData(day, randomCondition);
    }
}