import * as React from 'react';
import { ScrollView, StyleSheet,Image, ImageBackground } from 'react-native';
import { Text, View } from '../../components/Themed/Themed';
import { useNavigation } from '@react-navigation/native';
import DButton from '../../components/DButton';
import { useTheme } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FormReducersProps, formConnector } from '../../redux/actions/actions';
import { styles } from './styles';
import Dialog from "react-native-dialog";
import { Question } from '../../interfaces/interfaces';

const FormCart = (props: FormReducersProps) => {

  const { colors } = useTheme();
  const navigation = useNavigation();
  const headerText = 'You may review all the components that are added earlier before checkout.';

  const [visible, setVisible] = React.useState({
    deletion: false,
    tbc: false,
  });
  const [focusID, setFocusID] = React.useState('');

  const confirmList = () => {
    navigation.navigate('Form', { title: "Custom Form"});
  };

  const removeItems = (index: String) => {

    if (props.state.authReducer.size == 1 ) {
      props.removeItems(index);
      setVisible({ ...visible, deletion: false})
      navigation.goBack();
    } else {
      props.removeItems(index);
      setVisible({ ...visible, deletion: false})
    }
  }

  const editEntry = (component: Question) => {
    console.log('wala', component);
    try {
      if (component.type === 'Checkbox') navigation.navigate('CheckboxForm', { form: component, isEdit: true, title: "Edit"});
      else if (component.type === 'Numberfield') navigation.navigate('NumberfieldForm', { form: component, isEdit: true, title: "Edit"});
      else if (component.type === 'Textfield') navigation.navigate('TextfieldForm', { form: component, isEdit: true, title: "Edit"});
      else if (component.type === 'Toggle') navigation.navigate('ToggleFieldForm', { form: component, isEdit: true, title: "Edit"});
    } catch(e) {
      console.log('errror', e);
    }
  } 
  
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
            props.state.authReducer.forms.map( (component: Question) => {
              return (
                  <View key={component.id} style={styles.optionViewContainer}>
                      <View style={styles.optionViewPaddingContainer}>
                        <Text style={styles.orderText}>{component.order}</Text>
                      </View>
                      <View style={styles.textViewPaddingContainer}>
                        <Text style={styles.optionTextContainer}>{component.type}</Text>
                        <Text style={styles.subOptionTextContainer}>{component.title}</Text>
                      </View>
                      <View style={styles.editPaddingContainer}>
                        <TouchableOpacity
                          onPress={ () => editEntry(component)}>
                          <ImageBackground
                            source={require('../../assets/images/vectors/pencil.png')}
                            style={styles.iconContainer} />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.deletePaddingContainer}>
                        <TouchableOpacity
                          onPress={ () => { setFocusID(component.id); setVisible({ ...visible, deletion: true}); }}>
                          <ImageBackground
                            source={require('../../assets/images/vectors/trash.png')}
                            style={styles.iconContainer} />
                        </TouchableOpacity>
                      </View>
                  </View>)
            })
          }
        </View> 
      </ScrollView>

      <Dialog.Container visible={visible.deletion}>
        <Dialog.Title>Confirm Deletion</Dialog.Title>
        <Dialog.Description>
          Are you sure you want to delete this item?
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={() => { setVisible({ ...visible, deletion: false})} } />
        <Dialog.Button label="Ok" onPress={() => { removeItems(focusID); }} />
      </Dialog.Container>


      <Dialog.Container visible={visible.tbc}>
        <Dialog.Title>Coming soon...</Dialog.Title>
        <Dialog.Description>
          Edit Features are not availbale yet. Be patients :D
        </Dialog.Description>
        <Dialog.Button label="Ok" onPress={() => { setVisible({ ...visible, tbc: false})} } />
      </Dialog.Container>

      <View style={styles.submitButtonContainer}>
        <DButton 
          isDisabled={false} 
          title="Confirm" 
          onPress={ () => confirmList()}/>
      </View>
    </View>
    );
}

export default formConnector(FormCart);