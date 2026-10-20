# Weather Clothes 🌤️

現在の天気や体感温度に合わせて、その日におすすめの服装を提案するWebアプリケーションです。

Open-Meteo APIから天気情報を取得し、体感温度に応じてトップス・ボトムス・アウターを提案します。

## 主な機能

- 現在の気温・体感温度の表示
- 今日の最高気温・最低気温の表示
- 天気に応じたアイコンの表示
- 体感温度に応じた服装の自動提案
  - トップス
  - ボトムス
  - アウター
- 天気情報の取得に失敗した場合のエラー表示

## 使用技術

| 分類 | 技術 |
|---|---|
| フレームワーク | Next.js / React |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| 天気API | Open-Meteo |
| バージョン管理 | Git / GitHub |

## アプリの仕組み

1. Open-Meteo APIから天気情報を取得
2. 取得したJSONデータから必要な情報を取り出す
3. 体感温度をもとに服装を判定
4. 気温・天気・おすすめの服装を画面に表示

## ディレクトリ構成

```text
app/
├── components/
│   └── WeatherCard.tsx
├── lib/
│   ├── weather.ts
│   └── clothing.ts
├── page.tsx
├── layout.tsx
└── globals.css
```

### 各ファイルの役割

- `page.tsx`：API取得の実行と画面の状態管理
- `WeatherCard.tsx`：天気情報と服装提案のUI表示
- `weather.ts`：Open-Meteo APIとの通信、天気データの処理
- `clothing.ts`：体感温度をもとにした服装判定

## ローカルでの起動方法

Node.jsとnpmがインストールされている環境で、以下を実行します。

```bash
git clone https://github.com/aoia2am/weather-clothes.git
cd weather-clothes
npm install
npm run dev
```

ブラウザで http://localhost:3000 にアクセスするとアプリを確認できます。

## 現在の仕様

- 対象地域：東京都・新宿駅周辺（固定）
- 服装判定には現在の体感温度を使用
- 地域選択機能は未実装
- 天気情報はOpen-Meteo APIを利用

## 今後の拡張案

- 地域選択機能
- 降水確率を考慮した服装提案
- 服装判定ロジックの改善
- 天気予報を使った時間帯別の服装提案

## 制作目的

外部APIを利用したWebアプリケーション開発の学習を目的として制作しました。

特に、APIからのデータ取得、JSONの処理、Reactの状態管理、TypeScriptによる型定義、コンポーネントの責務分離を学習しました。
