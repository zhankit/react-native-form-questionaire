import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.createURL('/')],
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
          FormCreation: {
            screens: {
              formCreationScreen: 'FormCreation',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
