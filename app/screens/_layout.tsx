import { GameProvider } from "@/context/GameContext";
import { SoundProvider } from "@/context/SoundContext";
import { WordProvider } from "@/context/WordContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

/**
 * Root layout component
 * - Sets up global context providers
 * - Loads custom fonts
 * - Defines screen navigation and transition animations
 */
export default function RootLayout() {
  console.log("Layout loaded");

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    Montserrat: require("@/app/assets/fonts/montserrat.ttf"),
    Nature: require("@/app/assets/fonts/nature-pack.otf"),
    Food: require("@/app/assets/fonts/food-pack.otf"),
    Animals: require("@/app/assets/fonts/animals-pack.ttf"),
    Story: require("@/app/assets/fonts/story-pack.ttf"),
  });
  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <WordProvider>
          <GameProvider>
            <SoundProvider>
              <Stack
                screenOptions={{ headerShown: false }}
              >
                {/* Home screen — no animation */}

                <Stack.Screen name="HomeScreen" options={{ animation: "none" }} />
                {/* Menu screen
                  - Fades in by default
                  - No animation when returning from other menu-level screens
              */}
                <Stack.Screen
                  name="MenuScreen"
                  options={({ route }) => {
                    const params = route.params as { from?: string };
                    const from = params?.from;
                    const skipAnimation = [
                      "WordPackScreen",
                      "DifficultyScreen",
                      "InstructionsScreen",
                    ];
                    return {
                      animation: skipAnimation.includes(from ?? "") ? "none" : "fade",
                    };
                  }}
                />
                {/* Word Pack selection — slides in */}
                <Stack.Screen
                  name="WordPackScreen"
                  options={{ animation: "slide_from_right" }}
                />
                {/* Word Pack main screen — no animation */}
                <Stack.Screen name="PackHomeScreen" options={{ animation: "none" }} />
                {/* Difficulty selection — fade animation */}
                <Stack.Screen name="DifficultyScreen" options={{ animation: "fade" }} />
                <Stack.Screen name="InstructionScreen" options={{ animation: "none" }} />
                <Stack.Screen
                  name="FirstInstructionScreen"
                  options={{ animation: "none" }}
                />
              </Stack>
            </SoundProvider>
          </GameProvider>
        </WordProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
