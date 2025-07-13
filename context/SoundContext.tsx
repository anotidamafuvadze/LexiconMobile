// Core audio functionality from Expo
import { useAudioPlayer } from "expo-audio";

// Core React hooks
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

// Sound assets
const backgroundMusic = require("../app/assets/sounds/background-music.mp3");
const buttonClick = require("../app/assets/sounds/button-click-sound.mp3");
const buttonPop = require("../app/assets/sounds/button-pop-sound.mp3");
const screenWhoosh = require("../app/assets/sounds/screen-whoosh-sound.mp3");
const winSound = require("../app/assets/sounds/win-sound.mp3");


// Type definition for the Sound Context API
type SoundContextType = {
  soundOn: boolean;
  setSoundOn: (val: boolean) => void;
  playClickSound: (forcePlay?: boolean) => void;
  playPopSound: (forcePlay?: boolean) => void;
  playWhooshSound: (forcePlay?: boolean) => void;
  playWinSound: (forcePlay?: boolean) => void;
  playBackgroundMusic: (play?: boolean) => void;
  stopBackgroundMusic: () => void;
};

// Default context instance 
const SoundContext = createContext<SoundContextType>({
  soundOn: true,
  setSoundOn: () => {},
  playClickSound: () => {},
  playPopSound: () => {},
  playWhooshSound: () => {},
  playWinSound: () => {},
  playBackgroundMusic: () => {},
  stopBackgroundMusic: () => {},
});

/**
 * SoundProvider Component
 * Manages global sound state and audio playback
 */
export const SoundProvider = ({ children }: { children: React.ReactNode }) => {

  // State management for sound toggle
  const [soundOn, setSoundOn] = useState(true);
  
  // Audio player instances for different sound effects
  const backgroundMusicPlayer = useAudioPlayer(backgroundMusic);
  const buttonClickPlayer = useAudioPlayer(buttonClick);
  const buttonPopPlayer = useAudioPlayer(buttonPop);
  const winSoundPlayer = useAudioPlayer(winSound);
  const screenWhooshPlayer = useAudioPlayer(screenWhoosh);
  
  // Flag to prevent duplicate initialization
  const hasStarted = useRef(false);

  // Initialize background music on first mount
  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    // Sets music to loop continuously
    try {
      backgroundMusicPlayer.loop = true;
      if (soundOn) {
        backgroundMusicPlayer.play();
      }
    } catch (error) {
      console.error("Background music initialization failed:", error);
    }
  }, []);

  // Plays button click sound effect
  const playClickSound = useCallback(
    (forcePlay = false) => {
      if (!soundOn && !forcePlay) return;
      try {
        buttonClickPlayer.seekTo(0); // Rewind to start
        buttonClickPlayer.play();
      } catch (error) {
        console.error("Click sound error:", error);
      }
    },
    [soundOn, buttonClickPlayer]
  );

  // Plays button pop sound effect
  const playPopSound = useCallback(
    (forcePlay = false) => {
      if (!soundOn && !forcePlay) return;
      try {
        buttonPopPlayer.seekTo(0.5); // Rewind to start
        buttonPopPlayer.play();
      } catch (error) {
        console.error("Pop sound error:", error);
      }
    },
    [soundOn, buttonPopPlayer]
  );

  // Plays screen transition whoosh effect
  const playWhooshSound = useCallback(
    (forcePlay = false) => {
      if (!soundOn && !forcePlay) return;
      try {
        screenWhooshPlayer.seekTo(0); // Rewind to start
        screenWhooshPlayer.play();
      } catch (error) {
        console.error("Whoosh sound error:", error);
      }
    },
    [soundOn, screenWhooshPlayer]
  );

  const playWinSound = useCallback(
    (forcePlay = false) => {
      if (!soundOn && !forcePlay) return;
      try {
        stopBackgroundMusic();
        winSoundPlayer.seekTo(0); // Rewind to start
        winSoundPlayer.play();
        setTimeout(() => {
          playBackgroundMusic()
        }, 8000)
      } catch (error) {
        console.error("Win sound error:", error);
      }
    },
    [soundOn, winSoundPlayer]

  )

  // Start or resume background music playback
  const playBackgroundMusic = useCallback(() => {
    try {
      backgroundMusicPlayer.play();
    } catch (error) {
      console.error("Music play failed:", error);
    }
  }, [backgroundMusicPlayer]);

  // Pause background music playback
  const stopBackgroundMusic = useCallback(() => {
    try {
      backgroundMusicPlayer.pause();
    } catch (error) {
      console.error("Music pause failed:", error);
    }
  }, [backgroundMusicPlayer]);

  // Context value containing all sound methods and state
  const contextValue = {
    soundOn,
    setSoundOn,
    playClickSound,
    playPopSound,
    playWhooshSound,
    playWinSound,
    playBackgroundMusic,
    stopBackgroundMusic,
  };

  return (
    <SoundContext.Provider value={contextValue}>
      {children}
    </SoundContext.Provider>
  );
};

// Custom hook
export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
};