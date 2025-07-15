import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import wordBanks from "../constants/wordBanks";

/**
 * WordProvider
 * - Manages the current target word and theme state
 * - Loads a saved word from AsyncStorage on app launch
 * - Generates new words and updates theme dynamically
 */

type WordContextType = {
  targetWord: string;
  currentTheme: string;
  generateNewWord: (theme?: string) => void;
  setCurrentTheme: (theme: string) => void;
};

const WordContext = createContext<WordContextType>({
  targetWord: "",
  currentTheme: "",
  generateNewWord: () => {},
  setCurrentTheme: () => {},
});

export const WordProvider = ({
  children,
  defaultTheme = "Default",
}: {
  children: React.ReactNode;
  defaultTheme?: string;
}) => {
  const [targetWord, setTargetWord] = useState("");
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  // ===== Generate a word from the current or given theme =====
  const generateNewWord = useCallback(
    async (theme?: string) => {
      const activeTheme = theme || currentTheme;
      const bank = wordBanks.find((b) => b.name === activeTheme);

      if (!bank || bank.words.length === 0) return;

      let newWord = targetWord;
      let attempts = 0;
      const maxAttempts = 10;

      while (newWord === targetWord && attempts < maxAttempts) {
        newWord = bank.words[Math.floor(Math.random() * bank.words.length)];
        attempts++;
      }

      setTargetWord(newWord);
      await AsyncStorage.setItem("targetWord", newWord);
    },
    [currentTheme, targetWord]
  );

  // ===== Load saved word or generate one on mount =====
  const loadOrGenerate = useCallback(async () => {
    const stored = await AsyncStorage.getItem("targetWord");
    if (stored) {
      setTargetWord(stored);
    } else {
      await generateNewWord(defaultTheme);
    }
  }, [defaultTheme, generateNewWord]);

  // ===== Run loadOrGenerate when component mounts =====
  useEffect(() => {
    loadOrGenerate();
  }, [loadOrGenerate]);

  return (
    <WordContext.Provider
      value={{
        currentTheme,
        targetWord,
        generateNewWord,
        setCurrentTheme,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

// ===== Custom hook: useWord =====
export const useWord = () => useContext(WordContext);
