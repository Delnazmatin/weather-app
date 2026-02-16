# 🌤 Weather App

A modern and responsive Weather Application built with React, TypeScript, and Vite.
The app fetches real-time weather data using the Open-Meteo API and follows a clean, modular architecture.

---

## 🚀 Features

- Search weather by city name
- Automatic geocoding (city → coordinates)
- Real-time current weather data
- Weather condition descriptions
- Dynamic weather icons
- Wind speed and humidity display
- Error handling for invalid cities
- Environment-based configuration (.env)
- Clean separation of concerns (API layer & UI layer)

---

## 🛠 Tech Stack

- React
- TypeScript
- Vite
- Fetch API
- Open-Meteo API
- React Icons
- Prettier

---

## 🏗 Architecture

The project follows a modular structure:

- `weatherApi.ts` → API communication logic
- `MainPage.tsx` → State management and UI logic
- `.env` → Environment configuration

The weather fetching process includes two steps:

1. Fetch city coordinates using Geocoding API
2. Fetch weather data using latitude & longitude

---

## ⚙️ Environment Variables

VITE_GEOCODING_BASE_URL=https://geocoding-api.open-meteo.com/v1
VITE_WEATHER_BASE_URL=https://api.open-meteo.com/v1

## 📦 Installation

```bash
npm install
npm run dev

```
