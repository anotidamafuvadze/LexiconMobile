// Game Logic
import game from "@/constants/game";
import { PartialTileInput, Tile, TileMap } from "@/models/tile";
import { flattenDeep, isNil } from "lodash";
import { uid } from "uid";

// -------------------- Types --------------------

// Game status values to track progress
export type GameStatus = "ONGOING" | "WON" | "LOST"

// Shape of the game state
export type State = {
  board: string[][];
  tiles: TileMap;
  tilesByIds: string[];
  score: number;
  pops: number
  status: GameStatus;
};

// Actions dispatched to reducer
export type Action =
  | { type: "POP_TILE" }
  | { type: "RESET_GAME" }
  | { type: "UPDATE_STATUS"; status: GameStatus }
  | { type: "CREATE_TILE"; tile: PartialTileInput }
  | { type: "CLEAN_UP" }
  | { type: "MOVE_UP" }
  | { type: "MOVE_DOWN" }
  | { type: "MOVE_LEFT" }
  | { type: "MOVE_RIGHT" }
  
// -------------------- Helpers --------------------

// Creates an empty game grid
function createGrid(): string[][] {
  const board: string[][] = [];
  for (let i = 0; i < game.TILE_COUNT_PER_DIMENSION; i++) {
    board[i] = new Array(game.TILE_COUNT_PER_DIMENSION).fill(undefined);
  }
  return board;
}

// Get next letter (A → B, Z → A)
function nextLetter(letter: string): string {
  // if (letter === "Z") return "A";
  // if (letter === "z") return "a";
  // return String.fromCharCode(letter.charCodeAt(0) + 1);
  return "A"
}

// TODO: Get rid of debugging print lines

export function checkForLoss(state: State): boolean {
  // Check if all tiles are occupied
   for (let row = 0; row < game.NUMBER_OF_ROWS; row++) {
     for (let col = 0; col < game.NUMBER_OF_COLS; col++) {
      if (isNil(state.board[row][col])){
        return false;  // Found an empty tile, game is not over
      }
     }
   }

   // Check if no tiles can merge (no adjacent same tiles)
   for (let row = 0; row < game.NUMBER_OF_ROWS; row++) {
     for (let col = 0; col < game.NUMBER_OF_COLS; col++) {
      const currTileId = state.board[row][col];
      if (!isNil(currTileId)){

        // Check if the tile can merge with its right neighbor
        const rightTileId = state.board[row][col + 1];
        if (col < game.NUMBER_OF_COLS - 1 && !isNil(rightTileId) && state.tiles[currTileId]?.value === state.tiles[rightTileId]?.value ){
          return false; // Found a merge-able pair horizontally
        }

        // Check if the tile can merge with its bottom neighbor
        const downTileId = state.board[row][col + 1];
        if (row < game.NUMBER_OF_ROWS - 1 && !isNil(downTileId) && state.tiles[currTileId]?.value === state.tiles[downTileId]?.value ){
          return false; // Found a merge-able pair vertically
        }

      }
     }
    }

    return state.pops > 0;



  

}

// Check if target word appears in a row or column
export function checkforWin(state: State, targetWord: string): [boolean, string[] | null] {
  // Check each row
  for (let row = 0; row < game.NUMBER_OF_ROWS; row++) {
    const [rowWin, winningTiles] = checkRow(row, state, targetWord);
    if (rowWin) {
      return [true, winningTiles];
    }
  }
  // Check each column
  for (let col = 0; col < game.NUMBER_OF_COLS; col++) {
    const [colWin, winningTiles] = checkCol(col, state, targetWord);
    if (colWin) {
      return [true, winningTiles];
    }
  }
  return [false, null];
}

// Check single row for target word
function checkRow(row: number, state: State, targetWord: string): [boolean, string[] | null] {
  let currentWord = "";
  const winningTiles: string[] = [];

  for (let col = 0; col < game.NUMBER_OF_COLS; col++) {
    const currTileId = state.board[row][col];

    if (isNil(currTileId)) {
      return [false, null];
    }

    const currTile = state.tiles[currTileId];
    currentWord += currTile.value;
    winningTiles.push(currTileId);
  }

  if (currentWord === targetWord) {
    return [true, winningTiles];
  }

  return [false, null];
}

// Check single column for target word
function checkCol(col: number, state: State, targetWord: string): [boolean, string[] | null] {
  let currentWord = "";
  const winningTiles: string[] = [];

  for (let row = 0; row < game.NUMBER_OF_ROWS; row++) {
    const currTileId = state.board[row][col];

    if (isNil(currTileId)) {
      return [false, null];
    }

    const currTile = state.tiles[currTileId];
    currentWord += currTile.value;
    winningTiles.push(currTileId);
  }

  if (currentWord === targetWord) {
    return [true, winningTiles];
  }

  return [false, null];
}

// Print board state for debugging
export function printBoard(board: string[][], tiles: TileMap) {
  const rendered = board.map((row) =>
    row.map((id) => (id ? tiles[id]?.value ?? "?" : "·")).join(" ")
  );
  console.log("\n" + rendered.map((r) => `| ${r} |`).join("\n"));
}

// -------------------- Initial State --------------------

// Initial state of the game
export const initialState: State = {
  board: createGrid(),
  tiles: {},
  tilesByIds: [],
  score: 0,
  pops: 3,
  status: "ONGOING",
};


// -------------------- Reducer --------------------

/**
 * gameReducer
 * Updates the game state in response to actions like moving, merging, 
 * resetting, or creating tiles
 */
function gameReducer(state: State = initialState, action: Action): State {
  switch (action.type) {

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
    // Reset to a fresh game state
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

     // Update status manually (e.g., to WON/LOST)
    case "UPDATE_STATUS": {
      return {
        ...state,
        status: action.status
      }
    }

    // Add new tile to grid
   case "CREATE_TILE": {
    if (state.status === "ONGOING"){
      const findRandomPosition = (): [number, number] | null => {
        const emptyCells: [number, number][] = [];

        for (let y = 0; y < game.TILE_COUNT_PER_DIMENSION; y++) {
          for (let x = 0; x < game.TILE_COUNT_PER_DIMENSION; x++) {
            if (isNil(state.board[y][x])) {
              emptyCells.push([x, y]);
            }
          }
        }

        if (emptyCells.length === 0) return null;

        const index = Math.floor(Math.random() * emptyCells.length);
        return emptyCells[index];
      };

      let [x, y] = action.tile.position ?? [];

      // If not given a position, find a random one
      if (isNil(x) || isNil(y) || !isNil(state.board[y][x])) {
        const newPosition = findRandomPosition();
        if (!newPosition) {
          // TODO: Flag that the game is over
          return state;
        }
        [x, y] = newPosition;
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
  }

    // Clean up old or removed tiles
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



    // Moves tiles up and merge
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

      console.log("After MOVE_UP:");
      printBoard(newBoard, newTiles);

      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
        score: newScore
      };
    }

    // Moves tiles down and merge
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

      console.log("After MOVE_DOWN:");
      printBoard(newBoard, newTiles);

      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
        score: newScore
      };
    }

    // Moves tiles left and merge
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

      console.log("After MOVE_LEFT:");
      printBoard(newBoard, newTiles);

      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
        score: newScore
      };
      
    }

    // Moves tiles right and merge
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

      console.log("After MOVE_RIGHT:");
      printBoard(newBoard, newTiles);

      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
        score: newScore
      };
    }

    default:
      return state;
  }
}

export default gameReducer;
