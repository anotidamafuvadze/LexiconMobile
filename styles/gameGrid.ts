import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import layouts from "@/constants/layouts";
import { TextStyle, ViewStyle } from "react-native";

const gameGrid = {
  // Outer grid container
  grid: {
    top: layouts.HOME_GRID_TOP,
    width: layouts.HOME_GRID_SIZE,
    height: layouts.HOME_GRID_SIZE,
    alignSelf: "center",
    backgroundColor: colors.HOME_GRID_BG,
    borderRadius: layouts.HOME_GRID_BORDER_RADIUS,
    position: "absolute",
    padding: 7,
  } as ViewStyle,

  // Individual empty tile cell
  cell: {
    width: layouts.HOME_GRID_SIZE / 4.8,
    height: layouts.HOME_GRID_SIZE / 4.8,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 6,
    marginRight: 6,
    backgroundColor: colors.HOME_GRID_CELL_BG,
    borderRadius: layouts.HOME_GRID_BORDER_RADIUS,
  } as ViewStyle,

  // Text inside tile
  text: {
    fontSize: 10,
    fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
    fontFamily: fonts.family.regular,
    color: "",
    textAlign: "center",
  } as TextStyle,
};

export default gameGrid;
