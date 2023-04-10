import ACTION_TYPES from '../actions/actionTypes';
import { AnyAction } from 'redux';

interface WeatherState {
  weather: [];
  currentCity: string;
  isFetching: boolean;
  error: null;
}

const initialState: WeatherState = {
  weather: [],
  currentCity: '',
  isFetching: false,
  error: null,
};

function weatherReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ACTION_TYPES.GET_WEATHER_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_WEATHER_SUCCESS: {
      const { cityName, weather } = action.values;

      return {
        ...state,
        isFetching: false,
        error: null,
        weather: [...weather],
        currentCity: cityName,
      };
    }
    case ACTION_TYPES.GET_WEATHER_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: [...action.error],
      };
    }

    default:
      return state;
  }
}

export default weatherReducer;
