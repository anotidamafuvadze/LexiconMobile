import { router } from "expo-router";

// Valid screen paths
export type ScreenPath =
  | "/screens/HomeScreen"
  | "/screens/InstructionScreen"
  | "/screens/FirstInstructionScreen"
  | "/screens/MenuScreen"
  | "/screens/DifficultyScreen"
  | "/screens/WordPackScreen"
  | "/screens/PackHomeScreen";

// Valid screen names
export type ScreenName =
  | "HomeScreen"
  | "FirstInstructionScreen"
  | "InstructionScreen"
  | "MenuScreen"
  | "DifficultyScreen"
  | "WordPackScreen"
  | "PackHomeScreen";

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

// Map themes to navigation actions
export const themeToScreenPath: Record<Theme, (theme: string) => void> = {
  default: () => {
    router.push({ pathname: "/screens/HomeScreen" });
  },
  easy: () => {
    router.push({ pathname: "/screens/HomeScreen" });
  },
  normal: () => {
    router.push({ pathname: "/screens/HomeScreen" });
  },
  hard: () => {
    router.push({ pathname: "/screens/HomeScreen" });
  },
  nature: (theme) => {
    router.push({
      pathname: "/screens/PackHomeScreen",
      params: { packName: theme },
    });
  },
  animals: (theme) => {
    router.push({
      pathname: "/screens/PackHomeScreen",
      params: { packName: theme },
    });
  },
  food: (theme) => {
    router.push({
      pathname: "/screens/PackHomeScreen",
      params: { packName: theme },
    });
  },
  story: (theme) => {
    router.push({
      pathname: "/screens/PackHomeScreen",
      params: { packName: theme },
    });
  },
};

// Utility to get the static path for a given screen name
export function getScreenPath(screen: ScreenName): ScreenPath {
  return `/screens/${screen}` as ScreenPath;
}
