import colors from "@/constants/colors";
import useFonts from "@/constants/fonts";
import useLayouts from "@/constants/layouts";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

export default function usePackThemes() {
  const layouts = useLayouts();
  const fonts = useFonts();

  const buildPackTheme = (options: {
    boardBg: string;
    boardShadow?: string
    boardText: string;
    gridBg: string;
    gridCell: string;
    gridTile: string;
    gridTargetTile: string;
    targetLabelColor: string;
    targetWordColor: string;
    top?: number;
    marginTop?: number;
    fontFamily?: string;
    fontSize?: number;
    labelOffset?: { label: { width: number; height: number; }; word: { width: number; height: number; } };
    letterSpacing?: number;
    wordMarginBottom?: number;
  }) => {
    return {
      gameBoard: {
        board: {
          backgroundColor: options.boardBg,
          borderColor: colors.BLACK,
          shadowColor: options?.boardShadow || fonts.shadow.gameBoard.color,
          shadowOpacity: fonts.shadow.gameBoard.opacity,
          shadowRadius: fonts.shadow.gameBoard.radius,
          shadowOffset: fonts.shadow.offset.packGameBoard,
        } as ViewStyle,
        text: {
          color: options.boardText,
        } as TextStyle,
      },
      gameGrid: {
        tileColor: options.gridTile,
        targetTileColor: options.gridTargetTile,
        grid: {
          backgroundColor: options.gridBg,
        } as ViewStyle,
        cell: {
          backgroundColor: options.gridCell,
          borderWidth: 3,
          borderColor: colors.BLACK,
        } as ViewStyle,
        text: {
          fontFamily: fonts.family.primary,
          color: colors.WORD_PACK_BUTTON_TITLE,
        } as TextStyle,
      },
      targetWord: {
        title: {
          fontSize: fonts.size.targetTitle,
          fontWeight: fonts.weight.semiBold as TextStyle["fontWeight"],
          fontFamily: fonts.family.primary,
          color: options.targetLabelColor,
          textShadowColor: colors.BLACK,
          textShadowOffset: options.labelOffset?.label,
          textShadowRadius: 0,
          top: options.top,
          textAlign: "center"
        } as TextStyle,
        word: {
          fontSize: options.fontSize ?? fonts.size.targetWord.default,
          fontWeight: fonts.weight.semiBold as TextStyle["fontWeight"],
          fontFamily: options.fontFamily ?? fonts.family.primary,
          color: options.targetWordColor,
          letterSpacing: options.letterSpacing ?? layouts.LETTER_SPACING_SMALL,
          textShadowColor: colors.BLACK,
          textShadowOffset: options.labelOffset?.word,
          textShadowRadius: 0,
          top: options.top,
          marginTop: options.marginTop,
          marginBottom: options.wordMarginBottom,
          textAlign: "center"
        } as TextStyle,
      },
    };
  };

  const themes = useMemo(() => ({
    default: buildPackTheme({
      boardBg: colors.DEFAULT_BOARD_BG,
      boardShadow: colors.DEFAULT_BOARD_SHADOW,
      boardText: colors.DEFAULT_BOARD_TEXT,
      gridBg: colors.DEFAULT_GRID_BG,
      gridCell: colors.DEFAULT_GRID_CELL,
      gridTile: colors.DEFAULT_GRID_TILE,
      gridTargetTile: colors.DEFAULT_GRID_TARGET_TILE,
      targetLabelColor: colors.DEFAULT_TARGET_WORD,
      targetWordColor: colors.DEFAULT_TARGET_WORD,
      top: layouts.DEFAULT_TARGET_WORD_TOP,
      wordMarginBottom: layouts.DEFAULT_TARGET_WORD_MARGIN_BOTTOM,
    }),
    nature: buildPackTheme({
      boardBg: colors.NATURE_PACK_BOARD_BG,
      boardText: colors.NATURE_PACK_BOARD_TEXT,
      gridBg: colors.NATURE_PACK_GRID_BG,
      gridCell: colors.NATURE_PACK_GRID_CELL,
      gridTile: colors.NATURE_PACK_GRID_TILE,
      gridTargetTile: colors.NATURE_PACK_GRID_TARGET_TILE,
      targetLabelColor: colors.NATURE_PACK_TARGET_WORD,
      targetWordColor: colors.NATURE_PACK_TARGET_WORD,
      fontFamily: "nature",
      top: layouts.NATURE_PACK_TARGET_WORD_TOP,
      marginTop: layouts.NATURE_PACK_TARGET_WORD_MARGIN_TOP,
      fontSize: fonts.size.targetWord.nature,
      labelOffset: {
        label: fonts.shadow.offset.natureLabel,
        word: fonts.shadow.offset.natureWord,
      },
      letterSpacing: layouts.NATURE_PACK_LETTER_SPACING,
      wordMarginBottom: layouts.NATURE_PACK_TARGET_WORD_MARGIN_BOTTOM,
    }),
    food: buildPackTheme({
      boardBg: colors.FOOD_PACK_BOARD_BG,
      boardText: colors.FOOD_PACK_BOARD_TEXT,
      gridBg: colors.FOOD_PACK_GRID_BG,
      gridCell: colors.FOOD_PACK_GRID_CELL,
      gridTile: colors.FOOD_PACK_GRID_TILE,
      gridTargetTile: colors.FOOD_PACK_GRID_TARGET_TILE,
      targetLabelColor: colors.FOOD_PACK_TARGET_WORD,
      targetWordColor: colors.FOOD_PACK_TARGET_WORD,
      fontFamily: "food",
      fontSize: fonts.size.targetWord.food,
      top: layouts.FOOD_PACK_TARGER_WORD_TOP,
      marginTop: layouts.FOOD_PACK_TARGER_WORD_MARGIN_TOP,
      labelOffset: {
        label: fonts.shadow.offset.foodLabel,
        word: fonts.shadow.offset.foodWord,
      },
      letterSpacing: layouts.FOOD_PACK_LETTER_SPACING,
      wordMarginBottom: layouts.FOOD_PACK_TARGET_WORD_MARGIN_BOTTOM,
    }),
    animals: buildPackTheme({
      boardBg: colors.ANIMALS_PACK_BOARD_BG,
      boardText: colors.ANIMALS_PACK_BOARD_TEXT,
      gridBg: colors.ANIMALS_PACK_GRID_BG,
      gridCell: colors.ANIMALS_PACK_GRID_CELL,
      gridTile: colors.ANIMALS_PACK_GRID_TILE,
      gridTargetTile: colors.ANIMALS_PACK_GRID_TARGET_TILE,
      targetLabelColor: colors.WHITE,
      targetWordColor: colors.ANIMALS_PACK_TARGET_WORD,
      fontFamily: "animals",
      fontSize: fonts.size.targetWord.animals,
      top: layouts.ANIMALS_PACK_TARGET_WORD_TOP,
      marginTop: layouts.ANIMALS_PACK_TARGET_WORD_MARGIN_TOP,
      labelOffset: {
        label: fonts.shadow.offset.animalsLabel,
        word: fonts.shadow.offset.animalsWord,
      },
      letterSpacing: layouts.ANIMALS_PACK_LETTER_SPACING,
      wordMarginBottom: layouts.ANIMALS_PACK_TARGET_WORD_MARGIN_BOTTOM,
    }),
    story: buildPackTheme({
      boardBg: colors.STORY_PACK_BOARD_BG,
      boardText: colors.STORY_PACK_BOARD_TEXT,
      gridBg: colors.STORY_PACK_GRID_BG,
      gridCell: colors.STORY_PACK_GRID_CELL,
      gridTile: colors.STORY_PACK_GRID_TILE,
      gridTargetTile: colors.STORY_PACK_GRID_TARGET_TILE,
      targetLabelColor: colors.STORY_PACK_TARGET_WORD,
      targetWordColor: colors.STORY_PACK_TARGET_WORD,
      fontFamily: "story",
      fontSize: fonts.size.targetWord.story,
      top: layouts.STORY_PACK_TARGET_WORD_TOP,
      marginTop: layouts.STORY_PACK_TARGET_WORD_MARGIN_TOP,
       labelOffset: {
        label: fonts.shadow.offset.storyLabel,
        word: fonts.shadow.offset.storyWord,
      },
      letterSpacing: layouts.STORY_PACK_LETTER_SPACING,
      wordMarginBottom: layouts.STORY_PACK_TARGET_WORD_MARGIN_BOTTOM,
    }),
  }), [layouts]);

  return themes;
}
