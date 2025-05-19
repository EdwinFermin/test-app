import { Action } from "redux";
//
import * as types from "./types";

interface PlayersAction extends Action {
  payload?: any;
}

const initialState: types.PlayersState = {
  players: [],
  loading: false,
  error: null,
};

export default function playersReducer(
  state = initialState,
  action: PlayersAction
): types.PlayersState {
  switch (action.type) {
    case types.FETCH_PLAYERS_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_PLAYERS_SUCCESS:
      return { ...state, loading: false, players: action.payload };
    case types.FETCH_PLAYERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case types.TOGGLE_FAVORITE:
      return {
        ...state,
        players: state.players.map((player) =>
          player.id === action.payload
            ? { ...player, isFavorite: !player.isFavorite }
            : player
        ),
      };
    default:
      return state;
  }
}
