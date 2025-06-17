import type { EntryExitAnimationFunction } from "react-native-reanimated";

export function asEntry(animation: unknown): EntryExitAnimationFunction {
  return animation as EntryExitAnimationFunction;
}
