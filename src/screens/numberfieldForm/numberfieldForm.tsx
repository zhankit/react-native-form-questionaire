import * as React from 'react';
import { ScrollView, StyleSheet,Image } from 'react-native';
import { Picker } from '@react-native-community/picker';

import { Text, View } from '../../components/Themed/Themed';
import { useNavigation } from '@react-navigation/native';
import DButton from '../../components/DButton';
import Dialog from "react-native-dialog";
import { useTheme } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DTextInput from '../../components/DTextInput';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    borderTopLeftRadius: 80,
    marginTop: 15,
    marginLeft: 10,
    zIndex: 1,
    backgroundColor: '#252a34'
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
    marginLeft: 10,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    backgroundColor: '#252a34',
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
  paddingContainer : { 
    position: 'relative',
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


const numberfieldForm = (props) => {

  const { colors } = useTheme();
  const navigation = useNavigation();
  const options = [
    { label: 'CHECKBOX', value: 'checkbox', icon: require('../../assets/images/vectors/checkbox.png')},
    { label: 'NUMBER', value: 'number', icon: require('../../assets/images/vectors/steps.png')},
    { label: 'TEXTFIELD', value: 'textfield', icon: require('../../assets/images/vectors/text-box.png')}, 
    { label: 'TOGGLE', value: 'toggle', icon: require('../../assets/images/vectors/enable.png')}
    
  ];
  const [questions, setQuestion] = React.useState([] as any);
  const [titleValue, setTitleValue] = React.useState('');
  const [isValidated, setisValidated] = React.useState(true);
  const [optionValue, setoptionValue] = React.useState('');
  const [errorText, setErrorText] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const confirmList = () => {
    navigation.navigate('form', { questions: questions, title: "Custom Form"});
  };

  const handleForm = (index: string, value: string, isValidate: boolean) => {
    setTitleValue(value);
    setisValidated(isValidate);
  }
  const handleCancel = () => {
    setVisible(false);
  };

  const headerText = 'A number field is a basic text control that enables the user to type all numbers of a given type such as integers, complex numbers or maybe PI.';
  return (
    <View style={{...styles.container, ...{backgroundColor: colors.primary}}}>
      <View style={{backgroundColor: colors.primary, flexDirection: 'row', padding: 20 }}>
        <View style={{backgroundColor: 'black', borderRadius: 40, alignItems: 'center', alignContent: 'center', justifyContent: 'center', width: 80, height: 80}}>
          <Image source={require('../../assets/images/vectors/steps.png')} style={{ width: 60, height: 60}} />
        </View>
        <View style={{ paddingHorizontal: 20, backgroundColor: colors.primary,  flexShrink: 1}}>
          <Text style={{ fontWeight: "bold", fontSize: 24, textAlign: 'justify', color: 'black', marginRight: 20}}>NumberField</Text>
          <Text style={{ fontWeight: "400", fontSize: 20, textAlign: 'left', color: 'black', marginRight: 10}}>{headerText}</Text>
        </View>
      </View>
      <ScrollView style={{ backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
      <View style={{ paddingHorizontal: 40, paddingTop: 40}}>
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

      </ScrollView>
      <View style={{ backgroundColor: 'white', paddingBottom: 20}}>
          <DButton title="Add" loading={false} type={'contrast'} onPress={ () => addItem()}/>
      </View>
    </View>
    );
}


export default numberfieldForm;