import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import layouts from "@/constants/layouts";
import { TextStyle, ViewStyle } from "react-native";

const tile = {
  // Tile container
  tile: {
    position: "absolute",
    width: layouts.TILE_SIZE,
    height: layouts.TILE_SIZE,
    marginTop: layouts.TILE_MARGIN_TOP,
    marginBottom: layouts.TILE_MARGIN_BOTTOM,
    marginLeft: layouts.TILE_MARGIN_LEFT,
    marginRight: layouts.TILE_MARGIN_RIGHT,
    backgroundColor: colors.HOME_GRID_TILE,
    borderWidth: layouts.TILE_BORDER_WIDTH,
    borderColor: colors.BLACK,
    borderRadius: layouts.GAME_GRID_BORDER_RADIUS,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,

  // Letter inside tile
  letter: {
    fontSize: fonts.size.tileLetter,
    fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
    fontFamily: fonts.family.regular,
    color: colors.HOME_GRID_LETTER,
    textShadowColor: colors.BLACK,
    textShadowOffset: fonts.shadow.offset.tileLetter,
  } as TextStyle,
};

export default tile;
