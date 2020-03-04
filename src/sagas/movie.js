import { call, put, take, fork, all } from 'redux-saga/effects';

import axios from "axios";

import { getMovieEntity, GET_MOVIE } from "../redux/modules/Movie";

const getMovie = async () => {
  const { data } = await axios.get("https://yts.mx/api/v2/list_movies.json?limit=50");
  return data;
};

function* getMovieSaga( action ) {
  yield put(getMovieEntity.request());
  try {
    const data = yield call(getMovie);
    yield put(getMovieEntity.success(data));
  } catch (error) {
    yield put(getMovieEntity.failure(error));
  }
}

function* watchGetMovie() {
  while (true) {
    yield take(GET_MOVIE);
    yield call(getMovieSaga);
  }

}

export default function* rootSaga() {
  yield all([
    fork(watchGetMovie),
  ]);

}
