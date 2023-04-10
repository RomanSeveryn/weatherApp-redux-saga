import React from 'react';

import { Provider } from 'react-redux';
import store from './src/store';
import { WeatherScreen } from './src/screen/WeatherScreen';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <WeatherScreen />
    </Provider>
  );
}

export default App;
