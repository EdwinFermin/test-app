import { call, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
//
import api from "@api/client";
import * as actions from "./actions";
import * as types from "./types";

function* fetchPlayers(): SagaIterator {
  const response = yield call(api.get, types.PLAYERS_ENDPOINT);

  if (response.ok && response.data?.playerList) {
    const players = response.data.playerList.map((item: any) => ({
      id: item.cedula_passport,
      name: item.name,
      hcp: parseFloat(item.handicap ?? item.playing_handicap ?? 0),
      avatarUrl: item.image,
      isFavorite: false,
      team: item.team,
    }));

    yield put(actions.fetchPlayersSuccess(players));
  } else {
    yield put(
      actions.fetchPlayersFailure(response.problem || "Error desconocido")
    );
  }
}

export default function* playersSaga(): SagaIterator {
  yield takeLatest(types.FETCH_PLAYERS_REQUEST, fetchPlayers);
}
