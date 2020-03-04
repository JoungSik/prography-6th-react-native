import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

export const GET_MOVIE = "movie/GET_MOVIE";

export const getMoviesRequest = createAction(GET_MOVIE);

export const GetMovieActions = {
  request: `${GET_MOVIE}_REQUEST`,
  success: `${GET_MOVIE}_SUCCESS`,
  failure: `${GET_MOVIE}_FAILURE`,
};

export const getMovieEntity = ({
  request: () => ({ type: GetMovieActions.request }),
  success: data => ({ type: GetMovieActions.success, payload: data }),
  failure: error => ({ type: GetMovieActions.failure, error: error }),
});

const initialState = {
  movies: [],
  getMovies: {
    status: "INIT",
    error: {},
  },
};

export default handleActions(
  {
    [GetMovieActions.request]: state => {
      return produce(state, draft => {
        draft["getMovies"].status = 'REQUEST';
      });
    },
    [GetMovieActions.success]: ( state, action ) => {
      return produce(state, draft => {
        draft["getMovies"].status = 'SUCCESS';
        draft["movies"] = action.payload.data.movies;
      });
    },
    [GetMovieActions.failure]: ( state, action ) => {
      console.log(action);
      return produce(state, draft => {
        draft["getMovies"].status = 'FAILURE';
        draft["getMovies"].error = action.error;
      });
    },
  },
  initialState,
);
