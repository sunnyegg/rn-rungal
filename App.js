import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Public/Redux/store';

import MainNavigation from './src/Navigator';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
