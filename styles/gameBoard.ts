import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import layouts from "@/constants/layouts";
import { TextStyle, ViewStyle } from "react-native";

const gameBoard = {
  // Board container
  board: {
    backgroundColor: colors.GAME_BOARD_BG,
    borderColor: colors.GAME_BOARD_BORDER,
    borderRadius: layouts.GAME_BOARD_BORDER_RADIUS,
    borderWidth: layouts.GAME_BOARD_BORDER_WIDTH,
    height: layouts.GAME_BOARD_HEIGHT,
    justifyContent: "flex-start",
    alignItems: "center",
    boxShadow: fonts.shadow.gameBoard,
  } as ViewStyle,

  // Score label text
  title: {
    fontSize: fonts.size.scoreLabel,
    fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
    fontFamily: fonts.family.regular,
    color: colors.GAME_BOARD_TITLE,
    textAlign: "center",
  
  } as TextStyle,

  // Score number text
  count: {
    fontSize: fonts.size.scoreValue,
    fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
    fontFamily: fonts.family.count,
    color: colors.GAME_BOARD_TITLE,
    textAlign: "center",
    textAlignVertical: "bottom",
    paddingHorizontal: layouts.GAME_BOARD_PADDING_HORIZONTAL,
  } as TextStyle,

  // Wrapper for layout positioning
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,

  // Wrapper for aligning the count inside the board
  countWrapper: {
    height: layouts.GAME_BOARD_COUNT_HEIGHT,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  } as ViewStyle,
};

export default gameBoard;
