import * as React from 'react';
import { ScrollView, StyleSheet,Image, ImageBackground } from 'react-native';
import { Text, View } from '../../components/Themed/Themed';
import { useNavigation } from '@react-navigation/native';
import DButton from '../../components/DButton';
import { useTheme } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FormReducersProps, formConnector } from '../../redux/actions/actions';
import { styles } from './styles';
import { Icon } from 'react-native-elements'
import { Question } from '../../interfaces/interfaces';

const FormCart = (props: FormReducersProps) => {

  const { colors } = useTheme();
  const navigation = useNavigation();
  const headerText = 'You may review all the components that are added earlier before checkout.';
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
            props.state.authReducer.forms.map( (component: Question, index) => {
              console.log('itesm', component);
              return (
                  <View style={styles.optionViewContainer}>
                      <View style={styles.optionViewPaddingContainer}>
                        <Text style={styles.orderText}>{index + 1}</Text>
                      </View>
                      <View style={styles.textViewPaddingContainer}>
                        <Text style={styles.optionTextContainer}>{component.type}</Text>
                        <Text style={styles.subOptionTextContainer}>{component.title}</Text>
                      </View>
                      <View style={styles.editPaddingContainer}>
                        <TouchableOpacity>
                          <ImageBackground
                            source={require('../../assets/images/vectors/pencil.png')}
                            style={styles.iconContainer} />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.deletePaddingContainer}>
                        <TouchableOpacity>
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

      <View style={styles.submitButtonContainer}>
        <DButton 
          isDisabled={false} 
          title="Confirm" 
          onPress={ () => addItem()}/>
      </View>
    </View>
    );
}

export default formConnector(FormCart);