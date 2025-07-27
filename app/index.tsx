import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Dimensions } from "react-native";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ScreenOrientation from "expo-screen-orientation";

export default function Index() {
  const [initialRoute, setInitialRoute] = useState<"/screens/HomeScreen" | "/screens/InstructionScreen" | null>(null);

  const { width, height } = Dimensions.get("window");
  const isTablet = Math.min(width, height) >= 768;

  // Lock orientation on phones
  useEffect(() => {
    const lockOrientation = async () => {
      if (!isTablet) {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
      }
    };
    lockOrientation();
  }, [isTablet]);

  // Determine initial route based on whether the user has played before
  useEffect(() => {
    const checkIfPlayed = async () => {
      try {
        const stored = await AsyncStorage.getItem("gameState");
        setInitialRoute(stored ? "/screens/HomeScreen" : "/screens/InstructionScreen");
      } catch (error) {
        console.error("Failed to load game state:", error);
        setInitialRoute("/screens/InstructionScreen");
      }
    };

    checkIfPlayed();
  }, []);

  // Show loading indicator while deciding where to go
  if (!initialRoute) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Redirect to the appropriate screen
  return <Redirect href={initialRoute} />;
}
