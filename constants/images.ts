const images = {
  // ======================= BACKGROUNDS =======================
  backgrounds: {
    // General screens
    defaultScreen: require("@/app/assets/images/backgrounds/default-screen-background.png"),
    difficultySelectionScreen: require("@/app/assets/images/backgrounds/menu-screen-background.png"),
    gameLabScreen: require("@/app/assets/images/backgrounds/lab-screen-background.png"),
    menuScreen: require("@/app/assets/images/backgrounds/menu-screen-background.png"),
    wordPackSelectionScreen: require("@/app/assets/images/backgrounds/default-screen-background.png"),

    // Word pack screens
    packs: {
      animals: require("@/app/assets/images/backgrounds/wordPacks/animals-screen-background.png"),
      food: require("@/app/assets/images/backgrounds/wordPacks/food-screen-background.png"),
      nature: require("@/app/assets/images/backgrounds/wordPacks/nature-screen-background.png"),
      story: require("@/app/assets/images/backgrounds/wordPacks/story-screen-background.png"),
    },
  },

  // ======================= LABELS =======================
  labels: {
    easy: require("@/app/assets/images/labels/easy-label.png"),
    normal: require("@/app/assets/images/labels/normal-label.png"),
    hard: require("@/app/assets/images/labels/hard-label.png"),
  },

  // ======================= ICONS =======================
  icons: {
    // Navigation icons
    backButton: require("@/app/assets/images/icons/back-button-icon.png"),
    resumeButton: require("@/app/assets/images/icons/resume-button-icon.png"),
    soundOn: require("@/app/assets/images/icons/sound-on-icon.png"),
    soundOff: require("@/app/assets/images/icons/sound-off-icon.png"),

    // Word pack icons
    classicPack: require("@/app/assets/images/icons/wordPacks/classic-icon.png"),
    naturePack: require("@/app/assets/images/icons/wordPacks/nature-icon.png"),
    animalsPack: require("@/app/assets/images/icons/wordPacks/animals-icon.png"),
    foodPack: require("@/app/assets/images/icons/wordPacks/food-icon.png"),
    storyPack: require("@/app/assets/images/icons/wordPacks/story-icon.png"),

    // Game lab icons
    difficulty: require("@/app/assets/images/icons/gameLab/difficulty-icon.png"),
    questMode: require("@/app/assets/images/icons/gameLab/quest-mode-icon.png"),
    editTile: require("@/app/assets/images/icons/gameLab/edit-tile-icon.png"),
    jumpTile: require("@/app/assets/images/icons/gameLab/jump-tile-icon.png"),
    eraserTile: require("@/app/assets/images/icons/gameLab/eraser-tile-icon.png"),
  },

  // ======================= BRANDING =======================
  branding: {
    appLogo: require("@/app/assets/images/branding/app-logo.png"),
    adaptiveLogo: require("@/app/assets/images/branding/adaptive-logo.png"),
    splashScreen: require("@/app/assets/images/branding/splash-screen.png"),
  },
};

export default images;
