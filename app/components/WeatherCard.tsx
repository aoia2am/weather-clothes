
import type { WeatherData } from "../lib/weather";

type Props = {
  weather: WeatherData;
};

export default function WeatherCard({ weather }: Props) {
  return (
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
  );
}