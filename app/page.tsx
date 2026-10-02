"use client";

import { useEffect, useState } from "react";

type WeatherData = {
  temperature: number;
  apparentTemperature: number;
  maxTemperature: number;
  minTemperature: number;
};

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const latitude = 35.65;
        const longitude = 139.54;

        const url =
          `https://api.open-meteo.com/v1/forecast` +
          `?latitude=${latitude}` +
          `&longitude=${longitude}` +
          `&current=temperature_2m,apparent_temperature` +
          `&daily=temperature_2m_max,temperature_2m_min` +
          `&timezone=Asia%2FTokyo`;
        console.log("API取得開始");

        const response = await fetch(url);

        console.log("レスポンス:", response);

        if (!response.ok) {
          throw new Error("天気APIの取得に失敗しました");
        }

        const data = await response.json();

        console.log("取得したデータ:", data);

        setWeather({
          temperature: data.current.temperature_2m,
          apparentTemperature: data.current.apparent_temperature,
          maxTemperature: data.daily.temperature_2m_max[0],
          minTemperature: data.daily.temperature_2m_min[0],
        });

      } catch (error) {
        console.error("エラー:", error);
      }
    }

    fetchWeather();
  }, []);

  if (!weather) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>天気を取得中...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-gray-500">調布</p>

        <div className="mt-4 text-center">
          <p className="text-6xl">🌤️</p>

          <p className="mt-3 text-5xl font-bold">
            {weather.temperature}℃
            <span className="ml-2 text-lg font-normal text-gray-500">
              （体感 {weather.apparentTemperature}℃）
            </span>
          </p>

          <p className="mt-3 text-gray-500">
            最高 {weather.maxTemperature}℃ / 最低 {weather.minTemperature}℃
          </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold">今日の服装</h2>

        <div className="mt-4 space-y-4">
          <div>
            <p className="text-sm text-gray-500">👕 トップス</p>
            <p className="text-lg">長袖シャツ</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">👖 ボトムス</p>
            <p className="text-lg">長ズボン</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">🧥 アウター</p>
            <p className="text-lg">薄手のジャケット</p>
          </div>
        </div>
      </div>
    </div>
    </main >
  );
}