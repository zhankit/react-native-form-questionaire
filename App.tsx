import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './src/navigation';
import { DefaultTheme as PaperDarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme as NavigationDarkTheme} from '@react-navigation/native';
import useCachedResources from './src/assets/hooks/useCachedResources';
import { Provider, connect } from 'react-redux';
import ErrorBoundary from 'react-native-error-boundary'
import merge from 'deepmerge';
import { store } from './src/redux/store/store';
import CustomFallback from './src/components/DError/DError';

const MyPaperDarkTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: '#abe9ff',
    text: 'black',
  },
};

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

  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } 
  else {
      return (
        <ErrorBoundary FallbackComponent={CustomFallback}>
          <Provider store={store}>
            <PaperProvider theme={CombinedDefaultTheme}>
              <Navigation theme={CombinedDefaultTheme}/>
              <StatusBar  backgroundColor={CombinedDefaultTheme.colors.primary} translucent={true}/>
            </PaperProvider>
          </Provider>
        </ErrorBoundary>
    );
  }
}

export default App;