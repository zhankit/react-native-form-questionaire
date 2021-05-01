import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native'
import PropTypes from 'prop-types';
import { useTheme  } from 'react-native-paper';
import { ButtonProps } from '@material-ui/core';

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
    justifyContent: 'space-evenly',
    height: 50,
    display: 'flex'
  },
  contrastBtnTextStyle: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent: 'center'
  },
  leftButtonStyle : {
    flex: 1
  },
  titleButtonStyle : {
    flex: 1
  },
  rightButtonStyle : {
    flex: 1
  }
})

interface DButtonProps {
  title: string;
  leftTitle: string;
  rightTitle: string;
  loading: boolean;
  type?: string;
  isDisabled: boolean;
  style?: ButtonProps;
  onPress: (event: GestureResponderEvent) => void
}


const DButton = ( props: DButtonProps) => {
  const { colors } = useTheme();
  const { title, leftTitle, rightTitle, isDisabled, type, loading, onPress, style, ...rest } = props;

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onPress} disabled={isDisabled}>
        <View style={{...styles.buttonContainerStyle, ...{backgroundColor: colors.accent}}}>
          <View style={styles.leftButtonStyle}>
           <Text style={styles.contrastBtnTextStyle}> {leftTitle} </Text>
          </View>
          <View style={styles.titleButtonStyle}>
            <Text style={styles.contrastBtnTextStyle}> {title} </Text>
          </View>
          <View style={styles.rightButtonStyle}>
            <Text style={styles.contrastBtnTextStyle}> {rightTitle} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
    
  )
}

DButton.prototype = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  type: PropTypes.oneOf([
    'regular', 'contrast'
  ]),
  onPress: PropTypes.func.isRequired,
}

DButton.defaultProps = {
  type: 'regular'
}

export default DButton;