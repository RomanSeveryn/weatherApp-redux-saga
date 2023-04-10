import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as WeatherActionCreators from '../actions/weatherCreators';

export function* getWeatherSaga(action) {
  try {
    const response = yield API.getWeather(action.payload);

    yield put(WeatherActionCreators.getWeatherSuccess(response));
  } catch (error) {
    yield put(WeatherActionCreators.getWeatherError(error));
  }
}
