import * as React from 'react';
import { StyleSheet } from 'react-native';
import Dform from '../../components/Dform';

import { Text, View } from '../../components/Themed';

export default function formA() {
  return (
    <View style={styles.container}>
      <Dform
        title='Personal Information Form'
        questions={[{
          id: 'firstName',
          order: 1, 
          type: 'textfield', 
          title: 'First name', 
          required: true,
          value: ''
        },
        {
          id: 'lastName',
          order: 2, 
          type: 'textfield', 
          title: 'Last Name', 
          required: true,
          value: ''
        },
        {
          id: 'age',
          order: 3, 
          type: 'number', 
          required: false,
          title: 'Age', 
          value: ''
        }]}>
      </Dform>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
