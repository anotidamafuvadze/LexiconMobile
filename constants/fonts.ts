const fonts = {
  // Font families
  family: {
    regular: "Montserrat",
    bold: "Montserrat-Bold",
    targetWord: "System",
    count: "System",
  },

  // Font sizes
  size: {
    // Home screen
    homeTitle: 65,
    homeSubtitle: 21,
    homeButton: 30,

    // Menu screen
    menuButton: 40,
    soundButton: 50,
    difficultyButton: 40,

    // Word Pack
    wordPackTitle: 53,
    wordPackSubtitle: 20,
    wordPackButtonTitle: 30,
    wordPackButtonSubtitle: 17,

    // Game Lab
    gameLabHeaderTitle: 50,
    gameLabSubtitle: 21,
    gameLabButtonTitle: 25,
    gameLabButtonSubtitle: 17,

    // Target section
    targetTitle: 30,
    targetWord: 60,

    // Score section
    scoreLabel: 23,
    scoreValue: 32,

    targetPack: {
      nature: 75,
      food: 78,
      animals: 90,
      story: 48,
    },
  },

  // Font weights
  weight: {
    regular: 400,
    lightBold: 700,
    bold: 800,
  },

  // Shadows and text effects
  shadow: {
    gameBoard: "0px 6px 0px rgba(64, 59, 53, 0.8)",
    homeButton: "0px 4px 0px rgba(74, 71, 71, 0.9)",
    menuButton: "0px 6px 0px rgba(112, 106, 89, 0.7)",
    wordPackButton: "0px 6px 0px rgba(134, 128, 109, 0.5)",
    gameLabButton: "0px 6px 0px rgba(129, 124, 105, 0.6)",
    packGameBoard: "0px 6px 0px rgba(0, 0, 0, 0.7)",
    difficultyButton: "0px 6px 0px rgba(0, 0, 0, 01)",

    offset: {
      difficultyButton: { width: 0, height: 3.2 },
      natureLabel: { width: 1, height: 2 },
      natureWord: { width: 2, height: 4 },
      foodLabel: { width: 1, height: 4 },
      foodWord: { width: 3, height: 6 },
      animalsLabel: { width: 1, height: 2 },
      animalsWord: { width: 1, height: 4 },
      storyLabel: { width: 1, height: 2 },
      storyWord: { width: 1, height: 8 },

    },
  },
};

export default fonts;
