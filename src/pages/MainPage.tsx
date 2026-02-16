import { useEffect, useState, type JSX } from "react";
import { fetchWeather } from "../api/weatherApi";
import { WeatherReportButton } from "../components/WeatherReportButton/WeatherReportButton";
import { WeatherInfo } from "../components/WeatherInfo/WeatherInfo";
import type { WeatherData } from "../api/weatherApi";
import { FaCloudSun } from "react-icons/fa";
import { FaCloud } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import { WiNightCloudyWindy } from "react-icons/wi";
import { PiCloudRainBold } from "react-icons/pi";
import { BsCloudRainHeavyFill } from "react-icons/bs";
import { IoIosRainy } from "react-icons/io";
import { BsFillCloudLightningRainFill } from "react-icons/bs";
import { BsFillCloudSnowFill } from "react-icons/bs";
import { BsFillCloudRainHeavyFill } from "react-icons/bs";
import { LocationInput } from "../components/LocationInput/LocationInput";

export type WeatherInfoProps = {
  error: string | null;
  date: string;
  temperature: string;
  weatherDesc: string;
  wind: string;
  humidity: string;
};

export type LocationInputProps = {
  cityInput: string;
  weatherIcon: JSX.Element | null;
  setCityInput: React.Dispatch<React.SetStateAction<string | null>>;
  setCity: React.Dispatch<React.SetStateAction<string | null>>;
};

export const MainPage = () => {
  const [city, setCity] = useState<null | string>(null);
  const [cityInput, setCityInput] = useState<null | string>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<null | string>(null);
  const weatherCodeMap: { [key: number]: string } = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Drizzle: Light intensity",
    53: "Drizzle: Moderate intensity",
    55: "Drizzle: Dense intensity",
    56: "Freezing Drizzle: Light intensity",
    57: "Freezing Drizzle: Dense intensity",
    61: "Rain: Slight intensity",
    63: "Rain: Moderate intensity",
    65: "Rain: Heavy intensity",
    66: "Freezing Rain: Light intensity",
    67: "Freezing Rain: Heavy intensity",
    71: "Snow fall: Slight intensity",
    73: "Snow fall: Moderate intensity",
    75: "Snow fall: Heavy intensity",
    77: "Snow grains",
    80: "Rain showers: Slight",
    81: "Rain showers: Moderate",
    82: "Rain showers: Violent",
    85: "Snow showers: Slight",
    86: "Snow showers: Heavy",
    95: "Thunderstorm: Slight or moderate",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };
  const weatherIconMap: { [key: number]: JSX.Element } = {
    0: <FaSun />,
    1: <FaSun />,
    2: <FaCloudSun />,
    3: <FaCloud />,
    45: <WiNightCloudyWindy />,
    48: <WiNightCloudyWindy />,
    51: <PiCloudRainBold />,
    53: <PiCloudRainBold />,
    55: <PiCloudRainBold />,
    56: <PiCloudRainBold />,
    57: <PiCloudRainBold />,
    61: <BsCloudRainHeavyFill />,
    63: <BsCloudRainHeavyFill />,
    65: <BsCloudRainHeavyFill />,
    66: <IoIosRainy />,
    67: <IoIosRainy />,
    71: <BsFillCloudSnowFill />,
    73: <BsFillCloudSnowFill />,
    75: <BsFillCloudSnowFill />,
    77: <BsFillCloudSnowFill />,
    80: <BsFillCloudRainHeavyFill />,
    81: <BsFillCloudRainHeavyFill />,
    82: <BsFillCloudRainHeavyFill />,
    85: <BsFillCloudSnowFill />,
    86: <BsFillCloudSnowFill />,
    95: <BsFillCloudLightningRainFill />,
    96: <BsFillCloudLightningRainFill />,
    99: <BsFillCloudLightningRainFill />,
  };

  useEffect(() => {
    if (!city) return;
    const loadWeather = async () => {
      if (!city) return;
      try {
        const data = await fetchWeather(city);
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setWeatherData(null);
        setError((err as Error).message);
      }
    };
    loadWeather();
  }, [city]);

  const current = weatherData?.current;
  const temperature = current
    ? `${Math.round(current.temperature_2m)}°C`
    : "N/A";
  const weatherDesc =
    current !== undefined
      ? weatherCodeMap[current.weather_code] || "Unknown"
      : "N/A";
  const wind = current ? `${current.wind_speed_10m} km/h` : "N/A";
  const humidity = current ? `${current.relative_humidity_2m}%` : "N/A";
  const date = new Date().toLocaleDateString();
  const weatherIcon: JSX.Element | null =
    current !== undefined ? weatherIconMap[current.weather_code] || null : null;

  return (
    <div className="container">
      <div className="content">
        <LocationInput
          cityInput={cityInput ?? ""}
          setCityInput={setCityInput}
          setCity={setCity}
          weatherIcon={weatherIcon}
        />
        <div className="information">
          <WeatherInfo
            error={error}
            date={date}
            temperature={temperature}
            weatherDesc={weatherDesc}
            wind={wind}
            humidity={humidity}
          />
        </div>
        <div className="report">
          <WeatherReportButton />
        </div>
      </div>
    </div>
  );
};
