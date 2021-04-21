import * as React from 'react';
import { StyleSheet, TextInput, Text, View, TextProps } from 'react-native'
import PropTypes from 'prop-types';
import { DButton, DNumberInput, DTextInput, DToggle } from '..';
import DDropdown from '../DCheckbox';
import DCheckbox from '../DCheckbox';

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

/**
 * To validate the result with validation and required in current form of questions.
 * It will focus on and off all text field to ensure that is okay
 * @param result 
 */
const review = ( result: question[] ) => { 
  console.log('question', result);
}

class DForm extends React.Component   {
  // const { ...rest } = props;
  state = {
    title: this.props.title,
    questions: this.props.questions
  };

  handleForm = (index: number, value: string) => {
    let questions = [...this.state.questions];
    let question = {
      ...this.state.questions[index],
      value: value
    }
    questions[index] = question;
    this.setState( {questions: questions});
}

  render() {
    return (
    <View style={containerStyles.ContainerStyle}>
      <Text style={styles.TextStyle}> {this.state.title} </Text>
      { this.state.questions.sort( (a: question, b: question) => { return Number(a.order) - Number(b.order)})
        .map( (question: question, index: number) => {
          switch( question.type ) {
            case 'textfield':
              return <DTextInput 
                      key={question.id}
                      title={question.title} 
                      index={index}
                      value={""}
                      required={question.required ? true : false}
                      onFormUpdate={this.handleForm}
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
                        onFormUpdate={this.handleForm}
                        />;
              break;
            
            case 'toggle':
              return <DToggle 
                        key={question.id}
                        title={question.title} 
                        index={index}
                        required={question.required ? true : false}
                        onFormUpdate={this.handleForm}
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
                        onFormUpdate={this.handleForm}
                        validator={question.validator}
                        validatorMessage={question.validatorMsg}
                       />;
              break;
          }
      })}
      <DButton title="Review" loading={false} onPress={ () => review(this.state.questions)}></DButton>
    </View>
    );
  }
}

// DForm.propTypes = {
//   title: PropTypes.string,
//   // questions: PropTypes.arrayOf<>,
// };


export default DForm