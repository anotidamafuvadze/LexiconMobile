// React and React Native
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

// Navigation
import { useRouter } from "expo-router";

/**
 * App entry point
 * - Displays a loading spinner while redirecting to HomeScreen
 */
export default function Index() {
  const router = useRouter();

  // Redirect to HomeScreen on mount
  useEffect(() => {
    requestAnimationFrame(() => {
      router.push("/screens/HomeScreen");
    });
  }, [router]);

  // Centered loading spinner
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
