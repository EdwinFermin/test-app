import { configureStore } from "@reduxjs/toolkit";
const createSagaMiddleware = require("redux-saga").default;
import { all } from "redux-saga/effects";
//
import playersSaga from "./player/sagas";
import playersReducer from "./player/reducer";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([playersSaga()]);
}

const store = configureStore({
  reducer: {
    players: playersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
