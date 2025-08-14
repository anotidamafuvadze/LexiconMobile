import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export default function ScreensLayout() {
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
      <View style={[StyleSheet.absoluteFill, { backgroundColor: "#FBF7EF" }]} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      >
        <Stack.Screen name="index" options={{ animation: "none" }} />
        <Stack.Screen name="MenuScreen" options={getMenuScreenOptions} />
        <Stack.Screen name="WordPackScreen" options={{ animation: "slide_from_right" }} />
        <Stack.Screen name="DifficultyScreen" options={{ animation: "fade" }} />
        <Stack.Screen name="InstructionScreen" options={{ animation: "slide_from_right" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
