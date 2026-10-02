export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-gray-500">調布</p>

        <div className="mt-4 text-center">
          <p className="text-6xl">🌤️</p>
          <p className="mt-3 text-5xl font-bold">18℃</p>
          <p className="mt-2 text-gray-500">体感温度 16℃</p>
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
    </main>
  );
}