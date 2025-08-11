import { StatusBar, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { GameProvider } from "@/context/GameContext";
import { SoundProvider } from "@/context/SoundContext";
import { WordProvider } from "@/context/WordContext";

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
    return { animation: skipAnimation.includes(from) ? "none" : "fade" };
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar hidden />
      <View style={[StyleSheet.absoluteFill, { backgroundColor: "#FBF7EF" }]} />
      <WordProvider>
        <GameProvider>
          <SoundProvider>
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: "transparent" },
                statusBarHidden: true,
              }}
            >
              <Stack.Screen name="HomeScreen" options={{ animation: "none" }} />
              <Stack.Screen name="MenuScreen" options={getMenuScreenOptions} />
              <Stack.Screen name="WordPackScreen" options={{ animation: "slide_from_right" }} />
              <Stack.Screen name="DifficultyScreen" options={{ animation: "fade" }} />
              <Stack.Screen name="InstructionScreen" options={{ animation: "slide_from_right" }} />
            </Stack>
          </SoundProvider>
        </GameProvider>
      </WordProvider>
    </GestureHandlerRootView>
  );
}
