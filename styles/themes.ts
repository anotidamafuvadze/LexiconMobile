import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import layouts from "@/constants/layouts";
import { TextStyle, ViewStyle } from "react-native";

const packThemes = {
  // ======================= NATURE PACK =======================
  nature: {
    // Score + Pops board
    gameBoard: {
      board: {
        backgroundColor: colors.NATURE_PACK_BOARD,
        borderColor: colors.BLACK,
        boxShadow: fonts.shadow.packGameBoard,
      } as ViewStyle,
      text: {
        color: colors.NATURE_PACK_BOARD_TEXT,
      } as TextStyle,
    },

    // 4x4 game grid
    gameGrid: {
      grid: {
        backgroundColor: colors.NATURE_PACK_GRID_BG,
      } as ViewStyle,
      cell: {
        backgroundColor: colors.NATURE_PACK_GRID_CELL,
      } as ViewStyle,
      text: {
        fontFamily: fonts.family.regular,
        color: colors.WORD_PACK_TITLE,
      } as TextStyle,
    },

    // Target word label and word
    targetWord: {
      title: {
        color: colors.NATURE_PACK_TARGET_WORD,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.natureTargetLabel,
        textShadowRadius: 0,
        top: layouts.NATURE_PACK_TITLE_TOP,
      } as TextStyle,
      word: {
        fontFamily: "Nature",
        fontSize: fonts.size.targetPack.nature,
        color: colors.NATURE_PACK_TARGET_WORD,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.natureTargetWord,
        textShadowRadius: 0,
        letterSpacing:layouts.NATURE_PACK_LETTER_SPACING,
        top: layouts.NATURE_PACK_WORD_TOP,
        marginBottom: layouts.NATURE_PACK_WORD_MARGIN_BOTTOM,
      } as TextStyle,
    },
  },

  // ======================= FOOD PACK =======================
  food: {
    // Score + Pops board
    gameBoard: {
      board: {
        backgroundColor: colors.FOOD_PACK_BOARD,
        borderColor: colors.BLACK,
        boxShadow: fonts.shadow.packGameBoard,
      } as ViewStyle,
      text: {
        color: colors.FOOD_PACK_BOARD_TEXT,
      } as TextStyle,
    },

    // 4x4 game grid
    gameGrid: {
      grid: {
        backgroundColor: colors.FOOD_PACK_GRID_BG,
      } as ViewStyle,
      cell: {
        backgroundColor: colors.FOOD_PACK_GRID_CELL,
      } as ViewStyle,
      text: {
        fontFamily: fonts.family.regular,
        color: colors.WORD_PACK_TITLE,
      } as TextStyle,
    },

    // Target word label and word
    targetWord: {
      title: {
        color: colors.FOOD_PACK_TARGET_WORD,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.foodTargetTitle,
        textShadowRadius: 0,
        top: layouts.FOOD_PACK_TITLE_TOP,
      } as TextStyle,
      word: {
        fontFamily: "Food",
        fontSize: fonts.size.targetPack.food,
        color: colors.FOOD_PACK_TARGET_WORD,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.foodWord,
        textShadowRadius: 0,
        letterSpacing: layouts.FOOD_PACK_LETTER_SPACING,
        top: layouts.FOOD_PACK_WORD_TOP,
        marginBottom: layouts.FOOD_PACK_WORD_MARGIN_BOTTOM,
      } as TextStyle,
    },
  },

  // ======================= ANIMALS PACK =======================
  animals: {
    // Score + Pops board
    gameBoard: {
      board: {
        backgroundColor: colors.ANIMALS_PACK_BOARD,
        borderColor: colors.BLACK,
        boxShadow: fonts.shadow.packGameBoard,
      } as ViewStyle,
      text: {
        color: colors.ANIMALS_PACK_BOARD_TEXT,
      } as TextStyle,
    },

    // 4x4 game grid
    gameGrid: {
      grid: {
        backgroundColor: colors.ANIMALS_PACK_GRID_BG,
      } as ViewStyle,
      cell: {
        backgroundColor: colors.ANIMALS_PACK_GRID_CELL,
      } as ViewStyle,
      text: {
        fontFamily: fonts.family.regular,
        color: colors.WORD_PACK_TITLE,
      } as TextStyle,
    },

    // Target word label and word
    targetWord: {
      title: {
        color: colors.WHITE,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.animalsLabel,
        textShadowRadius: 0,
        top: layouts.ANIMALS_PACK_TITLE_TOP,
      } as TextStyle,
      word: {
        fontFamily: "Animals",
        fontSize: fonts.size.targetPack.animals,
        color: colors.ANIMALS_PACK_TARGET_WORD,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.animalsWord,
        textShadowRadius: 0,
        letterSpacing: layouts.ANIMALS_PACK_LETTER_SPACING,
        top: layouts.ANIMALS_PACK_WORD_TOP,
        marginBottom: layouts.ANIMALS_PACK_WORD_MARGIN_BOTTOM,
      } as TextStyle,
    },
  },

  // ======================= STORY PACK =======================
  story: {
    // Score + Pops board
    gameBoard: {
      board: {
        backgroundColor: colors.STORY_PACK_BOARD,
        borderColor: colors.BLACK,
        boxShadow: fonts.shadow.packGameBoard,
      } as ViewStyle,
      text: {
        color: colors.STORY_PACK_BOARD_TEXT,
      } as TextStyle,
    },

    // 4x4 game grid
    gameGrid: {
      grid: {
        backgroundColor: colors.STORY_PACK_GRID_BG,
      } as ViewStyle,
      cell: {
        backgroundColor: colors.STORY_PACK_GRID_CELL,
      } as ViewStyle,
      text: {
        fontFamily: fonts.family.regular,
        color: colors.WORD_PACK_TITLE,
      } as TextStyle,
    },

    // Target word label and word
    targetWord: {
      title: {
        color: colors.STORY_PACK_TARGET_WORD,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.foodTargetTitle,
        textShadowRadius: 0,
        top: layouts.STORY_PACK_TITLE_TOP,
      } as TextStyle,
      word: {
        fontFamily: "Story",
        fontSize: fonts.size.targetPack.story,
        color: colors.STORY_PACK_TARGET_WORD,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.storyWord,
        textShadowRadius: 0,
        letterSpacing: layouts.STORY_PACK_LETTER_SPACING,
        top: layouts.STORY_PACK_WORD_TOP,
        marginBottom: layouts.STORY_PACK_WORD_MARGIN_BOTTOM,
      } as TextStyle,
    },
  },
};

export default packThemes;
