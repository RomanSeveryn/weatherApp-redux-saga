import { takeLatest } from 'redux-saga/effects';
import ActionTypes from '../actions/actionTypes';
import { getWeatherSaga } from './weatherSagas';

function* rootSaga() {
  yield takeLatest(ActionTypes.GET_WEATHER_REQUEST, getWeatherSaga);
}

export default rootSaga;
