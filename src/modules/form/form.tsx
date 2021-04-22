import * as React from 'react';
import { StyleSheet } from 'react-native';
import Dform from '../../components/DForm/DForm';
import { View } from '../../components/Themed/Themed';

const styles = StyleSheet.create({
  ContainerStyle: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    // width: '80%',
  },
});

const formA = (props) => {
  const { title, questions } = props.route.params;

  return (
    <View style={styles.ContainerStyle}>
      <Dform
        title=''
        questions={questions}>
      </Dform>
    </View>
  );
}

export default formA;