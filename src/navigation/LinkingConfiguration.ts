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
          form: {
            screens: {
              DashboardMainScreen: 'Form',
            },
          },
          formCreation: {
            screens: {
              formCreationScreen: 'formCreation',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
