export type ClothingRecommendation = {
  tops: string;
  bottoms: string;
  outer: string;
};

export function getClothingRecommendation(
  apparentTemperature: number
): ClothingRecommendation {
  if (apparentTemperature < 5) {
    return {
      tops: "ニット / 厚手トップス",
      bottoms: "厚手パンツ",
      outer: "ダウン / 厚手コート",
    };
  }

  if (apparentTemperature < 10) {
    return {
      tops: "ニット / スウェット",
      bottoms: "長ズボン",
      outer: "コート",
    };
  }

  if (apparentTemperature < 15) {
    return {
      tops: "長袖 / スウェット",
      bottoms: "長ズボン",
      outer: "ジャケット / 薄手コート",
    };
  }

  if (apparentTemperature < 20) {
    return {
      tops: "長袖シャツ / 薄手ニット",
      bottoms: "長ズボン",
      outer: "薄手ジャケット",
    };
  }

  if (apparentTemperature < 25) {
    return {
      tops: "長袖 or 半袖",
      bottoms: "軽めのパンツ",
      outer: "基本なし",
    };
  }

  if (apparentTemperature < 30) {
    return {
      tops: "半袖",
      bottoms: "薄手パンツ / スカート",
      outer: "なし",
    };
  }

  return {
    tops: "薄手の半袖",
    bottoms: "通気性のいいボトムス",
    outer: "なし",
  };
}