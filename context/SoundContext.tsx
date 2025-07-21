import { useAudioPlayer } from "expo-audio";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

/**
 * SoundProvider
 * - Manages global sound state and audio playback
 * - Plays background music and sound effects
 * - Allows toggling, stopping, and resuming music
 */

// ===== Sound files =====
const backgroundMusic = require("../app/assets/sounds/background-music.mp3");
const clickSound = require("../app/assets/sounds/button-click-sound.mp3");
const whooshSound = require("../app/assets/sounds/screen-whoosh-sound.mp3");
const popSound = require("../app/assets/sounds/button-pop-sound.mp3");
const winSound = require("../app/assets/sounds/win-sound.mp3");
const tileGrow = require("../app/assets/sounds/tile-grow-sound.mp3");
const tileLock = require("../app/assets/sounds/tile-lock-sound.mp3");
const tileUnlock = require("../app/assets/sounds/tile-unlock-sound.mp3");

type SoundContextType = {
  soundOn: boolean;
  setSoundOn: (val: boolean) => void;
  playBackgroundMusic: () => void;
  stopBackgroundMusic: () => void;
  playClickSound: (forcePlay?: boolean) => void;
  playWhooshSound: (forcePlay?: boolean) => void;
  playPopSound: (forcePlay?: boolean) => void;
  playWinSound: (forcePlay?: boolean) => void;
  playGrowSound: (forcePlay?: boolean) => void;
  stopGrowSound: () => void;
  playLockSound: (forcePlay?: boolean) => void;
  playUnlockSound: (forcePlay?: boolean) => void;
};

const SoundContext = createContext<SoundContextType>({
  soundOn: true,
  setSoundOn: () => {},
  playBackgroundMusic: () => {},
  stopBackgroundMusic: () => {},
  playClickSound: () => {},
  playWhooshSound: () => {},
  playPopSound: () => {},
  playWinSound: () => {},
  playGrowSound: () => {},
  stopGrowSound: () => {},
  playLockSound: () => {},
  playUnlockSound: () => {},
});

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [soundOn, setSoundOn] = useState(true);
  const hasStarted = useRef(false);

  // ===== Audio players =====
  const backgroundMusicPlayer = useAudioPlayer(backgroundMusic);
  const clickPlayer = useAudioPlayer(clickSound);
  const whooshPlayer = useAudioPlayer(whooshSound);
  const popPlayer = useAudioPlayer(popSound);
  const winPlayer = useAudioPlayer(winSound);
  const tileGrowPlayer = useAudioPlayer(tileGrow);
  const tileLockPlayer = useAudioPlayer(tileLock);
  const tileUnlockPlayer = useAudioPlayer(tileUnlock);

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

  // ===== Play click sound =====
  const playClickSound = useCallback(
    (forcePlay = false) => {
      if (!soundOn && !forcePlay) return;
      try {
        clickPlayer.seekTo(0);
        clickPlayer.play();
      } catch (error) {
        console.error("Click sound error:", error);
      }
    },
    [soundOn, clickPlayer]
  );

  // ===== Play whoosh sound =====
  const playWhooshSound = useCallback(
    (forcePlay = false) => {
      if (!soundOn && !forcePlay) return;
      try {
        whooshPlayer.seekTo(0);
        whooshPlayer.play();
      } catch (error) {
        console.error("Whoosh sound error:", error);
      }
    },
    [soundOn, whooshPlayer]
  );

  // ===== Play pop sound =====
  const playPopSound = useCallback(
    (forcePlay = false) => {
      if (!soundOn && !forcePlay) return;
      try {
        popPlayer.seekTo(0.5);
        popPlayer.play();
      } catch (error) {
        console.error("Pop sound error:", error);
      }
    },
    [soundOn, popPlayer]
  );

  // ===== Play win sound & pause/resume music =====
  const playWinSound = useCallback(
    (forcePlay = false) => {
      if (!soundOn && !forcePlay) return;
      try {
        stopBackgroundMusic();
        winPlayer.seekTo(0);
        winPlayer.play();
        setTimeout(() => {
          playBackgroundMusic();
        }, 8000);
      } catch (error) {
        console.error("Win sound error:", error);
      }
    },
    [soundOn, winPlayer]
  );

  // ===== Play/resume tile growing sound effect =====
  const playGrowSound = useCallback(
    (forcePlay = false) => {
      if (!soundOn && !forcePlay) return;
      try {
        tileGrowPlayer.seekTo(0);
        tileGrowPlayer.play();
      } catch (error) {
        console.error("Grow sound error:", error);
      }
    },
    [soundOn, tileGrowPlayer]
  );

  const stopGrowSound = useCallback(() => {
    tileGrowPlayer.pause();
  }, [soundOn, tileGrowPlayer]);

  const playLockSound = useCallback(
    (forcePlay = false) => {
      if (!soundOn && !forcePlay) return;
      try {
        tileLockPlayer.seekTo(0.05);
        tileLockPlayer.play();
      } catch (error) {
        console.error("Grow sound error:", error);
      }
    },
    [soundOn, tileLockPlayer]
  );

    const playUnlockSound = useCallback(
    (forcePlay = false) => {
      if (!soundOn && !forcePlay) return;
      try {
        tileUnlockPlayer.seekTo(0);
        tileUnlockPlayer.play();
      } catch (error) {
        console.error("Grow sound error:", error);
      }
    },
    [soundOn, tileUnlockPlayer]
  );

  return (
    <SoundContext.Provider
      value={{
        soundOn,
        setSoundOn,
        playBackgroundMusic,
        stopBackgroundMusic,
        playWhooshSound,
        playClickSound,
        playPopSound,
        playWinSound,
        playGrowSound,
        stopGrowSound,
        playLockSound,
        playUnlockSound,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

// ===== Custom hook: useSound =====
export const useSound = () => useContext(SoundContext);
