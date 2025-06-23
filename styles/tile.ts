import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import layouts from "@/constants/layouts";
import { TextStyle, ViewStyle } from "react-native";

//TODO: Convert numbers to constants in layout
const tile = {
  tile: {
    position: "absolute",
    width: layouts.HOME_GRID_SIZE / 4.6, // put in layout
    height: layouts.HOME_GRID_SIZE / 4.6,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: colors.HOME_GRID_TILE,
    borderWidth: 3,
    borderColor: colors.BLACK,
    borderRadius: layouts.HOME_GRID_BORDER_RADIUS,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,

  letter: {
    fontSize: fonts.size.tileLetter,
    fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
    fontFamily: fonts.family.regular,
    color: colors.HOME_GRID_LETTER,
    textShadowColor: colors.BLACK,
    textShadowOffset: fonts.shadow.offset.tileLetter,

  } as TextStyle,

}

export default tile;