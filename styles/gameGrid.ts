import colors from "@/constants/colors";
import layouts from "@/constants/layouts";
import { ViewStyle } from "react-native";

//TODO: Convert numbers to constants in layouts

const gameGrid = {
  // Outer grid container
  grid: {
    top: layouts.GAME_GRID_TOP,
    width: layouts.GAME_GRID_SIZE,
    height: layouts.GAME_GRID_SIZE,
    alignSelf: "center",
    backgroundColor: colors.HOME_GRID_BG,
    borderRadius: layouts.GAME_GRID_BORDER_RADIUS,
    position: "absolute",
    padding: 7,
  } as ViewStyle,

  // Individual empty tile cell
  cell: {
    width: layouts.GAME_GRID_SIZE / 4.6,
    height: layouts.GAME_GRID_SIZE / 4.6,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: colors.HOME_GRID_CELL,
    borderWidth: 3,
    borderColor: colors.BLACK,
    borderRadius: layouts.GAME_GRID_BORDER_RADIUS,
  } as ViewStyle,

};

export default gameGrid;
