import * as React from 'react';
import { Alert, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Text, View } from '../../components/Themed/Themed';
import { bindActionCreators } from 'redux'
import { useNavigation } from '@react-navigation/native';
import DTextInput from '../../components/DTextInput';
import DButton from '../../components/DButton';
import Dialog from "react-native-dialog";
import { createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux';
import actions from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
  },
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
  },
  buttonContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subbuttonContainer: {
    flex: 1,
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: { width: 4, height: 4},
    shadowOpacity: 0.3,
    borderColor: '#0B2940',
    borderWidth: 1,
    borderRadius: 3,
    shadowRadius:6,
    marginLeft: 20, 
    marginRight: 20, 
    marginTop: 10,
    padding: 10 
  },
  specialText: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  titleText: {

  },
  contentText: {

  },
  paddingContainer : { 
    paddingLeft: 20, 
    paddingRight: 20, 
    paddingTop: 10}
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
  const [questions, setQuestion] = React.useState([] as any);
  const [titleValue, setTitleValue] = React.useState('');
  const [isValidated, setisValidated] = React.useState(true);
  const [optionValue, setoptionValue] = React.useState('textfield');
  const [errorText, setErrorText] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const handleCancel = () => {
    setVisible(false);
  };

  const handleForm = (index: string, value: string, isValidate: boolean) => {
    setTitleValue(value);
    setisValidated(isValidate);
  }
  
  const addItem = () => {

    if ( !isValidated ) {
      setErrorText('Please check if all mandatory fields are filled correctly!');
      setVisible(true);
      return ;
    }

    if ( questions.some( (question: question) => question.title.trim().toLocaleLowerCase() === titleValue.trim().toLocaleLowerCase())) {
      setErrorText('You have duplicate title!');
      setVisible(true);
      return ;
    }
    const question: question = {
      id: titleValue,
      order: questions.length,
      type: optionValue,
      title: titleValue,
      value: "",
      required: true,
    }
    const result: question[] = [...questions, question];
    setQuestion(result);
  };

  React.useEffect( () => {
    // setoptionValue('');
  }, [questions])

  const clearList = () => {
    const result: question[] = [];
    setQuestion(result);
  };

  const confirmList = () => {
    navigation.navigate('form', { questions: questions, title: "Custom Form"});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.ContainerStyle}>
      <View style={styles.paddingContainer}>
        <DTextInput 
          title={"Title"} 
          value={titleValue} 
          onFormUpdate={handleForm}
          validator={ (value: string) => { const letters = new RegExp('^[a-zA-Z0-9 ]+$'); return String(value).length > 0 && letters.test(value) }}
          validatorMessage={"Field must be not empty or contains special symbol"}
        /> 
      </View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Error</Dialog.Title>
        <Dialog.Description>
          {errorText}
        </Dialog.Description>
        <Dialog.Button label="Okay" onPress={handleCancel} />
      </Dialog.Container>
      <View style={styles.paddingContainer}>
        <Text style={styles.TextStyle}>Type(s) of Question</Text> 
        <Picker 
          selectedValue={optionValue} 
          onValueChange={ (itemValue, itemIndex) => { setoptionValue(itemValue);}} 
          >
          <Picker.Item label="Textfield" value="textfield" />
          <Picker.Item label="Number" value="number" />
          <Picker.Item label="Toggle" value="toggle" />
          <Picker.Item label="Checkbox" value="checkbox" />
          </Picker>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.subbuttonContainer}>
          <DButton title="Clear" type={'contrast'} loading={false} onPress={ () => clearList()} />
        </View>
        <View style={styles.subbuttonContainer}>
          <DButton title="Add" loading={false} onPress={ () => addItem()}/>
          </View>
      </View>
      </View>

      {
        questions.map( (question: question, index: number) => {
          return (
          <View key={index} style={styles.questionContainer}>
            <View style={{ marginRight: 10}}>
              <Text style={styles.specialText}>{index + 1}</Text>
            </View>
            <View>
              <View>
                <Text style={{ fontSize: 18}}> Title : {question.title} </Text>
              </View>
              <View>
                <Text style={{ fontSize: 18}}> Type : {question.type}  </Text>
              </View>
            </View>
          </View>)
        })
      }
      { (questions.length > 0) && <DButton title="Create" loading={false} onPress={ () => confirmList()}></DButton> } 
        
      </ScrollView>
    </SafeAreaView>
    );
}

// const mapStateToProps = (state) => {
//   return {
//     question: state.questions
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(formCreation);
export default formCreation;