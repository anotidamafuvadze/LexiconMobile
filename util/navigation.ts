// Valid screen paths
export type ScreenPath =
  | "/screens/HomeScreen"
  | "/screens/InstructionScreen"
  | "/screens/MenuScreen"
  | "/screens/DifficultyScreen"
  | "/screens/WordPackScreen"

// Valid screen names
export type ScreenName =
  | "HomeScreen"
  | "InstructionScreen"
  | "MenuScreen"
  | "DifficultyScreen"
  | "WordPackScreen"

// Theme names
export type Theme =
  | "default"
  | "easy"
  | "normal"
  | "hard"
  | "nature"
  | "animals"
  | "food"
  | "story";

export function getScreenPath(screen: ScreenName): ScreenPath {
  return `/screens/${screen}` as ScreenPath;
}
