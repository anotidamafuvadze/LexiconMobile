import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import layouts from "@/constants/layouts";

/**
 * Theme-based style overrides for each Word Pack
 * - Used to apply unique visual styles (colors, fonts, shadows) to game elements
 */
const packThemes = {
  nature: {
    // Game board appearance
    gameBoard: {
      backgroundColor: colors.NATURE_PACK_BOARD,
      borderColor: colors.BLACK,
      boxShadow: fonts.shadow.packGameBoard,
    },

    // Shared text color for score/pops titles
    text: {
      color: colors.GAME_BOARD_TITLE,
    },

    // Label above the target word (e.g., "TARGET")
    targetLabel: {
      color: colors.WHITE,
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.natureLabel,
      textShadowRadius: 0,
    },

    // Stylized target word
    targetWord: {
      fontFamily: "Nature",
      fontSize: fonts.size.targetPack.nature,
      color: colors.NATURE_PACK_TEXT,
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.natureWord,
      textShadowRadius: 0,
      letterSpacing: layouts.NATURE_LETTER_SPACING,
      marginBottom: layouts.NATURE_TEXT_MARGIN_BOTTOM,
    },
  },

  food: {
    gameBoard: {
      backgroundColor: colors.FOOD_PACK_BOARD,
      borderColor: colors.BLACK,
      boxShadow: fonts.shadow.packGameBoard,
    },
    text: {
      color: colors.GAME_BOARD_TITLE,
    },
    targetLabel: {
      color: colors.WHITE,
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.foodLabel,
      textShadowRadius: 0,
    },
    targetWord: {
      fontFamily: "Food",
      fontSize: fonts.size.targetPack.food,
      color: colors.FOOD_PACK_TEXT,
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.foodWord,
      textShadowRadius: 0,
      letterSpacing: layouts.FOOD_LETTER_SPACING,
      marginBottom: layouts.FOOD_TEXT_MARGIN_BOTTOM,
    },
  },

  animals: {
    gameBoard: {
      backgroundColor: colors.ANIMALS_PACK_BOARD,
      borderColor: colors.BLACK,
      boxShadow: fonts.shadow.packGameBoard,
    },
    text: {
      color: colors.WHITE,
    },
    targetLabel: {
      color: colors.WHITE,
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.animalsLabel,
      textShadowRadius: 0,
    },
    targetWord: {
      fontFamily: "Animals",
      fontSize: fonts.size.targetPack.animals,
      color: colors.ANIMALS_PACK_TEXT,
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.animalsWord,
      textShadowRadius: 0,
      marginTop: layouts.ANIMALS_TEXT_MARGIN_TOP,
      letterSpacing: layouts.ANIMALS_LETTER_SPACING,
      marginBottom: layouts.ANIMALS_TEXT_MARGIN_BOTTOM,
    },
  },

  story: {
    gameBoard: {
      backgroundColor: colors.STORY_PACK_BOARD,
      borderColor: colors.BLACK,
      boxShadow: fonts.shadow.packGameBoard,
    },
    text: {
      color: colors.GAME_BOARD_TITLE,
    },
    targetLabel: {
      color: colors.WHITE,
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.storyLabel,
      textShadowRadius: 0,
    },
    targetWord: {
      fontFamily: "Story",
      fontSize: fonts.size.targetPack.story,
      color: colors.STORY_PACK_TEXT,
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.storyWord,
      textShadowRadius: 0,
      letterSpacing: layouts.STORY_LETTER_SPACING,
      marginTop: layouts.STORY_TEXT_MARGIN_TOP,
      marginBottom: layouts.STORY_TEXT_MARGIN_BOTTOM,
    },
  },
};

export default packThemes;
