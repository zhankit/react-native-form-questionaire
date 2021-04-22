import * as React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { DButton, DDropdown, DTextInput } from '../../components';
import { Text, View } from '../../components/Themed/Themed';
import { Container } from '@material-ui/core';
import { useNavigation } from '@react-navigation/native';
import Dropdown from 'react-dropdown';
import CardView from 'react-native-cardview'
import './formCreation.css';

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

  const navigation = useNavigation();
  const options = [
    { label: 'Textfield', value: 'textfield'}, 
    { label: 'Number', value: 'number'},
    { label: 'Toggle', value: 'toggle'},
    { label: 'Checkbox', value: 'checkbox'}
  ];
  const[questions, setQuestion] = React.useState([] as any);
  const[titleValue, setTitleValue] = React.useState('');
  const[isValidated, setisValidated] = React.useState(true);
  const[optionValue, setoptionValue] = React.useState(options[0]);

  const handleForm = (index: string, value: string, isValidate: boolean) => {
    setTitleValue(value);
    setisValidated(isValidate);
  }
  
  const addItem = () => {

    if ( !isValidated ) {
      return "SMTH";
    }
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
        validator={ (value: string) => { const letters = new RegExp('^[a-zA-Z0-9 ]+$'); return String(value).length > 0 && letters.test(value) }}
        validatorMessage={"Field must be not empty or contains special symbol"}
      />

      <Container style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px"}}>
        <Text style={styles.TextStyle}>Type(s) of Question</Text> 
        <Dropdown 
          options={options} 
          value={optionValue.value} 
          onChange={ (args) => { setoptionValue(args);}} 
          placeholder="Select an option" />
      </Container>

      <Container style={{ paddingTop: "10px", display: 'inline-flex', placeContent: 'center'}}>
        <DButton title="Clear" type={'contrast'} loading={false} onPress={ () => clearList()}></DButton>
        <DButton title="Add" loading={false} onPress={ () => addItem()}></DButton>
      </Container>


      {
        questions.map( (question: question, index: number) => {
          return (
          
          <Container style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", boxShadow: '20'}}>
            <Text> {index + 1}.  {question.type} - {question.title} </Text>
          </Container>)
        })
      }
      { (questions.length > 0) && <DButton title="Create" loading={false} onPress={ () => confirmList()}></DButton> } 

    </View>
  );
}



export default formCreation;