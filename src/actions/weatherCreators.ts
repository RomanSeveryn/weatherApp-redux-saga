import ACTION_TYPES from './actionTypes';

export const createWeatherRequest = () => ({
  type: ACTION_TYPES.GET_WEATHER_REQUEST,
});

export const getWeatherSuccess = (values) => ({
  type: ACTION_TYPES.GET_WEATHER_SUCCESS,
  values,
});

export const getWeatherError = (error) => ({
  type: ACTION_TYPES.GET_WEATHER_ERROR,
  error,
});
