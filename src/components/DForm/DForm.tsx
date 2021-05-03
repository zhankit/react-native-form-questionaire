import * as React from 'react';
import { Text, View } from 'react-native'
import  { styles } from './styles';
import PropTypes from 'prop-types';
import DCheckbox from '../DCheckbox';
import DTextInput from '../DTextInput';
import DNumberInput from '../DNumberInput';
import DToggle from '../DToggle';
import DButton from '../DButton';
import { Question } from '../../interfaces/interfaces';

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
  const { title, questions, onFormValueEdited, ...rest } = props;

  const [ questionsValue, setquestionsValue ] = React.useState(questions);

  const handleForm = (id: String, value: string) => {
    let questions = questionsValue.map( (question: Question) => { 
      if (question.id === id) return {...question, value: value}
      else return {...question};
    })
    setquestionsValue(questions);
    onFormValueEdited(questions);
  }

  return (
    <View style={styles.ContainerStyle}>
      <Text style={styles.titleTextStyle}> {title} </Text>
      { questionsValue.sort( (a: question, b: question) => { return Number(a.order) - Number(b.order)})
        .map( (question: question, index: number) => {
          switch( question.type ) {
            case 'Textfield':
              return <View key={question.id} style={styles.questionContainer}>
                      <DTextInput 
                        id={question.id}
                        key={question.id}
                        title={question.title} 
                        value={question.value}
                        required={question.required ? true : false}
                        onFormUpdate={handleForm}
                        validator={question.validator}
                        validatorMessage={question.validatorMsg}
                        />
                      </View>;
              break;

            case 'Numberfield':
              return <View key={question.id} style={styles.questionContainer}>
                     <DNumberInput 
                        id={question.id}
                        key={question.id}
                        title={question.title} 
                        value={question.value}
                        required={question.required ? true : false}
                        onFormUpdate={handleForm}
                        />
                        </View>;
              break;
            
            case 'Toggle':
              return <View key={question.id} style={styles.questionContainer}>
                     <DToggle 
                        id={question.id}
                        key={question.id}
                        title={question.title} 
                        required={question.required ? true : false}
                        onFormUpdate={handleForm}
                        value={question.value}
                        validator={question.validator}
                        validatorMessage={question.validatorMsg}
                        />
                        </View>;
              break;

            case 'Checkbox':
              return  <View key={question.id} style={styles.questionContainer}>
                      <DCheckbox 
                        id={question.id}
                        key={question.id}
                        title={question.title} 
                        required={question.required ? true : false}
                        value={question.value}
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