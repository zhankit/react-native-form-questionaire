import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useColorScheme } from 'react-native';
import Navigation from './src/navigation';

import { Provider, connect } from 'react-redux';

import { store } from './src/redux/store/store';

const App = () => {

  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
        <Navigation colorScheme={null} />
        <StatusBar />
    </Provider>
  );
  

}

export default App;