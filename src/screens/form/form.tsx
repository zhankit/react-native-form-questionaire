import * as React from 'react';
import Dform from '../../components/DForm/DForm';
import { View } from '../../components/Themed/Themed';
import { styles } from './styles';
import { FormReducersProps, formConnector } from '../../redux/actions/actions';


const formA = (props: FormReducersProps) => {
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

export default formConnector(formA);