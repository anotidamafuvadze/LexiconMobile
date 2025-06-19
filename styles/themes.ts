import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import layouts from "@/constants/layouts";
import { TextStyle, ViewStyle } from "react-native";

// TODO: Adjust font sizes and margins to mirror home screen

/**
 * Theme-based style overrides for each Word Pack
 * - Applies unique colors, fonts, and shadows to game UI elements
 */
const packThemes = {
  // ============================
  // Nature Pack
  // ============================
  nature: {
    // Score and pops board styling
    gameBoard: {
      board: {
        backgroundColor: colors.NATURE_PACK_BOARD,
        borderColor: colors.BLACK,
        boxShadow: fonts.shadow.packGameBoard,
      } as ViewStyle,
      text: {
        color: colors.GAME_BOARD_TITLE,
      } as TextStyle,
    },

    // 4x4 game grid styling
    gameGrid: {
      grid: {
        backgroundColor: colors.HOME_GRID_BG,
      } as ViewStyle,
      cell: {
        backgroundColor: colors.HOME_GRID_CELL_BG,
      } as ViewStyle,
      text: {
        fontFamily: fonts.family.regular,
        color: colors.WORD_PACK_TITLE,
      } as TextStyle,
    },

    // Target word section (label + main word)
    targetWord: {
      title: {
        color: colors.WHITE,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.natureTitle,
        textShadowRadius: 0,
      } as TextStyle,
      word: {
        fontFamily: "Nature",
        fontSize: fonts.size.targetPack.nature,
        color: colors.NATURE_PACK_TEXT,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.natureTargetTitle,
        textShadowRadius: 0,
        letterSpacing: layouts.NATURE_LETTER_SPACING,
        marginTop: layouts.NATURE_ICON_TOP,
        marginBottom: layouts.NATURE_TEXT_MARGIN_BOTTOM,
      } as TextStyle,
    },
  },

  // ============================
  // Food Pack
  // ============================
  food: {
    gameBoard: {
      board: {
        backgroundColor: colors.FOOD_PACK_BOARD,
        borderColor: colors.BLACK,
        boxShadow: fonts.shadow.packGameBoard,
      } as ViewStyle,
      text: {
        color: colors.GAME_BOARD_TITLE,
      } as TextStyle,
    },

    gameGrid: {
      grid: {
        backgroundColor: colors.HOME_GRID_BG,
      } as ViewStyle,
      cell: {
        backgroundColor: colors.HOME_GRID_CELL_BG,
      } as ViewStyle,
      text: {
        fontFamily: fonts.family.regular,
        color: colors.WORD_PACK_TITLE,
      } as TextStyle,
    },

    targetWord: {
      title: {
        color: colors.WHITE,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.foodTargetTitle,
        textShadowRadius: 0,
      } as TextStyle,
      word: {
        fontFamily: "Food",
        fontSize: fonts.size.targetPack.food,
        color: colors.FOOD_PACK_TEXT,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.foodWord,
        textShadowRadius: 0,
        letterSpacing: layouts.FOOD_LETTER_SPACING,
        marginBottom: layouts.FOOD_TEXT_MARGIN_BOTTOM,
      } as TextStyle,
    },
  },

  // ============================
  // Animals Pack
  // ============================
  animals: {
    gameBoard: {
      board: {
        backgroundColor: colors.ANIMALS_PACK_BOARD,
        borderColor: colors.BLACK,
        boxShadow: fonts.shadow.packGameBoard,
      } as ViewStyle,
      text: {
        color: colors.GAME_BOARD_TITLE,
      } as TextStyle,
    },

    gameGrid: {
      grid: {
        backgroundColor: colors.HOME_GRID_BG,
      } as ViewStyle,
      cell: {
        backgroundColor: colors.HOME_GRID_CELL_BG,
      } as ViewStyle,
      text: {
        fontFamily: fonts.family.regular,
        color: colors.WORD_PACK_TITLE,
      } as TextStyle,
    },

    targetWord: {
      title: {
        color: colors.WHITE,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.animalsLabel,
        textShadowRadius: 0,
      } as TextStyle,
      word: {
        fontFamily: "Animals",
        fontSize: fonts.size.targetPack.animals,
        color: colors.ANIMALS_PACK_TEXT,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.animalsWord,
        textShadowRadius: 0,
        letterSpacing: layouts.ANIMALS_LETTER_SPACING,
        marginTop: layouts.ANIMALS_TEXT_MARGIN_TOP,
        marginBottom: layouts.ANIMALS_TEXT_MARGIN_BOTTOM,
      } as TextStyle,
    },
  },

  // ============================
  // Story Pack
  // ============================
  story: {
    gameBoard: {
      board: {
        backgroundColor: colors.STORY_PACK_BOARD,
        borderColor: colors.BLACK,
        boxShadow: fonts.shadow.packGameBoard,
      } as ViewStyle,
      text: {
        color: colors.GAME_BOARD_TITLE,
      } as TextStyle,
    },

    gameGrid: {
      grid: {
        backgroundColor: colors.HOME_GRID_BG,
      } as ViewStyle,
      cell: {
        backgroundColor: colors.HOME_GRID_CELL_BG,
      } as ViewStyle,
      text: {
        fontFamily: fonts.family.regular,
        color: colors.WORD_PACK_TITLE,
      } as TextStyle,
    },

    targetWord: {
      title: {
        color: colors.WHITE,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.foodTargetTitle,
        textShadowRadius: 0,
      } as TextStyle,
      word: {
        fontFamily: "Story",
        fontSize: fonts.size.targetPack.story,
        color: colors.STORY_PACK_TEXT,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.storyWord,
        textShadowRadius: 0,
        letterSpacing: layouts.STORY_LETTER_SPACING,
        marginTop: layouts.STORY_TEXT_MARGIN_TOP,
        marginBottom: layouts.STORY_TEXT_MARGIN_BOTTOM,
      } as TextStyle,
    },
  },
};

export default packThemes;
