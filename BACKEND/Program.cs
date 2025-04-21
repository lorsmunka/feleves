using WeatherForecast.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApi(); // Using AddOpenApi instead of AddSwaggerGen

builder.Services.AddCors();

builder.Services.AddSingleton<WeatherService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi(); // Using MapOpenApi instead of UseSwagger and UseSwaggerUI
}

app.UseHttpsRedirection();
app.UseCors(policy => policy
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.MapGet("/", () => "Weather Forecast API is running!");

app.Run();
