import { TextStyle, ViewStyle } from "react-native";

import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import layouts from "@/constants/layouts";

const splash = {
  // ======================= Win Overlay =======================
  win: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    top: layouts.GAME_GRID_TOP,
    zIndex: 3,
    width: layouts.GAME_GRID_SIZE,
    height: layouts.GAME_GRID_SIZE,
    borderRadius: layouts.GAME_GRID_BORDER_RADIUS,
    backgroundColor: "rgba(197, 188, 147, 0.05)", // light overlay
  } as ViewStyle,

  // ======================= Lose Overlay =======================
  lost: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    top: layouts.GAME_GRID_TOP,
    zIndex: 3,
    width: layouts.GAME_GRID_SIZE,
    height: layouts.GAME_GRID_SIZE,
    borderRadius: layouts.GAME_GRID_BORDER_RADIUS,
    backgroundColor: "rgba(0, 0, 0, 0.2)", // dark overlay
  } as ViewStyle,

  // ======================= Overlay Text =======================
  text: {
    textAlign: "center",
    color: "rgba(240, 240, 240, 1)",
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.splash,
    textShadowColor: colors.BLACK,
    textShadowOffset: fonts.shadow.offset.splash,
  } as TextStyle,
};

export default splash;
