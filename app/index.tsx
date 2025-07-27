import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";

/**
 * Index
 * - Entry point of the app
 * - Checks if user has played before and navigates accordingly
 */

export default function Index() {
  const router = useRouter();
  const { width, height } = Dimensions.get("window");
  const isTablet = Math.min(width, height) >= 768;

  useEffect(() => {
    const lockOrientation = async () => {
      if (!isTablet) {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
      }
    };

    lockOrientation();
  }, []);

  useEffect(() => {
    const checkIfPlayed = async () => {
      const stored = await AsyncStorage.getItem("gameState");
      if (stored) {
        router.push("/screens/HomeScreen");
      } else {
        router.push("/screens/InstructionScreen");
      }
    };

    checkIfPlayed();
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
