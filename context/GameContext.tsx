// React and React Native
import React, {
  createContext,
  Dispatch,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";

// Constants
import game from "@/constants/game";

// Models
import { Tile } from "@/models/tile";

// Reducer logic
import gameReducer, {
  Action,
  checkforWin,
  GameStatus,
  initialState,
  State,
} from "@/reducers/gameReducer";

// Utils
import { throttle } from "lodash";


// -------------------- Types --------------------
// Valid move directions
type MoveDirection = "MOVE_UP" | "MOVE_DOWN" | "MOVE_LEFT" | "MOVE_RIGHT";

// Game context shape
type GameContextType = {
  status: GameStatus;
  gameState: State;
  startNewGame: () => void;
  checkGameStatus: (targetWord: string) => void;
  getTiles: () => Tile[];
  dispatch: Dispatch<Action>;
  moveTiles: (type: MoveDirection) => void;
  score: number;
};

// Default context instance 
const GameContext = createContext<GameContextType>({
  status: "ONGOING",
  gameState: initialState,
  startNewGame: () => {},
  checkGameStatus: () => {},
  getTiles: () => [],
  moveTiles: () => {},
  dispatch: () => {},
  score: 0,
});

/**
 * GameProvider
 * - Provides global game state and reducer actions to children
 * - Initializes the game with two starting tiles
 */
export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);
  const hasStarted = useRef(false);

  // On first mount, start a new game
  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    try {
      startNewGame();
    } catch (error) {
      console.error("Starting game failed:", error);
    }
  }, []);

  // Reset board and spawn two tiles
  const startNewGame = () => {
    dispatch({ type: "RESET_GAME" });

    setTimeout(() => {
      dispatch({ type: "CREATE_TILE", tile: { value: "A", justCreated: true } });
      dispatch({ type: "CREATE_TILE", tile: { value: "A", justCreated: true } });
    }, 50); // small delay to prevent animation race condition
  };

  // Return all existing tiles
  const getTiles = () =>
    gameState.tilesByIds
      .map((tileId) => gameState.tiles[tileId])
      .filter((tile): tile is Tile => tile !== undefined);

  // Check if target word is formed in any row/column
  const checkGameStatus = (targetWord: string) => {
    const [won] = checkforWin(gameState, targetWord);
    if (won) {
      dispatch({ type: "UPDATE_STATUS", status: "WON" });
    }
  };

  // Trigger movement in given direction with throttle
  const moveTiles = useCallback(
    throttle(
      (type: MoveDirection) => dispatch({ type }),
      game.MERGE_ANIMATION_DURATION * 1.05,
      { trailing: false }
    ),
    [dispatch]
  );

  return (
    <GameContext.Provider
      value={{
        gameState,
        status: gameState.status,
        startNewGame,
        checkGameStatus,
        getTiles,
        moveTiles,
        dispatch,
        score: gameState.score,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// Custom hook
export const useGame = () => useContext(GameContext);
