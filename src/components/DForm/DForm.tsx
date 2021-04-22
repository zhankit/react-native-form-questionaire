import * as React from 'react';
import { StyleSheet, TextInput, Text, View, TextProps } from 'react-native'
import PropTypes from 'prop-types';
import { DButton, DNumberInput, DTextInput, DToggle } from '..';
import DDropdown from '../DCheckbox';
import DCheckbox from '../DCheckbox';

const styles = StyleSheet.create({
  ContainerStyle: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  TextStyle:{
    fontWeight: "600"
  },
  TextInputStyle: {
    color: 'black',
    textDecorationColor:'#3CAEA3',
    overlayColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: '3px',
    paddingHorizontal: '10px',
    height: '50px',
    tintColor: 'black'
  },
  titleTextStyle:{
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
  value: any;
  required?: boolean;
  validator?: Function;
  validatorMsg?: string;
  options?: option[];
}

interface option {
  key: string;
  value: string
}

const DForm = (props: { [x: string]: any; title: any; questions: any; }) =>  {
  const { title, questions, ...rest } = props;

  const [ questionsValue, setquestionsValue ] = React.useState(questions);

  const handleForm = (index: number, value: string) => {
    let questions = [...questionsValue];
    let question = {
      ...questions[index],
      value: value
    }
    questions[index] = question;
    setquestionsValue(questions);
  }

  const review = ( result: question[] ) => { 
    console.log('question', result);
  }  

  return (
    <View style={styles.ContainerStyle}>
      <Text style={styles.titleTextStyle}> {title} </Text>
      { questionsValue.sort( (a: question, b: question) => { return Number(a.order) - Number(b.order)})
        .map( (question: question, index: number) => {
          switch( question.type ) {
            case 'textfield':
              return <DTextInput 
                      key={question.id}
                      title={question.title} 
                      index={index}
                      value={""}
                      required={question.required ? true : false}
                      onFormUpdate={handleForm}
                      validator={question.validator}
                      validatorMessage={question.validatorMsg}
                      />;
              break;

            case 'number':
              return <DNumberInput 
                        key={question.id}
                        title={question.title} 
                        index={index}
                        value={""}
                        required={question.required ? true : false}
                        onFormUpdate={handleForm}
                        />;
              break;
            
            case 'toggle':
              return <DToggle 
                        key={question.id}
                        title={question.title} 
                        index={index}
                        required={question.required ? true : false}
                        onFormUpdate={handleForm}
                        validator={question.validator}
                        validatorMessage={question.validatorMsg}
                        />;
              break;

            case 'checkbox':
              return <DCheckbox 
                        key={question.id}
                        title={question.title} 
                        index={index}
                        required={question.required ? true : false}
                        onFormUpdate={handleForm}
                        validator={question.validator}
                        validatorMessage={question.validatorMsg}
                       />;
              break;
          }
      })}
      <DButton title="Review" loading={false} onPress={ () => review(questionsValue)}></DButton>
    </View>
    );
}

DForm.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf([
    'textfield',
    'number',
    'toggle',
    'checkbox'
  ]),
};


export default DForm