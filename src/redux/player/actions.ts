import * as types from "./types";

export const fetchPlayersRequest = () => ({
  type: types.FETCH_PLAYERS_REQUEST,
});

export const fetchPlayersSuccess = (players: types.Player[]) => ({
  type: types.FETCH_PLAYERS_SUCCESS,
  payload: players,
});

export const fetchPlayersFailure = (error: string) => ({
  type: types.FETCH_PLAYERS_FAILURE,
  payload: error,
});

export const toggleFavorite = (id: string) => ({
  type: types.TOGGLE_FAVORITE,
  payload: id,
});
