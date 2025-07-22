import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const BASE_WIDTH = 428; // base design reference

// calculate raw scale
const rawFontScale = width / BASE_WIDTH;

// clamp scale to avoid huge fonts on iPads
const fontScale = Math.min(rawFontScale, 1.0); // cap at 1.0
const isTablet = width >= 768;

const fonts = {
  // ======================= FONT FAMILIES =======================
  family: {
    regular: "Montserrat",
    bold: "Montserrat-Bold",
    targetWord: "System",
    count: "System",
  },

  // ======================= FONT WEIGHTS =======================
  weight: {
    regular: 400,
    lightBold: 700,
    bold: 800,
  },

  // ======================= FONT SIZES =======================
  size: {
    // Home screen
    homeTitle: (70 * fontScale) + (isTablet ? 5 : 0),

    homeSubtitle: 21 * fontScale,
    homeButton: 30 * fontScale,
    tileLetter: 40 * fontScale,

    // Menu screen
    menuButton: 40 * fontScale,
    soundButton: 50 * fontScale,
    difficultyButton: 40 * fontScale,

    // Word pack
    wordPackTitle: 53 * fontScale,
    wordPackSubtitle: 20 * fontScale,
    wordPackButtonTitle: 30 * fontScale,
    wordPackButtonSubtitle: 17 * fontScale,

    // Target section
    targetTitle: 30 * fontScale,
    targetWord: 60 * fontScale,

    // Score section
    scoreLabel: 23 * fontScale,
    scoreValue: 32 * fontScale,

    // Game results
    splash: 48 * fontScale,

    // Target word sizes by theme
    targetWordSize: {
      nature: 75 * fontScale,
      food: 75 * fontScale,
      animals: 90 * fontScale,
      story: 48 * fontScale,
    },
  },

  // ======================= SHADOWS & TEXT EFFECTS =======================
  shadow: {
    // Home screen
    gameBoard: "0px 6px 0px rgba(64, 59, 53, 0.8)",
    homeButton: "0px 4px 0px rgba(74, 71, 71, 0.9)",
    menuButton: "0px 6px 0px rgba(147, 138, 117, 0.6)",

    // Menu screen
    wordPackButton: "0px 6px 0px rgba(165, 155, 134, 0.6)",
    gameLabButton: "0px 8px 0px rgba(165, 155, 134, 0.6)",
    difficultyButton: "0px 5px 0px rgb(117, 109, 95)",

    // Word pack / game board
    packGameBoard: "0px 6px 0px rgba(0, 0, 0, 0.7)",

    // ======================= SHADOW OFFSETS =======================
    offset: {
      tileLetter: { width: 0, height: 2 },
      splash: { width: 0, height: 1 },
      difficultyLabel: { width: 0, height: 3.2 },

      // Packs
      natureLabel: { width: 1, height: 2 },
      natureWord: { width: 1, height: 3 },

      foodLabel: { width: 1, height: 2 },
      foodWord: { width: 3, height: 6 },

      animalsLabel: { width: 1, height: 2 },
      animalsWord: { width: 1, height: 4 },

      storyLabel: { width: 1, height: 2 },
      storyWord: { width: 1, height: 8 },
    },
  },
};

export default fonts;
