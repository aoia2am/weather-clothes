export type WeatherData = {
  temperature: number;
  apparentTemperature: number;
  maxTemperature: number;
  minTemperature: number;
  weatherCode: number;
};

export async function fetchWeather(): Promise<WeatherData> {
  const latitude = 35.65;
  const longitude = 139.54;

  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,apparent_temperature,weather_code` +
    `&daily=temperature_2m_max,temperature_2m_min` +
    `&timezone=Asia%2FTokyo`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("天気APIの取得に失敗しました");
  }

  const data = await response.json();

  return {
  temperature: data.current.temperature_2m,
  apparentTemperature: data.current.apparent_temperature,
  maxTemperature: data.daily.temperature_2m_max[0],
  minTemperature: data.daily.temperature_2m_min[0],
  weatherCode: data.current.weather_code,
}
};

export function getWeatherIcon(weatherCode: number): string {
  if (weatherCode === 0) {
    return "☀️";
  }

  if (weatherCode <= 3) {
    return "🌤️";
  }

  if (weatherCode <= 48) {
    return "🌫️";
  }

  if (weatherCode <= 67) {
    return "🌧️";
  }

  if (weatherCode <= 77) {
    return "🌨️";
  }

  if (weatherCode <= 82) {
    return "🌦️";
  }

  if (weatherCode <= 86) {
    return "🌨️";
  }

  return "⛈️";
}
