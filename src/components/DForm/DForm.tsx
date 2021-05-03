import * as React from 'react';
import { Text, View } from 'react-native'
import  { styles } from './styles';
import PropTypes from 'prop-types';
import DCheckbox from '../DCheckbox';
import DTextInput from '../DTextInput';
import DNumberInput from '../DNumberInput';
import DToggle from '../DToggle';
import DButton from '../DButton';

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
            case 'Textfield':
              return <View key={index} style={styles.questionContainer}>
                      <DTextInput 
                        key={question.id}
                        title={question.title} 
                        index={index}
                        value={""}
                        required={question.required ? true : false}
                        onFormUpdate={handleForm}
                        validator={question.validator}
                        validatorMessage={question.validatorMsg}
                        />
                      </View>;
              break;

            case 'Numberfield':
              return <View key={index} style={styles.questionContainer}>
                     <DNumberInput 
                        key={question.id}
                        title={question.title} 
                        index={index}
                        value={""}
                        required={question.required ? true : false}
                        onFormUpdate={handleForm}
                        />
                        </View>;
              break;
            
            case 'Toggle':
              return <View key={index} style={styles.questionContainer}>
                     <DToggle 
                        key={question.id}
                        title={question.title} 
                        index={index}
                        required={question.required ? true : false}
                        onFormUpdate={handleForm}
                        validator={question.validator}
                        validatorMessage={question.validatorMsg}
                        />
                        </View>;
              break;

            case 'Checkbox':
              return  <View key={index} style={styles.questionContainer}>
                      <DCheckbox 
                        key={question.id}
                        title={question.title} 
                        index={index}
                        required={question.required ? true : false}
                        onFormUpdate={handleForm}
                        validator={question.validator}
                        validatorMessage={question.validatorMsg}
                       />
                       </View>;
              break;
          }
      })}
     
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