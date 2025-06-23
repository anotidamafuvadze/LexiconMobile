import colors from "@/constants/colors";
import layouts from "@/constants/layouts";
import { ViewStyle } from "react-native";

//TODO: Convert numbers to constants in layouts

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
    width: layouts.HOME_GRID_SIZE / 4.6,
    height: layouts.HOME_GRID_SIZE / 4.6,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: colors.HOME_GRID_CELL,
    borderWidth: 3,
    borderColor: colors.BLACK,
    borderRadius: layouts.HOME_GRID_BORDER_RADIUS,
  } as ViewStyle,

};

export default gameGrid;
