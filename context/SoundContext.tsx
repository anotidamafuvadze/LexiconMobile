import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAudioPlayer } from "expo-audio";

/**
 * SoundProvider
 * - Manages global sound state and audio playback
 * - Plays background music and sound effects
 * - Allows toggling, stopping, and resuming music
 */

// ===== Sound files =====
const backgroundMusic = require("../app/assets/sounds/background-music.mp3");
const buttonClick = require("../app/assets/sounds/button-click-sound.mp3");
const buttonPop = require("../app/assets/sounds/button-pop-sound.mp3");
const screenWhoosh = require("../app/assets/sounds/screen-whoosh-sound.mp3");
const winSound = require("../app/assets/sounds/win-sound.mp3");

type SoundContextType = {
  soundOn: boolean;
  setSoundOn: (val: boolean) => void;
  playClickSound: (forcePlay?: boolean) => void;
  playPopSound: (forcePlay?: boolean) => void;
  playWhooshSound: (forcePlay?: boolean) => void;
  playWinSound: (forcePlay?: boolean) => void;
  playBackgroundMusic: () => void;
  stopBackgroundMusic: () => void;
};

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

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [soundOn, setSoundOn] = useState(true);
  const hasStarted = useRef(false);

  // ===== Audio players =====
  const backgroundMusicPlayer = useAudioPlayer(backgroundMusic);
  const buttonClickPlayer = useAudioPlayer(buttonClick);
  const buttonPopPlayer = useAudioPlayer(buttonPop);
  const winSoundPlayer = useAudioPlayer(winSound);
  const screenWhooshPlayer = useAudioPlayer(screenWhoosh);

  // ===== Start background music on mount =====
  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    try {
      backgroundMusicPlayer.loop = true;
      if (soundOn) {
        backgroundMusicPlayer.play();
      }
    } catch (error) {
      console.error("Background music initialization failed:", error);
    }
  }, []);

  // ===== Play click sound =====
  const playClickSound = useCallback(
    (forcePlay = false) => {
      if (!soundOn && !forcePlay) return;
      try {
        buttonClickPlayer.seekTo(0);
        buttonClickPlayer.play();
      } catch (error) {
        console.error("Click sound error:", error);
      }
    },
    [soundOn, buttonClickPlayer]
  );

  // ===== Play pop sound =====
  const playPopSound = useCallback(
    (forcePlay = false) => {
      if (!soundOn && !forcePlay) return;
      try {
        buttonPopPlayer.seekTo(0.5);
        buttonPopPlayer.play();
      } catch (error) {
        console.error("Pop sound error:", error);
      }
    },
    [soundOn, buttonPopPlayer]
  );

  // ===== Play whoosh sound =====
  const playWhooshSound = useCallback(
    (forcePlay = false) => {
      if (!soundOn && !forcePlay) return;
      try {
        screenWhooshPlayer.seekTo(0);
        screenWhooshPlayer.play();
      } catch (error) {
        console.error("Whoosh sound error:", error);
      }
    },
    [soundOn, screenWhooshPlayer]
  );

  // ===== Play win sound & pause/resume music =====
  const playWinSound = useCallback(
    (forcePlay = false) => {
      if (!soundOn && !forcePlay) return;
      try {
        stopBackgroundMusic();
        winSoundPlayer.seekTo(0);
        winSoundPlayer.play();
        setTimeout(() => {
          playBackgroundMusic();
        }, 8000);
      } catch (error) {
        console.error("Win sound error:", error);
      }
    },
    [soundOn, winSoundPlayer]
  );

  // ===== Play/resume background music =====
  const playBackgroundMusic = useCallback(() => {
    try {
      backgroundMusicPlayer.play();
    } catch (error) {
      console.error("Music play failed:", error);
    }
  }, [backgroundMusicPlayer]);

  // ===== Pause background music =====
  const stopBackgroundMusic = useCallback(() => {
    try {
      backgroundMusicPlayer.pause();
    } catch (error) {
      console.error("Music pause failed:", error);
    }
  }, [backgroundMusicPlayer]);

  return (
    <SoundContext.Provider
      value={{
        soundOn,
        setSoundOn,
        playClickSound,
        playPopSound,
        playWhooshSound,
        playWinSound,
        playBackgroundMusic,
        stopBackgroundMusic,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

// ===== Custom hook: useSound =====
export const useSound = () => useContext(SoundContext);