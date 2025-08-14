export type ScreenPath =
  | "/(screens)"                  
  | "/(screens)/InstructionScreen"             
  | "/(screens)/MenuScreen"
  | "/(screens)/DifficultyScreen"
  | "/(screens)/WordPackScreen";

export type ScreenName =
  | "HomeScreen"
  | "InstructionScreen"
  | "MenuScreen"
  | "DifficultyScreen"
  | "WordPackScreen";

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
  switch (screen) {
    case "HomeScreen":
      return "/(screens)";
    case "InstructionScreen":
      return "/(screens)/InstructionScreen";
    case "MenuScreen":
      return "/(screens)/MenuScreen";
    case "DifficultyScreen":
      return "/(screens)/DifficultyScreen";
    case "WordPackScreen":
      return "/(screens)/WordPackScreen";
  }
}
