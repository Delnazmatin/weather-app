# Weather App – API Documentation

This project uses the Open-Meteo API for geocoding and weather forecasting.

## 🔹 Base URLs

Geocoding API:
https://geocoding-api.open-meteo.com/v1

Forecast API:
https://api.open-meteo.com/v1

These URLs are stored in the `.env` file:

VITE_GEOCODING_BASE_URL=https://geocoding-api.open-meteo.com/v1
VITE_WEATHER_BASE_URL=https://api.open-meteo.com/v1

---

## 🔹 Environment Variables

The project uses Vite environment variables.

Example:

VITE_GEOCODING_BASE_URL=https://geocoding-api.open-meteo.com/v1
VITE_WEATHER_BASE_URL=https://api.open-meteo.com/v1

⚠ After editing `.env`, restart the dev server.

---

## 🔹 API Flow

The weather fetching process happens in 2 steps:

### 1️⃣ Get City Coordinates

Endpoint:

GET /search

Example Request:

/search?name=Tehran&count=1&language=en&format=json

Response Example:

{
"results": [
{
"latitude": 35.6944,
"longitude": 51.4215
}
]
}

If no results are found, an error is thrown:
"city not found"

---

### 2️⃣ Get Current Weather

Endpoint:

GET /forecast

Example Request:

/forecast?latitude=35.6944&longitude=51.4215&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&timezone=auto

Response Structure Used:

{
"current": {
"temperature_2m": number,
"weather_code": number,
"wind_speed_10m": number,
"relative_humidity_2m": number
}
}

---

## 🔹 TypeScript Types

WeatherData type used in the project:

```ts
type WeatherData = {
  current: {
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
  };
};
```
