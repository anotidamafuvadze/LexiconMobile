import React, {
  createContext,
  Dispatch,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { useWord } from "./WordContext";
import game from "@/constants/game";
import { isNil, throttle } from "lodash";
import { Tile } from "@/models/tile";
import gameReducer, {
  Action,
  GameStatus,
  initialState,
  printBoard,
  State,
} from "@/reducers/gameReducer";

// ======================= TYPES =======================

// Valid move directions
type MoveDirection = "MOVE_UP" | "MOVE_DOWN" | "MOVE_LEFT" | "MOVE_RIGHT";

// Game context shape
type GameContextType = {
  status: GameStatus;
  gameState: State;
  startNewGame: () => void;
  moveTiles: (type: MoveDirection) => void;
  popTile: () => void;
  checkGameStatus: () => void;
  getTiles: () => Tile[];
  gameWinningTiles: string[] | null;
  dispatch: Dispatch<Action>;
  score: number;
  pops: number;
};

// Default context
const GameContext = createContext<GameContextType>({
  status: "ONGOING",
  gameState: initialState,
  startNewGame: () => {},
  moveTiles: () => {},
  popTile: () => {},
  checkGameStatus: () => {},
  getTiles: () => [],
  gameWinningTiles: [],
  dispatch: () => {},
  score: 0,
  pops: 3,
});

/**
 * GameProvider
 * - Provides game state and reducer actions to children
 * - Initializes the board with two starting tiles
 */
export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);
  const [gameWinningTiles, setGameWinningTiles] = React.useState<string[] | null>([]);
  const hasStarted = useRef(false);
  const { targetWord } = useWord();

  // ===== Start new game on first mount =====
  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    try {
      startNewGame();
    } catch (error) {
      console.error("Starting game failed:", error);
    }
  }, []);

  // ===== Reset board and spawn two tiles =====
  const startNewGame = () => {
    dispatch({ type: "RESET_GAME" });

    setTimeout(() => {
      dispatch({ type: "UPDATE_STATUS", status: "ONGOING" });
      dispatch({ type: "CREATE_TILE", tile: { value: "A", justCreated: true } });
      dispatch({ type: "CREATE_TILE", tile: { value: "A", justCreated: true } });
    }, 50);
  };

  // ===== Move tiles in a direction (throttled) =====
  const moveTiles = useCallback(
    throttle(
      (type: MoveDirection) => {
        if (gameState.status === "ONGOING") {
          dispatch({ type });
        }
      },
      game.MERGE_ANIMATION_DURATION * 1.05,
      { trailing: false }
    ),
    [dispatch, gameState.status]
  );

  // ===== Remove a tile =====
  const popTile = () => {
    dispatch({ type: "POP_TILE" });
  };

  // ===== Check win/loss conditions =====
  const checkGameStatus = useCallback(() => {
    if (checkForLoss(gameState)) {
      printBoard(gameState.board, gameState.tiles);
      dispatch({ type: "UPDATE_STATUS", status: "LOST" });
    }

    const [won, winningTiles] = checkforWin(gameState, targetWord);
    if (won) {
      dispatch({ type: "UPDATE_STATUS", status: "WON" });
    }

    setGameWinningTiles(winningTiles);
  }, [gameState.tilesByIds, gameState.tiles, targetWord]);

  // ===== Get all active tiles =====
  const getTiles = () =>
    gameState.tilesByIds
      .map((tileId) => gameState.tiles[tileId])
      .filter((tile): tile is Tile => tile !== undefined);

  // ===== Check status when game state or target word changes =====
  useEffect(() => {
    if (gameState.status === "ONGOING" && targetWord) {
      checkGameStatus();
    }
  }, [gameState.status, targetWord, checkGameStatus]);

  // ===== Check if no moves or pops remain =====
  function checkForLoss(state: State): boolean {
    const size = game.TILE_COUNT_PER_DIMENSION;

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        if (isNil(state.board[x][y])) return false;
      }
    }

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        const currId = state.board[x][y];
        const currTile = state.tiles[currId];
        if (!currTile) continue;

        if (
          (x < size - 1 && currTile.value === state.tiles[state.board[x + 1][y]]?.value) ||
          (y < size - 1 && currTile.value === state.tiles[state.board[x][y + 1]]?.value)
        ) {
          return false;
        }
      }
    }

    return state.pops <= 0;
  }

  // ===== Check if target word appears in any row or column =====
  function checkforWin(state: State, targetWord: string): [boolean, string[] | null] {
    for (let row = 0; row < game.NUMBER_OF_ROWS; row++) {
      const [win, tiles] = checkRow(row, state, targetWord);
      if (win) return [true, tiles];
    }

    for (let col = 0; col < game.NUMBER_OF_COLS; col++) {
      const [win, tiles] = checkCol(col, state, targetWord);
      if (win) return [true, tiles];
    }

    return [false, null];
  }

  // ===== Check a single row =====
  function checkRow(row: number, state: State, targetWord: string): [boolean, string[] | null] {
    let word = "";
    const tiles: string[] = [];

    for (let col = 0; col < game.NUMBER_OF_COLS; col++) {
      const id = state.board[row][col];
      if (isNil(id)) return [false, null];
      word += state.tiles[id].value;
      tiles.push(id);
    }

    return word === targetWord ? [true, tiles] : [false, null];
  }

  // ===== Check a single column =====
  function checkCol(col: number, state: State, targetWord: string): [boolean, string[] | null] {
    let word = "";
    const tiles: string[] = [];

    for (let row = 0; row < game.NUMBER_OF_ROWS; row++) {
      const id = state.board[row][col];
      if (isNil(id)) return [false, null];
      word += state.tiles[id].value;
      tiles.push(id);
    }

    return word === targetWord ? [true, tiles] : [false, null];
  }

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

// ===== Custom hook: useGame =====
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
