import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import layouts from "@/constants/layouts";
import { TextStyle, ViewStyle } from "react-native";

/**
 * Theme-based style overrides for each Word Pack
 * - Applies unique colors, fonts, and shadows to game UI elements
 */
const packThemes = {
  // ======================= NATURE PACK =======================
  nature: {
    // Styling for score and pops boards
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

    // Styling for the 4x4 tile grid
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

    // "YOUR WORD" label above the target
    targetLabel: {
      color: colors.WHITE,
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.natureLabel,
      textShadowRadius: 0,
    },

    // Styling for the main target word
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

  // ======================= FOOD PACK =======================
  food: {
    // Styling for score and pops boards
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

    // Styling for the 4x4 tile grid
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

    // "YOUR WORD" label above the target
    targetLabel: {
      color: colors.WHITE,
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.foodLabel,
      textShadowRadius: 0,
    },

    // Styling for the main target word
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

  // ======================= ANIMALS PACK =======================
  animals: {
    // Styling for score and pops boards
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

    // Styling for the 4x4 tile grid
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

    // "YOUR WORD" label above the target
    targetLabel: {
      color: colors.WHITE,
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.animalsLabel,
      textShadowRadius: 0,
    },

    // Styling for the main target word
    targetWord: {
      fontFamily: "Animals",
      fontSize: fonts.size.targetPack.animals,
      color: colors.ANIMALS_PACK_TEXT,
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.animalsWord,
      textShadowRadius: 0,
      letterSpacing: layouts.ANIMALS_LETTER_SPACING,
      marginTop: layouts.ANIMALS_TEXT_MARGIN_TOP,
      marginBottom: layouts.ANIMALS_TEXT_MARGIN_BOTTOM,
    },
  },

  // ======================= STORY PACK =======================
  story: {
    // Styling for score and pops boards
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

    // Styling for the 4x4 tile grid
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

    // "YOUR WORD" label above the target
    targetLabel: {
      color: colors.WHITE,
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.storyLabel,
      textShadowRadius: 0,
    },

    // Styling for the main target word
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
