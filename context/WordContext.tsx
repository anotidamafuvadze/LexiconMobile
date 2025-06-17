import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import wordBanks from "../constants/targetWordBank";

/**
 * WordContext manages the current target word and theme state.
 * It:
 * - Loads a previously saved word from AsyncStorage on app launch
 * - Generates a new word when requested
 * - Lets the theme be changed dynamically
 */

type WordContextType = {
  targetWord: string;
  currentTheme: string;
  generateNewWord: (theme?: string) => void;
  setCurrentTheme: (theme: string) => void;
};

// Create context with default placeholder values
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

  /**
   * Generates a new word using the current or provided theme.
   * Saves it to AsyncStorage and updates context state.
   */
  const generateNewWord = useCallback(
    async (theme?: string) => {
      const activeTheme = theme || currentTheme;
      const bank = wordBanks.find((b) => b.name === activeTheme);
      if (bank && bank.words.length > 0) {
        let newWord = targetWord;
        let attempts = 0;
        const maxAttempts = 10;

        while (newWord === targetWord && attempts < maxAttempts) {
          newWord = bank.words[Math.floor(Math.random() * bank.words.length)];
          attempts++;
        }

        setTargetWord(newWord);
        await AsyncStorage.setItem("targetWord", newWord);
      }
    },
    [currentTheme, targetWord]
  );
 
  /**
   * Loads the previously saved word if it exists.
   * If not, generates a word using the default theme.
   * This runs only once on initial mount.
   */
  const loadOrGenerate = useCallback(async () => {
    const stored = await AsyncStorage.getItem("targetWord");
    if (stored) {
      setTargetWord(stored);
    } else {
      await generateNewWord(defaultTheme);
    }
  }, [defaultTheme, generateNewWord]);

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

// Custom hook to access the WordContext from any component
export const useWord = () => useContext(WordContext);
