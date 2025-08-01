const images = {
  // ======================= BACKGROUNDS =======================
  backgrounds: {
    // General
    menuScreen: require("@/app/assets/images/backgrounds/menu-screen-background.png"),
    difficultySelectionScreen: require("@/app/assets/images/backgrounds/menu-screen-background.png"),
    instructionScreen: require("@/app/assets/images/backgrounds/instruction-screen-background.png"),
    wordPackSelectionScreen: require("@/app/assets/images/backgrounds/default-screen-background.png"),

    // Word packs
    packs: {
      default: require("@/app/assets/images/backgrounds/default-screen-background.png"),
      nature: require("@/app/assets/images/backgrounds/wordPacks/nature-screen-background.png"),
      food: require("@/app/assets/images/backgrounds/wordPacks/food-screen-background.png"),
      animals: require("@/app/assets/images/backgrounds/wordPacks/animals-screen-background.png"),
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
    // Navigation
    backButton: require("@/app/assets/images/icons/back-button-icon.png"),
    resumeButton: require("@/app/assets/images/icons/resume-button-icon.png"),
    soundOn: require("@/app/assets/images/icons/sound-on-icon.png"),
    soundOff: require("@/app/assets/images/icons/sound-off-icon.png"),

    // Word packs
    naturePack: require("@/app/assets/images/icons/wordPacks/nature-icon.png"),
    foodPack: require("@/app/assets/images/icons/wordPacks/food-icon.png"),
    animalsPack: require("@/app/assets/images/icons/wordPacks/animals-icon.png"),
    storyPack: require("@/app/assets/images/icons/wordPacks/story-icon.png"),
    classicPack: require("@/app/assets/images/icons/wordPacks/classic-icon.png"),
  },

  // ======================= BRANDING =======================
  branding: {
    appLogo: require("@/app/assets/images/branding/app-logo.png"),
    adaptiveLogo: require("@/app/assets/images/branding/adaptive-logo.png"),
  },
};

export default images;
