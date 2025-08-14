import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";
import "react-native-reanimated";

import { GameProvider } from "@/context/GameContext";
import { SoundProvider } from "@/context/SoundContext";
import { WordProvider } from "@/context/WordContext";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    default: require("@/assets/fonts/montserrat.ttf"),
    nature: require("@/assets/fonts/nature.otf"),
    food: require("@/assets/fonts/food.otf"),
    animals: require("@/assets/fonts/animals.otf"),
    story: require("@/assets/fonts/story.ttf"),
  });

  const { width, height } = Dimensions.get("window");
  const isTablet = Math.min(width, height) >= 768;

  useEffect(() => {
    if (!isTablet) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    }
  }, [isTablet]);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <WordProvider>
      <GameProvider>
        <SoundProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(screens)" options={{ animation: "none" }} />
          </Stack>
          <StatusBar style="auto" />
        </SoundProvider>
      </GameProvider>
    </WordProvider>
  );
}
