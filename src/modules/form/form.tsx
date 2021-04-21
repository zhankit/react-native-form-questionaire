import * as React from 'react';
import { StyleSheet } from 'react-native';
import Dform from '../../components/DForm/DForm';
import { View } from '../../components/Themed/Themed';

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

const formA = (props) => {
  const { title, questions } = props.route.params;

  return (
    <View style={styles.container}>
      <Dform
        title='Customized Form'
        questions={questions}>
      </Dform>
    </View>
  );
}

export default formA;