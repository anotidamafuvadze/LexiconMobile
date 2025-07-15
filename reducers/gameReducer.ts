
// Constants & Utils
import game from "@/constants/game";
import { flattenDeep, isNil } from "lodash";
import { uid } from "uid";

// Models
import { PartialTileInput, Tile, TileMap } from "@/models/tile";

// ======================= TYPES =======================

// Game status
export type GameStatus = "ONGOING" | "WON" | "LOST";

// Game state
export type State = {
  board: string[][];
  tiles: TileMap;
  tilesByIds: string[];
  score: number;
  pops: number;
  status: GameStatus;
};

// Reducer actions
export type Action =
| { type: "RESET_GAME" }
| { type: "UPDATE_STATUS"; status: GameStatus }
| { type: "CREATE_TILE"; tile: PartialTileInput }
| { type: "CLEAN_UP" }
| { type: "MOVE_UP" }
| { type: "MOVE_DOWN" }
| { type: "MOVE_LEFT" }
| { type: "MOVE_RIGHT" }
| { type: "POP_TILE" };


// ======================= HELPERS =======================

// Creates an empty board grid
function createGrid(): string[][] {
  return Array.from({ length: game.TILE_COUNT_PER_DIMENSION }, () =>
    Array(game.TILE_COUNT_PER_DIMENSION).fill(undefined)
  );
}

// Increment letter (A→B, Z→A)
function nextLetter(letter: string): string {
  return letter === "Z" ? "A" : String.fromCharCode(letter.charCodeAt(0) + 1);
}

// Debug: prints board state
export function printBoard(board: string[][], tiles: TileMap) {
  const rendered = board
    .map((row) => row.map((id) => (id ? tiles[id]?.value ?? "?" : "·")).join(" "))
    .map((r) => `| ${r} |`);
  console.log("\n" + rendered.join("\n"));
}

// ======================= INITIAL STATE =======================

export const initialState: State = {
  board: createGrid(),
  tiles: {},
  tilesByIds: [],
  score: 0,
  pops: 5, // TODO Fix this
  status: "ONGOING",
};

// ======================= REDUCER =======================

/**
 * gameReducer
 * - Handles game actions: reset, status, create/clean tiles,
 * move & merge tiles, and pop tile.
 */
function gameReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    // ===== Reset to a fresh game state =====
    case "RESET_GAME": {
      return {
        board: createGrid(),
        tiles: {},
        tilesByIds: [],
        score: 0,
        pops: 3,
        status: "ONGOING",
      };
    }

    // ===== Update game status (e.g., to WON/LOST) =====
    case "UPDATE_STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }

    // ===== Add new tile to the grid =====
    case "CREATE_TILE": {
      if (state.status === "WON") return state;

      // Find a random empty cell
      const findEmpty = (): [number, number] | null => {
        const empty: [number, number][] = [];
        for (let y = 0; y < game.TILE_COUNT_PER_DIMENSION; y++) {
          for (let x = 0; x < game.TILE_COUNT_PER_DIMENSION; x++) {
            if (!state.board[y][x]) empty.push([x, y]);
          }
        }
        if (!empty.length) return null;
        return empty[Math.floor(Math.random() * empty.length)];
      };

      // Use given position or pick a random one
      let [x, y] = action.tile.position ?? [];
      if (isNil(x) || isNil(y) || state.board[y][x]) {
        const pos = findEmpty();
        if (!pos) return state;
        [x, y] = pos;
      }

      const tileId = uid();
      const newBoard = JSON.parse(JSON.stringify(state.board));
      newBoard[y][x] = tileId;

      return {
        ...state,
        board: newBoard,
        tiles: {
          ...state.tiles,
          [tileId]: {
            id: tileId,
            position: [x, y],
            value: action.tile.value,
            justCreated: true,
          },
        },
        tilesByIds: [...state.tilesByIds, tileId],
      };
    }

    // ===== Clean up old or removed tiles =====
    case "CLEAN_UP": {
      const flattenBoard = flattenDeep(state.board);
      const newTiles: TileMap = {};

      for (const tileId of flattenBoard) {
        if (!isNil(tileId) && state.tiles[tileId]) {
          newTiles[tileId] = state.tiles[tileId];
        }
      }

      return {
        ...state,
        tiles: newTiles,
        tilesByIds: flattenBoard.filter((id): id is string => !isNil(id)),
      };
    }

    // ===== Move tiles up and merge =====
    case "MOVE_UP": {
      const newBoard = createGrid();
      const newTiles: TileMap = {};
      let newScore = state.score;

      for (let x = 0; x < game.TILE_COUNT_PER_DIMENSION; x++) {
        let newY = 0;
        let previousTile: Tile | undefined;

        for (let y = 0; y < game.TILE_COUNT_PER_DIMENSION; y++) {
          const tileId = state.board[y][x];
          const currentTile = state.tiles[tileId];

          if (!isNil(tileId)) {
            // Merge with previous tile if values match
            if (previousTile?.value === currentTile.value) {
              const newLetter = nextLetter(previousTile.value);
              newScore = state.score + game.POINTS_FROM_MERGE[newLetter];
              newTiles[previousTile.id as string] = {
                ...previousTile,
                value: newLetter
              };
              previousTile = undefined;
              continue;
            }

            // Move tile into new position
            newBoard[newY][x] = tileId;
            newTiles[tileId] = {
              ...currentTile,
              position: [x, newY],
              justCreated: false,
            };
            previousTile = newTiles[tileId];
            newY++;
          }
        }
      }

      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
        score: newScore
      };
    }

    // ===== Move tiles down and merge =====
    case "MOVE_DOWN": {
      const newBoard = createGrid();
      const newTiles: TileMap = {};
      let newScore = state.score;

      for (let x = 0; x < game.TILE_COUNT_PER_DIMENSION; x++) {
        let newY = game.TILE_COUNT_PER_DIMENSION - 1;
        let previousTile: Tile | undefined;

        for (let y = game.TILE_COUNT_PER_DIMENSION - 1; y >= 0; y--) {
          const tileId = state.board[y][x];
          const currentTile = state.tiles[tileId];

          if (!isNil(tileId)) {
            // Merge with previous tile if values match
            if (previousTile?.value === currentTile.value) {
              const newLetter = nextLetter(previousTile.value);
              newScore = state.score + game.POINTS_FROM_MERGE[newLetter];
              newTiles[previousTile.id as string] = {
                ...previousTile,
                value: newLetter,
              };
              previousTile = undefined;
              continue;
            }

            // Move tile into new position
            newBoard[newY][x] = tileId;
            newTiles[tileId] = {
              ...currentTile,
              position: [x, newY],
              justCreated: false,
            };
            previousTile = newTiles[tileId];
            newY--;
          }
        }
      }

      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
        score: newScore
      };
    }

    // ===== Move tiles left and merge =====
    case "MOVE_LEFT": {
      const newBoard = createGrid();
      const newTiles: TileMap = {};
      let newScore = state.score;

      for (let y = 0; y < game.TILE_COUNT_PER_DIMENSION; y++) {
        let newX = 0;
        let previousTile: Tile | undefined;

        for (let x = 0; x < game.TILE_COUNT_PER_DIMENSION; x++) {
          const tileId = state.board[y][x];
          const currentTile = state.tiles[tileId];

          if (!isNil(tileId)) {
            // Merge with previous tile if values match
            if (previousTile?.value === currentTile.value) {
              const newLetter = nextLetter(previousTile.value);
              newScore = state.score + game.POINTS_FROM_MERGE[newLetter];
              newTiles[previousTile.id as string] = {
                ...previousTile,
                value: newLetter,
              };
              previousTile = undefined;
              continue;
            }

            // Move tile into new position
            newBoard[y][newX] = tileId;
            newTiles[tileId] = {
              ...currentTile,
              position: [newX, y],
              justCreated: false,
            };
            previousTile = newTiles[tileId];
            newX++;
          }
        }
      }

      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
        score: newScore
      };
      
    }

    // ===== Move tiles right and merge =====
    case "MOVE_RIGHT": {
      const newBoard = createGrid();
      const newTiles: TileMap = {};
      let newScore = state.score;

      for (let y = 0; y < game.TILE_COUNT_PER_DIMENSION; y++) {
        let newX = game.TILE_COUNT_PER_DIMENSION - 1;
        let previousTile: Tile | undefined;

        for (let x = game.TILE_COUNT_PER_DIMENSION - 1; x >= 0; x--) {
          const tileId = state.board[y][x];
          const currentTile = state.tiles[tileId];

          if (!isNil(tileId)) {
            // Merge with previous tile if values match
            if (previousTile?.value === currentTile.value) {
              const newLetter = nextLetter(previousTile.value);
              newScore = state.score + game.POINTS_FROM_MERGE[newLetter];
              newTiles[previousTile.id as string] = {
                ...previousTile,
                value: newLetter
              };
              previousTile = undefined;
              continue;
            }

            // Move tile into new position
            newBoard[y][newX] = tileId;
            newTiles[tileId] = {
              ...currentTile,
              position: [newX, y],
              justCreated: false,
            };
            previousTile = newTiles[tileId];
            newX--;
          }
        }
      }

      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
        score: newScore
      };
    }

    // ===== Remove (pop) a tile if pops remain =====
    case "POP_TILE": {
      if (state.pops > 0){
         return {
        ...state,
        pops: state.pops - 1
      }
      }

      return {
        ...state
      }

    }

    default:
      return state;
  }
}

export default gameReducer;
