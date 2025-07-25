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
    // Game grid
    gameGrid: {
      tileColor: colors.NATURE_PACK_GRID_TILE,
      targetTileColor: colors.NATURE_PACK_GRID_TARGET_TILE,
      grid: {
        backgroundColor: colors.NATURE_PACK_GRID_BG,
      } as ViewStyle,
      cell: {
        backgroundColor: colors.NATURE_PACK_GRID_CELL,
        borderWidth: 3,
        borderColor: colors.BLACK,
      } as ViewStyle,
    },

    // Target word
    targetWord: {
      title: {
        color: colors.NATURE_PACK_TARGET_WORD,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.natureLabel,
        textShadowRadius: 0,
        top: layouts.NATURE_PACK_TITLE_TOP,
      } as TextStyle,
      word: {
        fontFamily: "Nature",
        fontSize: fonts.size.targetWordSize.nature,
        color: colors.NATURE_PACK_TARGET_WORD,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.natureWord,
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

    // Game grid
    gameGrid: {
      tileColor: colors.FOOD_PACK_GRID_TILE,
      targetTileColor: colors.FOOD_PACK_GRID_TARGET_TILE,
      grid: {
        backgroundColor: colors.FOOD_PACK_GRID_BG,
      } as ViewStyle,
      cell: {
        backgroundColor: colors.FOOD_PACK_GRID_CELL,
        borderWidth: 3,
        borderColor: colors.BLACK,
      } as ViewStyle,
      text: {
        fontFamily: fonts.family.regular,
        color: colors.WORD_PACK_TITLE,
      } as TextStyle,
    },

    // Target word
    targetWord: {
      title: {
        color: colors.FOOD_PACK_TARGET_WORD,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.foodLabel,
        textShadowRadius: 0,
        top: layouts.FOOD_PACK_TITLE_TOP,
      } as TextStyle,
      word: {
        fontFamily: "Food",
        fontSize: fonts.size.targetWordSize.food,
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

    // Game grid
    gameGrid: {
      tileColor: colors.ANIMALS_PACK_GRID_TILE,
      targetTileColor: colors.ANIMALS_PACK_GRID_TARGET_TILE,
      grid: {
        backgroundColor: colors.ANIMALS_PACK_GRID_BG,
      } as ViewStyle,
      cell: {
        backgroundColor: colors.ANIMALS_PACK_GRID_CELL,
        borderWidth: 3,
        borderColor: colors.BLACK,
      } as ViewStyle,
      text: {
        fontFamily: fonts.family.regular,
        color: colors.WORD_PACK_TITLE,
      } as TextStyle,
    },

    // Target word
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
        fontSize: fonts.size.targetWordSize.animals,
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

    // Game grid
    gameGrid: {
      tileColor: colors.STORY_PACK_GRID_TILE,
      targetTileColor: colors.STORY_PACK_GRID_TARGET_TILE,
      grid: {
        backgroundColor: colors.STORY_PACK_GRID_BG,
      } as ViewStyle,
      cell: {
        backgroundColor: colors.STORY_PACK_GRID_CELL,
        borderWidth: 3,
        borderColor: colors.BLACK,
      } as ViewStyle,
      text: {
        fontFamily: fonts.family.regular,
        color: colors.WORD_PACK_TITLE,
      } as TextStyle,
    },

    // Target word
    targetWord: {
      title: {
        color: colors.STORY_PACK_TARGET_WORD,
        textShadowColor: colors.BLACK,
        textShadowOffset: fonts.shadow.offset.storyLabel,
        textShadowRadius: 0,
        top: layouts.STORY_PACK_TITLE_TOP,
      } as TextStyle,
      word: {
        fontFamily: "Story",
        fontSize: fonts.size.targetWordSize.story,
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
