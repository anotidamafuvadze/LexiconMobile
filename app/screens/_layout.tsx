import { GameProvider } from "@/context/GameContext";
import { SoundProvider } from "@/context/SoundContext";
import { WordProvider } from "@/context/WordContext";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    default: require("@/app/assets/fonts/montserrat.ttf"),
    nature: require("@/app/assets/fonts/nature.otf"),
    food: require("@/app/assets/fonts/food.otf"),
    animals: require("@/app/assets/fonts/animals.otf"),
    story: require("@/app/assets/fonts/story.ttf"),
  });

  if (!fontsLoaded) return null;

  function getMenuScreenOptions({
    route,
  }: {
    route: { params?: { from?: string } };
  }): NativeStackNavigationOptions {
    const skipAnimation = ["WordPackScreen", "DifficultyScreen", "InstructionsScreen"];
    const from = route?.params?.from ?? "";
    return {
      animation: skipAnimation.includes(from) ? "none" : "fade",
    };
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <WordProvider>
          <GameProvider>
            <SoundProvider>
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" options={{ animation: "none" }} />
                <Stack.Screen name="MenuScreen" options={getMenuScreenOptions} />
                <Stack.Screen
                  name="WordPackScreen"
                  options={{ animation: "slide_from_right" }}
                />
                <Stack.Screen name="DifficultyScreen" options={{ animation: "fade" }} />
                <Stack.Screen
                  name="InstructionScreen"
                  options={{ animation: "slide_from_right" }}
                />
              </Stack>
            </SoundProvider>
          </GameProvider>
        </WordProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}