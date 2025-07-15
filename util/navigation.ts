// Valid screen paths
export type ScreenPath =
  | "/screens/HomeScreen"
  | "/screens/InstructionScreen"
  | "/screens/MenuScreen"
  | "/screens/GameLabScreen"
  | "/screens/DifficultyScreen"
  | "/screens/WordPackScreen"
  | "/screens/PackHomeScreen";

// Valid screen names
export type ScreenName =
  | "HomeScreen"
  | "InstructionScreen"
  | "MenuScreen"
  | "GameLabScreen"
  | "DifficultyScreen"
  | "WordPackScreen"
  | "PackHomeScreen";

export function getScreenPath(screen: ScreenName): ScreenPath {
  return `/screens/${screen}` as ScreenPath;
}
