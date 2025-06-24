// Game Logic
import game from "@/constants/game";
import { Tile, TileMap } from "@/models/tile";
import { isNil } from "lodash";
import { uid } from "uid";

// -------------------- Types --------------------

type State = {
  board: string[][];
  tiles: TileMap;
};

type Action =
  | { type: "CLEAN_UP" }
  | { type: "CREATE_TILE"; tile: Tile }
  | { type: "MOVE_UP" }
  | { type: "MOVE_DOWN" }
  | { type: "MOVE_LEFT" }
  | { type: "MOVE_RIGHT" };

// -------------------- Helpers --------------------

// Creates an empty game board
function createBoard(): string[][] {
  const board: string[][] = [];
  for (let i = 0; i < game.TILE_COUNT_PER_DIMENSION; i++) {
    board[i] = new Array(game.TILE_COUNT_PER_DIMENSION).fill(undefined);
  }
  return board;
}

// Returns the next letter (e.g., A → B, Z → A)
function nextLetter(letter: string): string {
  if (letter === "Z") return "A";
  if (letter === "z") return "a";
  return String.fromCharCode(letter.charCodeAt(0) + 1);
}

// -------------------- Initial State --------------------

export const initialState: State = {
  board: createBoard(),
  tiles: {},
};

// -------------------- Reducer --------------------

function gameReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    // Creates a new tile
    case "CREATE_TILE": {
      const tileId = uid();
      const [x, y] = action.tile.position;
      const newBoard = JSON.parse(JSON.stringify(state.board));
      newBoard[y][x] = tileId;

      return {
        ...state,
        board: newBoard,
        tiles: {
          ...state.tiles,
          [tileId]: { id: tileId, ...action.tile },
        },
      };
    }

    // Moves tiles up
    case "MOVE_UP": {
      const newBoard = createBoard();
      const newTiles: TileMap = {};

      for (let x = 0; x < game.TILE_COUNT_PER_DIMENSION; x++) {
        let newY = 0;
        let previousTile: Tile | undefined;

        for (let y = 0; y < game.TILE_COUNT_PER_DIMENSION; y++) {
          const tileId = state.board[y][x];
          const currentTile = state.tiles[tileId];

          if (!isNil(tileId)) {
            // Merge with previous tile if values match
            if (previousTile?.value === currentTile.value) {
              newTiles[previousTile.id as string] = {
                ...previousTile,
                value: nextLetter(previousTile.value),
              };
              // Move merged tile one space behind
              newTiles[tileId] = {
                ...currentTile,
                position: [x, newY - 1],
              };
              previousTile = undefined;
              continue;
            }

            // Move tile into new position
            newBoard[newY][x] = tileId;
            newTiles[tileId] = {
              ...currentTile,
              position: [x, newY],
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
      };
    }

    // Moves tiles down
    case "MOVE_DOWN": {
      const newBoard = createBoard();
      const newTiles: TileMap = {};

      for (let x = 0; x < game.TILE_COUNT_PER_DIMENSION; x++) {
        let newY = game.TILE_COUNT_PER_DIMENSION - 1;
        let previousTile: Tile | undefined;

        for (let y = game.TILE_COUNT_PER_DIMENSION - 1; y >= 0; y--) {
          const tileId = state.board[y][x];
          const currentTile = state.tiles[tileId];

          if (!isNil(tileId)) {
            // Merge with previous tile if values match
            if (previousTile?.value === currentTile.value) {
              newTiles[previousTile.id as string] = {
                ...previousTile,
                value: nextLetter(previousTile.value),
              };
              // Move merged tile one space ahead
              newTiles[tileId] = {
                ...currentTile,
                position: [x, newY + 1],
              };
              previousTile = undefined;
              continue;
            }

            // Move tile into new position
            newBoard[newY][x] = tileId;
            newTiles[tileId] = {
              ...currentTile,
              position: [x, newY],
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
      };
    }

    // Moves tiles left
    case "MOVE_LEFT": {
      const newBoard = createBoard();
      const newTiles: TileMap = {};

      for (let y = 0; y < game.TILE_COUNT_PER_DIMENSION; y++) {
        let newX = 0;
        let previousTile: Tile | undefined;

        for (let x = 0; x < game.TILE_COUNT_PER_DIMENSION; x++) {
          const tileId = state.board[y][x];
          const currentTile = state.tiles[tileId];

          if (!isNil(tileId)) {
            // Merge with previous tile if values match
            if (previousTile?.value === currentTile.value) {
              newTiles[previousTile.id as string] = {
                ...previousTile,
                value: nextLetter(previousTile.value),
              };
              // Move merged tile one space behind
              newTiles[tileId] = {
                ...currentTile,
                position: [newX - 1, y],
              };
              previousTile = undefined;
              continue;
            }

            // Move tile into new position
            newBoard[y][newX] = tileId;
            newTiles[tileId] = {
              ...currentTile,
              position: [newX, y],
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
      };
    }

    // Moves tiles right
    case "MOVE_RIGHT": {
      const newBoard = createBoard();
      const newTiles: TileMap = {};

      for (let y = 0; y < game.TILE_COUNT_PER_DIMENSION; y++) {
        let newX = game.TILE_COUNT_PER_DIMENSION - 1;
        let previousTile: Tile | undefined;

        for (let x = game.TILE_COUNT_PER_DIMENSION - 1; x >= 0; x--) {
          const tileId = state.board[y][x];
          const currentTile = state.tiles[tileId];

          if (!isNil(tileId)) {
            // Merge with previous tile if values match
            if (previousTile?.value === currentTile.value) {
              newTiles[previousTile.id as string] = {
                ...previousTile,
                value: nextLetter(previousTile.value),
              };
              // Move merged tile one space ahead
              newTiles[tileId] = {
                ...currentTile,
                position: [newX + 1, y],
              };
              previousTile = undefined;
              continue;
            }

            // Move tile into new position
            newBoard[y][newX] = tileId;
            newTiles[tileId] = {
              ...currentTile,
              position: [newX, y],
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
      };
    }

    default:
      return state;
  }
}

export default gameReducer;
