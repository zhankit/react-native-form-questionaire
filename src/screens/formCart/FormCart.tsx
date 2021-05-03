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


  const [errorText, setErrorText] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [focusID, setFocusID] = React.useState('');

  const confirmList = () => {
    navigation.navigate('Form', { title: "Custom Form"});
  };

  const removeItems = (index: String) => {
    
    props.removeItems(index);
    setVisible(false);    
    if (props.state.authReducer.forms.length == 0 ) {
      navigation.goBack();
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
                          onPress={ () => {}}>
                          <ImageBackground
                            source={require('../../assets/images/vectors/pencil.png')}
                            style={styles.iconContainer} />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.deletePaddingContainer}>
                        <TouchableOpacity
                          onPress={ () => { setFocusID(component.id); setVisible(true); }}>
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

      <Dialog.Container visible={visible}>
        <Dialog.Title>Confirm Deletion</Dialog.Title>
        <Dialog.Description>
          Are you sure you want to delete this item?
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={() => { setVisible(false)} } />
        <Dialog.Button label="Ok" onPress={() => { removeItems(focusID); }} />
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