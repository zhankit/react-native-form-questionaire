import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './src/navigation';
import { DefaultTheme as PaperDarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme as NavigationDarkTheme} from '@react-navigation/native';
import useCachedResources from './src/assets/hooks/useCachedResources';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, connect } from 'react-redux';
import { SafeAreaView, useColorScheme } from 'react-native';
import merge from 'deepmerge';
// import { store } from './src/redux/store/store';

const MyPaperDarkTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: '#abe9ff',
    text: 'black',
  },
};
// primary: '#252a34',

const MyNavigationDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: '#abe9ff',
    text: 'black',
    accent: '#233c45'
  },
};

const CombinedDefaultTheme = merge(MyPaperDarkTheme, MyNavigationDarkTheme);

const App = () => {

  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();
  const Stack = createStackNavigator();   
  if (!isLoadingComplete) {
    return null;
  } 
  else {
      return (
        <PaperProvider theme={CombinedDefaultTheme}>
          <Navigation theme={CombinedDefaultTheme}/>
          <StatusBar  backgroundColor={CombinedDefaultTheme.colors.primary} translucent={true}/>
        </PaperProvider>
    );
  }
}

export default App;