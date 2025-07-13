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
  checkForLoss,
  checkforWin,
  GameStatus,
  initialState,
  State,
} from "@/reducers/gameReducer";

// Utils
import { throttle } from "lodash";
import { useWord } from "./WordContext";

// -------------------- Types --------------------

// Valid move directions
type MoveDirection = "MOVE_UP" | "MOVE_DOWN" | "MOVE_LEFT" | "MOVE_RIGHT";

// Game context shape
type GameContextType = {
  status: GameStatus;
  gameState: State;
  startNewGame: () => void;
  checkGameStatus: () => void;
  popTile: () => void;
  getTiles: () => Tile[];
  gameWinningTiles: string[] | null;
  dispatch: Dispatch<Action>;
  moveTiles: (type: MoveDirection) => void;
  score: number;
  pops: number;
};

// Default context instance
const GameContext = createContext<GameContextType>({
  status: "ONGOING",
  gameState: initialState,
  startNewGame: () => {},
  checkGameStatus: () => {},
  getTiles: () => [],
  popTile: () => {},
  gameWinningTiles: [],
  moveTiles: () => {},
  dispatch: () => {},
  score: 0,
  pops: 3,
});

/**
 * GameProvider
 * - Provides global game state and reducer actions to children
 * - Initializes the game with two starting tiles
 */
export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);
  const [gameWinningTiles, setGameWinningTiles] = React.useState<string[] | null>([]);
  const hasStarted = useRef(false);
  const { targetWord } = useWord();

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
      dispatch({ type: "UPDATE_STATUS", status: "ONGOING" });
      dispatch({ type: "CREATE_TILE", tile: { value: "A", justCreated: true } });
      dispatch({ type: "CREATE_TILE", tile: { value: "A", justCreated: true } });
    }, 50); // small delay to prevent animation race condition
  };

  const popTile = () => {
    dispatch({ type: "POP_TILE" });
  };

  // ---------------- TESTING VERSION ----------------
//   const startNewGame = () => {
//     dispatch({ type: "RESET_GAME" });

//     setTimeout(() => {
//       dispatch({ type: "UPDATE_STATUS", status: "ONGOING" });

//       // Fill the board with a pattern that allows exactly one move (e.g., down),
//       // after which it becomes unsolvable due to no matching adjacent tiles.
//       const initialTiles = [
//         // Row 0
//         { row: 0, col: 0, value: "A", justCreated: true },
//         { row: 0, col: 1, value: "B", justCreated: true },
//         { row: 0, col: 2, value: "C", justCreated: true },
//         { row: 0, col: 3, value: "D", justCreated: true },
//         // Row 1
//         { row: 1, col: 0, value: "E", justCreated: true },
//         { row: 1, col: 1, value: "F", justCreated: true },
//         { row: 1, col: 2, value: "G", justCreated: true },
//         { row: 1, col: 3, value: "H", justCreated: true },
//         // Row 2
//         { row: 2, col: 0, value: "I", justCreated: true },
//         { row: 2, col: 1, value: "J", justCreated: true },
//         { row: 2, col: 2, value: "K", justCreated: true },
//         { row: 2, col: 3, value: "L", justCreated: true },
//         // Row 3 — Leave (3, 3) empty
//         { row: 3, col: 0, value: "M", justCreated: true },
//         { row: 3, col: 1, value: "N", justCreated: true },
//         { row: 3, col: 2, value: "O", justCreated: true },
//         // (3, 3) is intentionally left empty
//       ];

//       for (const tile of initialTiles) {
//         dispatch({ type: "CREATE_TILE", tile });
//       }
//     }, 50);
//   };

  // Return all existing tiles
  const getTiles = () =>
    gameState.tilesByIds
      .map((tileId) => gameState.tiles[tileId])
      .filter((tile): tile is Tile => tile !== undefined);

  // Check if target word is formed in any row/column
  const checkGameStatus = useCallback(() => {
    if (checkForLoss(gameState)){
      dispatch({ type: "UPDATE_STATUS", status: "LOST" });


    }
    const [won, winningTiles] = checkforWin(gameState, targetWord);
    if (won) {
      dispatch({ type: "UPDATE_STATUS", status: "WON" });
    }
    setGameWinningTiles(winningTiles);
  }, [gameState.tilesByIds, gameState.tiles, targetWord]);

  // Trigger movement in given direction with throttle
  const moveTiles = useCallback(
    throttle(
      (type: MoveDirection) => dispatch({ type }),
      game.MERGE_ANIMATION_DURATION * 1.05,
      { trailing: false }
    ),
    [dispatch]
  );

  useEffect(() => {
    if (gameState.status === "ONGOING" && targetWord) {
      checkGameStatus();
    }
  }, [gameState.status, targetWord, checkGameStatus]);

  return (
    <GameContext.Provider
      value={{
        gameState,
        status: gameState.status,
        startNewGame,
        checkGameStatus,
        popTile,
        gameWinningTiles,
        getTiles,
        moveTiles,
        dispatch,
        score: gameState.score,
        pops: gameState.pops,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// Custom hook
export const useGame = () => useContext(GameContext);
