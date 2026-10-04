"use client";

import { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather, type WeatherData } from "./lib/weather";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadWeather() {
      try {
        console.log("天気取得開始");

        const data = await fetchWeather();

        console.log("取得成功:", data);

        setWeather(data);
      } catch (error) {
        console.error("天気取得エラー:", error);
        setError("天気データを取得できませんでした");
      }
    }

    loadWeather();
  }, []);

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>{error}</p>
      </main>
    );
  }

  if (!weather) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>天気を取得中...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <WeatherCard weather={weather} />
    </main>
  );
}