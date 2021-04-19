import * as React from 'react';
import { StyleSheet, TextInput, Text, View, TextProps } from 'react-native'
import PropTypes from 'prop-types';
import DButton from './DButton';
import DNumberInput from './DTextInput';
import DTextInput from './DTextInput';

const containerStyles = StyleSheet.create({
  ContainerStyle: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  TextStyle:{
    fontWeight: "600"
  },
  TextInputStyle: {
    color: 'black',
    // overlayColor: 'black',
    outlineWidth: 1,
    outlineColor:'#3CAEA3',
    overlayColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: '3px',
    paddingHorizontal: '10px',
    height: '50px',
    tintColor: 'black'
  },
})

const styles = StyleSheet.create({
  TextStyle:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: '20px',
  },
})

interface DFormProps {
  title: string;
  questions: question[];
}

interface question {
  id: string;
  order: number;
  type: string;
  title: string;
  value: string;
  required?: boolean;
  validator?: string;
  options?: option[];
}

interface option {
  key: string;
  value: string
}


const DForm = (props: DFormProps) => {
  const { ...rest } = props;

  return (
    <View style={containerStyles.ContainerStyle}>
      <Text style={styles.TextStyle}> {props.title} </Text>
      { props.questions.sort( (a, b) => { return Number(a.order) - Number(b.order)})
        .map( (question: question) => {
          switch( question.type ) {
            case 'textfield':
              return <DTextInput 
                      title={question.title} 
                      required={question.required ? true : false}
                      ></DTextInput>;
              break;

            case 'number':
              return <DNumberInput title={question.title}/> 
              break;
            
            case 'toggle':
              console.log('toggle');
              break;

            case 'checkbox':
              console.log('checkbox');
              break;
            
          }
      })}
      <DButton title="Review" loading={false} onPress={ () => console.log('A')}></DButton>
    </View>
    );
}

DForm.propTypes = {
  title: PropTypes.string,
  // questions: PropTypes.arrayOf<>,
};

export default DForm