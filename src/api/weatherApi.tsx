const GEO_BASE_URL = import.meta.env.VITE_GEOCODING_BASE_URL as string;
const WEATHER_BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL as string;

export type WeatherData = {
  current: {
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
  };
};
export const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    //part 1
    const geoUrl = `${GEO_BASE_URL}/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
    const geoResponse = await fetch(geoUrl);
    if (!geoResponse.ok) {
      throw new Error("geocoding failed");
    }
    const geoData = await geoResponse.json();
    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("city not found");
    }
    const { latitude, longitude } = geoData.results[0];
    //part 2
    const forecastUrl = `${WEATHER_BASE_URL}/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&timezone=auto`;
    const forecastResponse = await fetch(forecastUrl);
    if (!forecastResponse.ok) {
      throw new Error("Forecast failed");
    }
    const data: WeatherData = await forecastResponse.json();
    return data;
  } catch (err) {
    console.error(err);
    throw new Error(
      err instanceof Error ? err.message : "Unknown error occurred",
    );
  }
};
