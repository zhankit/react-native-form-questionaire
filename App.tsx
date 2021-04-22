import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './src/navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import useCachedResources from './src/assets/hooks/useCachedResources';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, connect } from 'react-redux';
// import { store } from './src/redux/store/store';

const App = () => {

  // const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();
  const Stack = createStackNavigator();   
  if (!isLoadingComplete) {
    return null;
  } 
  else {
      return (
      // <Provider store={store}>
        <PaperProvider>
         <Navigation colorScheme={null} />
         <StatusBar />
        </PaperProvider>
      // </Provider>
    );
  }
}

export default App;