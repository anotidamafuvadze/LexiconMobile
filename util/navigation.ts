// List of valid screen paths
export type ScreenPath =
  | "/screens/HomeScreen"
  | "/screens/InstructionScreen"
  | "/screens/MenuScreen"
  | "/screens/GameLabScreen"
  | "/screens/DifficultyScreen"
  | "/screens/WordPackScreen"
  | "/screens/PackHomeScreen";

// Valid screen names (without the full path prefix)
export type ScreenName =
  | "HomeScreen"
  | "InstructionScreen"
  | "MenuScreen"
  | "GameLabScreen"
  | "DifficultyScreen"
  | "WordPackScreen"
  | "PackHomeScreen";

// Utility to safely construct a screen path
export function getScreenPath(screen: ScreenName): ScreenPath {
  return `/screens/${screen}` as ScreenPath;
}
