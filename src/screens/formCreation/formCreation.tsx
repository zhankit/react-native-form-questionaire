import * as React from 'react';
import { ScrollView, StyleSheet,Image } from 'react-native';
import { Text, View } from '../../components/Themed/Themed';
import { useNavigation } from '@react-navigation/native';
import DButton from '../../components/DButton';
import { useTheme } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FormReducersProps, formConnector } from '../../redux/actions/actions';
import { styles } from './styles';

const FormCreation = (props: FormReducersProps) => {

  const { colors } = useTheme();
  const navigation = useNavigation();
  const options = [
    { 
      label: 'CHECKBOX', 
      value: 'checkbox', 
      icon: require('../../assets/images/vectors/checkbox.png'), 
      navigationPage : (option: any) => { navigation.navigate('CheckboxForm', { option: option, title: ""})}
    },
    { 
      label: 'NUMBER', 
      value: 'number', 
      icon: require('../../assets/images/vectors/steps.png'), 
      navigationPage : (option: any) => { navigation.navigate('NumberfieldForm', { option: option, title: ""})}
    },
    { 
      label: 'TEXTFIELD', 
      value: 'textfield', 
      icon: require('../../assets/images/vectors/text-box.png'), 
      navigationPage : (option: any) => { navigation.navigate('TextfieldForm', { option: option, title: ""})}
    },
    { 
      label: 'TOGGLE', 
      value: 'toggle', 
      icon: require('../../assets/images/vectors/enable.png'), 
      navigationPage: (option: any) => { navigation.navigate('ToggleFieldForm', { option: option, title: ""})}
    }
  ];
  const [questions, setQuestion] = React.useState([] as any);
  const confirmList = () => {
    navigation.navigate('FormCart', { questions: questions, title: "Custom Form"});
  };
  const headerText = 'This simple dynamic form is useful where you can create the new forms on the fly without changing the application code.';
  return (
    <View style={{...styles.container, ...{backgroundColor: colors.primary}}}>
      <View style={styles.headerWrapper}>
        <View style={{...styles.headerContainer, ...{backgroundColor: colors.primary}}}>
          <Text style={styles.headerText}>
            {headerText}
            </Text>
        </View>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.optionsContainer}>
          {
            options.map( (option, index) => {
              return (
                <TouchableOpacity key={index} onPress={option.navigationPage}>
                  <View style={styles.optionViewContainer}>
                      <View style={styles.optionViewPaddingContainer}/>
                      <Image 
                        source={option.icon} 
                        style={styles.optionImageContainer} 
                      />
                      <Text style={styles.optionTextContainer}>{option.label}</Text>
                  </View>
              </TouchableOpacity>)
            })
          }
        </View> 
      </ScrollView>

      <View style={styles.submitButtonContainer}>
        <DButton 
          leftTitle={props.state.authReducer.size.toString()} 
          isDisabled={props.state.authReducer.size == 0} 
          title="REVIEW" 
          type={'contrast'} 
          onPress={ () => confirmList()}/>
      </View>
    </View>
    );
}

export default formConnector(FormCreation);