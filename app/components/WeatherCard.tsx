import type { WeatherData } from "../lib/weather";
import { getWeatherIcon } from "../lib/weather";
import { getClothingRecommendation } from "../lib/clothing";

type Props = {
  weather: WeatherData;
};

export default function WeatherCard({ weather }: Props) {

  const clothing = getClothingRecommendation(
  weather.apparentTemperature
);

const weatherIcon = getWeatherIcon(weather.weatherCode);


  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-md">
      <p className="text-lg font-medium text-black">
        調布
      </p>

      <div className="mt-6 text-center">
        <p className="text-7xl">
          {weatherIcon}
        </p>

        <div className="mt-4 flex items-end justify-center gap-2">
          <p className="text-6xl font-semibold text-black">
            {weather.temperature}℃
          </p>

          <p className="mb-1 text-base text-gray-600">
            （体感 {weather.apparentTemperature}℃）
          </p>
        </div>

        <p className="mt-3 text-lg text-gray-700">
          最高 {weather.maxTemperature}℃
          <span className="mx-2">/</span>
          最低 {weather.minTemperature}℃
        </p>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold text-black">
          今日の服装
        </h2>

        <div className="mt-6 space-y-5">
          <div>
            <p className="text-sm text-gray-600">
              👕 トップス
            </p>
            <p className="mt-1 text-lg font-medium text-black">
              {clothing.tops}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-600">
              👖 ボトムス
            </p>
            <p className="mt-1 text-lg font-medium text-black">
              {clothing.bottoms}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-600">
              🧥 アウター
            </p>
            <p className="mt-1 text-lg font-medium text-black">
              {clothing.outer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}