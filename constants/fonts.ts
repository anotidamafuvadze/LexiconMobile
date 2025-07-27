import { useWindowDimensions } from "react-native";

const BASE_WIDTH = 428;

export default function useFonts() {
  const { width, height } = useWindowDimensions();

  const BASE_HEIGHT = 926;
  const scale = height / BASE_HEIGHT;

  const isTablet = Math.min(width, height) >= 768;

  const fonts = {
    // ======================= FAMILIES =======================
    family: {
      primary: "Montserrat",
      secondary: "System",
    },

    // ======================= WEIGHTS =======================
    weight: {
      semiBold: 700,
      bold: 800,
    },

    // ======================= SIZES =======================
    size: {
      homeTitle: 70 * scale + (isTablet ? 5 : 0),
      homeSubtitle: 21 * scale,
      homeButton: 30 * scale,
      tileLetter: 40 * scale,
      menuButton: 40 * scale,
      soundButton: 50 * scale,
      instruction: 30 * scale,
      wordPackTitle: 53 * scale,
      wordPackSubtitle: 20 * scale,
      wordPackButtonTitle: 30 * scale,
      wordPackButtonSubtitle: 17 * scale,
      targetTitle: 30 * scale,
      targetWord: {
        default: 64 * scale,
        nature: 77 * scale,
        food: 68 * scale,
        animals: 75 * scale,
        story: 55 * scale,
      },
      scoreLabel: 23 * scale,
      scoreValue: 32 * scale,
      splash: 48 * scale,
    },

    // ======================= SHADOWS =======================
    shadow: {
      gameBoard: {
        color: "rgba(0, 0, 0, 0.7)",
        opacity: 0.7,
        radius: 0,
      },
      homeButton: {
        color: "rgba(74, 71, 71, 0.9)",
        opacity: 0.9,
        radius: 0,
      },
      menuButton: {
        color: "rgba(147, 138, 117, 0.6)",
        opacity: 0.6,
        radius: 0,
      },
      wordPackButton: {
        color: "rgba(165, 155, 134, 0.6)",
        opacity: 0.6,
        radius: 0,
      },
      difficultyButton: {
        color: "rgb(117, 109, 95)",
        opacity: 1,
        radius: 0,
      },

      offset: {
        gameBoard: { width: 0, height: 6 },
        packGameBoard: { width: 0, height: 6 },
        homeButton: { width: 0, height: 4 },
        menuButton: { width: 0, height: 6 },
        wordPackButton: { width: 0, height: 6 },
        difficultyButton: { width: 0, height: 5 },
        tileLetter: { width: 0, height: 2 },
        splash: { width: 0, height: 1 },
        natureLabel: { width: 1, height: 1.2 },
        natureWord: { width: 1, height: 3 },
        foodLabel: { width: 1, height: 1.2 },
        foodWord: { width: 2, height: 4 },
        animalsLabel: { width: 1, height: 2 },
        animalsWord: { width: 1, height: 4 },
        storyLabel: { width: 1, height: 2 },
        storyWord: { width: 1, height: 4 },
      },
    },
  };

  return fonts;
}
