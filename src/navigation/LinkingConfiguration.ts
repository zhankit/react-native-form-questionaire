import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      // This is the Root Directory
      Root: {
        screens: {
          Home: {
            screens: {
              LoginSreen: 'home'
            }
          },
          formA: {
            screens: {
              DashboardMainScreen: 'Form A',
            },
          },
          formB: {
            screens: {
              BookingMainScreen: 'Form B',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
