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
    homeTitle: 70,
    homeSubtitle: 21,
    homeButton: 30,
    tileLetter: 40,

    // Menu screen
    menuButton: 40,
    soundButton: 50,
    difficultyButton: 40,

    // Word pack
    wordPackTitle: 53,
    wordPackSubtitle: 20,
    wordPackButtonTitle: 30,
    wordPackButtonSubtitle: 17,

    // Game lab
    gameLabHeaderTitle: 50,
    gameLabSubtitle: 21,
    gameLabButtonTitle: 28,
    gameLabButtonSubtitle: 18,

    // Target section
    targetTitle: 30,
    targetWord: 60,

    // Score section
    scoreLabel: 23,
    scoreValue: 32,

    // Game results
    splash: 48,

    // Target word sizes by theme
    targetWordSize: {
      nature: 75,
      food: 75,
      animals: 90,
      story: 48,
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
