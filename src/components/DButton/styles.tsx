import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    btnTextStyle: {
      color: '#252a34',
      fontSize: 16,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      textAlign: 'center',
      alignContent: 'center'
    },
    buttonContainerStyle: {
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      display: 'flex'
    },
    BtnTextStyle: {
      color: 'white',
      fontSize: 16,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      textAlign: 'center',
      alignContent: 'center'
    },
    circleStyle: {
      width: 30, 
      height: 30, 
      borderRadius: 15, 
      borderColor: 'white', 
      borderWidth: 1, 
      justifyContent: 'center',
      marginLeft: 20
    },
    titleButtonStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
    },
    titleContainer: {
      justifyContent: 'center'
    }
})

export {styles};