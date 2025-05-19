export interface Player {
  id: string;
  name: string;
  hcp: number;
  avatarUrl: string;
  isFavorite: boolean;
  team?: number;
}

export interface PlayersState {
  players: Player[];
  loading: boolean;
  error: string | null;
}

// Action Types
export const FETCH_PLAYERS_REQUEST = "FETCH_PLAYERS_REQUEST";
export const FETCH_PLAYERS_SUCCESS = "FETCH_PLAYERS_SUCCESS";
export const FETCH_PLAYERS_FAILURE = "FETCH_PLAYERS_FAILURE";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

// Endpoints
export const PLAYERS_ENDPOINT = "/player/list";
