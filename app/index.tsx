import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { ActivityIndicator, View } from "react-native";

// In index.tsx
export default function Index() {
  const router = useRouter();
  const navigationLock = useRef(false); // Add a navigation lock

  useEffect(() => {
    const checkFirstLaunch = async () => {
      if (navigationLock.current) return;
      navigationLock.current = true;

      try {
        const hasSeen = await AsyncStorage.getItem("hasSeenInstructions");
        
        if (hasSeen !== "true") {
          console.log("First launch - showing instructions");
          await AsyncStorage.setItem("hasSeenInstructions", "true");
          router.replace("/screens/FirstInstructionScreen");
        } else {
          console.log("Returning user - going to home");
          router.replace("/screens/HomeScreen");
        }
      } catch (error) {
        console.error("Error checking first launch:", error);
        router.replace("/screens/HomeScreen");
      } finally {
        navigationLock.current = false;
      }
    };

    checkFirstLaunch();
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}