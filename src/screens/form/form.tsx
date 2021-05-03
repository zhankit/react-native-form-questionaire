import * as React from 'react';
import { ScrollView, Image } from 'react-native';
import { Text, View } from '../../components/Themed/Themed';
import { useNavigation } from '@react-navigation/native';
import DButton from '../../components/DButton';
import Dialog from "react-native-dialog";
import { useTheme } from 'react-native-paper';
import DTextInput from '../../components/DTextInput';
import { FormReducersProps, formConnector } from '../../redux/actions/actions';
import  { styles } from './styles';
import DForm from '../../components/DForm'

const formA = (props: FormReducersProps) => {
  // const { title, questions } = props.route.params;

  const { colors } = useTheme();
  const navigation = useNavigation();
  const headerText = 'Voila! You can now edit the form. Please remember that you can always edit the form and come back again';
  const [isValidated, setIsValidated] = React.useState(true);
  const [errorText, setErrorText] = React.useState('');
  const [visible, setVisible] = React.useState(false);


  return (      
      <View style={{...styles.container, ...{backgroundColor: colors.primary}}}>
        <View style={{...styles.headerContainer, ...{backgroundColor: colors.primary}}}>
          <View style={{...styles.imageContainer, ...{backgroundColor: colors.primary}}}>
            <Image source={require('../../assets/images/vectors/clipboard.png')} style={styles.imageStyle} />
          </View>
          <View style={{ paddingHorizontal: 20, backgroundColor: colors.primary,  flexShrink: 1}}>
            <Text style={styles.title}>Form Input</Text>
            <Text style={styles.subTitle}>{headerText}</Text>
          </View>
        </View>
  
        <ScrollView style={styles.scrollView}>
          <DForm
            title=''
            questions={props.state.authReducer.forms}>
          </DForm>
        </ScrollView>
        
        <View style={styles.buttonView}>
          <DButton 
            title="Add" 
            type={'contrast'} 
            isDisabled={!isValidated}
            onPress={ () => submitForm()}/>
        </View>
  
  
        <Dialog.Container visible={visible}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Description>
            {errorText}
          </Dialog.Description>
          <Dialog.Button label="Okay" onPress={() => { setVisible(false); }} />
        </Dialog.Container>
  
      </View>
  );
}

export default formConnector(formA);