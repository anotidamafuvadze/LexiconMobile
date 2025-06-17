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
      router.replace("/screens/HomeScreen");
    });
  }, []);

  // Centered loading spinner
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}

// =======================
// IMMEDIATE CHECLIST
// =======================

// TODO: Have there be a special ping sound that plays when you change the difficulty (i.e click easy)
// TODO: Buy udemy course
// TODO: organize images into folders

// =======================
// NEXT STEPS
// =======================

// TODO: LEARNING — Watch key videos to ensure solid understanding
// Watch video on useContext: https://www.youtube.com/watch?v=05ZM4ymK9Nc
// Watch video on AsyncStorage: https://www.youtube.com/watch?v=UQrkf0kKLTM
// Watch video on Reanimated: https://www.youtube.com/watch?v=8hW5Dnuu99Q
// TODO: Go through every part of your code and make sure you understand it all
// TODO: DOCS — Organize all notes/comments from HomeScreen into a clean game design document
// TODO: COURSE — Begin and complete the 2048 Udemy course
// Open source 2048 code: https://github.com/mateuszsokola/2048-in-react
// Udemy course: https://www.udemy.com/course/2048-in-react-and-nextjs/

// =======================
// ✅ FUTURE CHECKLIST
// =======================

// -------- CORE GAME FEATURES --------

// TODO: UI — Implement tile locking via double tap
// TODO: UI — Add swiping sound and a separate sound for merging tiles
// TODO: VISUALS — Design the board grid as a Canva image (theme-compatible)
// TODO: VISUALS — Set tile colors based on letter position (e.g., A–H = yellow)
// TODO: VISUALS — Add popping animation to tiles on long press
// TODO: VISUALS — Lock app orientation to portrait (disable landscape)
// TODO: GAME MODE — Add special tiles: Edit, Jump, Eraser
// TODO: ANIMATION — Add fun confetti animation when a user wins
// TODO: LOGIC — On app launch (index), reset score and pop count in a useEffect

// -------- JOURNEY MODE --------

// TODO: GAME MODE — Implement Journey Mode (timed levels + difficulty increases)
// TODO: GAME MODE — Animate scroll from journey end to beginning when starting
// TODO: GAME MODE — Make Journey Mode the default Home Screen until toggled off

// -------- HOW TO PLAY --------

// TODO: UI — Connect How-To-Play button to Instructions screen
// TODO: UI — Build Instructions screen with forward/back navigation and page dots
// TODO: UI — Auto-show How-To-Play screen on first app launch using AsyncStorage
// TODO: UI — Build How-To-Play Instruction screen at the very end of the project

// -------- APP STORE INTEGRATION --------

// TODO: INTEGRATION — Link "Rate Us" button to App Store
// TODO: INTEGRATION — Save first-time user state with AsyncStorage

// -------- FINAL TOUCHES --------

// TODO: FUTURE — Add AdScreen (for ads) and ShopScreen (for buying word packs and tiles)
// TODO: UTILS — Create AdManager and ShopManager to handle logic (watch videos/open source code)
// TODO: FUTURE — Change/Update app logo and splash screen
// TODO: GITHUB — Publish final project to GitHub

