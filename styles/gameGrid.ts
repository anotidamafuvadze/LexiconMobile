import colors from "@/constants/colors";
import layouts from "@/constants/layouts";
import { ViewStyle } from "react-native";

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
    padding: layouts.GAME_GRID_PADDING,
  } as ViewStyle,

  // Individual empty tile cell
  cell: {
    width: layouts.GAME_GRID_SIZE / layouts.GAME_GRID_CELL_DIVISOR,
    height: layouts.GAME_GRID_SIZE / layouts.GAME_GRID_CELL_DIVISOR,
    marginTop: layouts.GAME_GRID_CELL_MARGIN,
    marginBottom: layouts.GAME_GRID_CELL_MARGIN,
    marginLeft: layouts.GAME_GRID_CELL_MARGIN,
    marginRight: layouts.GAME_GRID_CELL_MARGIN,
    backgroundColor: colors.HOME_GRID_CELL,
    borderWidth: layouts.GAME_GRID_CELL_BORDER_WIDTH,
    borderColor: colors.BLACK,
    borderRadius: layouts.GAME_GRID_BORDER_RADIUS,
  } as ViewStyle,
};

export default gameGrid;
