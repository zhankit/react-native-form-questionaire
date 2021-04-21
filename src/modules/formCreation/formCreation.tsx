import * as React from 'react';
import { StyleSheet } from 'react-native';
import { DButton, DDropdown, DTextInput } from '../../components';
import { Text, View } from '../../components/Themed/Themed';
import { Container } from '@material-ui/core';
import { useNavigation } from '@react-navigation/native';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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
  TextStyle:{
    fontWeight: "600"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
/**
 * 
 * @param props id: 'firstName',
          order: 1, 
          type: 'textfield', 
          title: 'First name', 
          required: true,
          value: '',
          validator: (text: string) => { return text.length > 0},
          validatorMsg: 'Cannot be empty...'
 * @returns 
 */

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

const formCreation = (props) => {

  const {}  = props;
  const navigation = useNavigation();
  const options = [
    { label: 'Textfield', value: 'textfield'}, 
    { label: 'Number', value: 'number'},
    { label: 'Toggle', value: 'toggle'},
    { label: 'Checkbox', value: 'checkbox'}
  ];
  const[questions, setQuestion] = React.useState([] as any);
  const[titleValue, setTitleValue] = React.useState('');
  const[optionValue, setoptionValue] = React.useState(options[0]);

  const handleForm = (value: string) => {
    setTitleValue(value);
  }

  const addItem = () => {

    const question: question = {
      id: titleValue,
      order: questions.length,
      type: optionValue.value,
      title: titleValue,
      value: "",
      required: true,
    }
    const result: question[] = [...questions, question];
    setQuestion(result);
    setoptionValue(options[0]);
  };

  const clearList = () => {
    const result: question[] = [];
    setQuestion(result);
    setoptionValue(options[0]);
  };

  const confirmList = () => {
    

    navigation.navigate('form', { questions: questions, title: "Custom Form"});
  };

  return (
    <View style={styles.ContainerStyle}>
      <DTextInput 
        title={"Title"} 
        value={titleValue} 
        onFormUpdate={handleForm}
        validator={ (value: string) => { return String(value).length }}
        validatorMessage={"Field must be not empty"}
      />

      <Container style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px"}}>
        <Text style={styles.TextStyle}>Type(s) of Question</Text> 
        <Dropdown 
          options={options} 
          value={optionValue.value} 
          onChange={ (args: string) => { setoptionValue(args);}} 
          placeholder="Select an option" />
      </Container>

      <DButton title="Add Item" loading={false} onPress={ () => addItem()}></DButton>
      <DButton style={{ backgroundColor: 'black'}} title="Clear List" loading={false} onPress={ () => clearList()}></DButton>
      {
        questions.map( (question: question, index: number) => {
          return (<Container style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px"}}>
            <Text> {index + 1}.  {question.type} - {question.title} </Text>
          </Container>)
        })
      }
            <DButton title="Create" loading={false} onPress={ () => confirmList()}></DButton>

    </View>
  );
}



export default formCreation;