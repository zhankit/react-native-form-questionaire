import * as React from 'react';
import { ScrollView, StyleSheet,Image } from 'react-native';
import { Text, View } from '../../components/Themed/Themed';
import { useNavigation } from '@react-navigation/native';
import DButton from '../../components/DButton';
import { useTheme } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
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


const formCreation = (props) => {

  const { colors } = useTheme();
  const navigation = useNavigation();
  const options = [
    { 
      label: 'CHECKBOX', 
      value: 'checkbox', 
      icon: require('../../assets/images/vectors/checkbox.png'), 
      navigationPage : (option: any) => { navigation.navigate('checkboxForm', { option: option, title: ""})}
    },
    { 
      label: 'NUMBER', 
      value: 'number', 
      icon: require('../../assets/images/vectors/steps.png'), 
      navigationPage : (option: any) => { navigation.navigate('numberfieldForm', { option: option, title: ""})}
    },
    { 
      label: 'TEXTFIELD', 
      value: 'textfield', 
      icon: require('../../assets/images/vectors/text-box.png'), 
      navigationPage : (option: any) => { navigation.navigate('textfieldForm', { option: option, title: ""})}
    },
    { 
      label: 'TOGGLE', 
      value: 'toggle', 
      icon: require('../../assets/images/vectors/enable.png'), 
      navigationPage: (option: any) => { navigation.navigate('toggleFieldForm', { option: option, title: ""})}
    }
  ];
  const [questions, setQuestion] = React.useState([] as any);

  const confirmList = () => {
    navigation.navigate('form', { questions: questions, title: "Custom Form"});
  };

  const headerText = 'This simple dynamic form is useful where you can create the new forms on the fly without changing the application code.';
  return (
    <View style={{...styles.container, ...{backgroundColor: colors.primary}}}>
      <View style={{backgroundColor: 'white' }}>
        <View style={{ padding: 30, backgroundColor: colors.primary, borderBottomRightRadius: 30,}}>
          <Text style={{ fontWeight: "400", fontSize: 20, textAlign: 'justify', color: 'black', marginRight: 20}}>{headerText}</Text>
        </View>
      </View>
      <ScrollView style={{ backgroundColor: 'white', borderTopLeftRadius: 30}}>
        <View style={{ marginTop: 40, marginHorizontal: 20, backgroundColor: 'transparent'}}>
          {
            options.map( (option, index) => {
              return (
                <TouchableOpacity key={index} onPress={option.navigationPage}>
                  <View style={{ marginVertical: 10, height: 100, flex: 1,justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', borderRadius: 20, backgroundColor: '#dcf4fc'}}>
                      <View style={{paddingLeft: 40 }}/>
                      <Image source={option.icon} style={{ width: 60, height: 60}} />
                      <Text style={{ fontSize: 23, paddingLeft: 20, textAlign: 'flex-start', fontWeight: 'bold', color: '#010621'}}>{option.label}</Text>
                  </View>
              </TouchableOpacity>)
            })
          }
        </View>
      
      </ScrollView>
      <View style={{ backgroundColor: 'white', paddingBottom: 20}}>
          <DButton leftTitle="1" title="REVIEW" loading={false} type={'contrast'} onPress={ () => addItem()}/>
      </View>
    </View>
    );
}


export default formCreation;