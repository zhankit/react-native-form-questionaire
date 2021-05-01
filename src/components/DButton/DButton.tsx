import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTheme  } from 'react-native-paper';
import { ButtonProps } from '@material-ui/core';

const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  btnContainerStyle: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#08d9d6',
    marginTop: 15,
    marginBottom: 5,
    height: 50,
  },
  btnTextStyle: {
    color: '#252a34',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent: 'center'
  },
  contrastBtnContainerStyle: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 5,
    height: 50,
  },
  contrastBtnTextStyle: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent: 'center'
  },
  leftBtnTextStyle : {
    color: '#f4eee8',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  subBtnContainerStyle : {
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
        { type == 'regular' && 
        <View style={styles.btnContainerStyle}>
          <View style={styles.subBtnContainerStyle}>
           <Text style={styles.btnTextStyle}> {leftTitle} </Text>
          </View>
          <View style={styles.subBtnContainerStyle}>
            <Text style={styles.btnTextStyle}> {title} </Text>
          </View>
          <View style={styles.subBtnContainerStyle}>
            <Text style={styles.btnTextStyle}> {rightTitle} </Text>
          </View>
        </View>}
        { type == 'contrast' && 
        <View style={{...styles.contrastBtnContainerStyle, ...{backgroundColor: colors.accent}}}>
          <View style={styles.subBtnContainerStyle}>
           <Text style={styles.contrastBtnTextStyle}> {leftTitle} </Text>
          </View>
          <View style={styles.subBtnContainerStyle}>
            <Text style={styles.contrastBtnTextStyle}> {title} </Text>
          </View>
          <View style={styles.subBtnContainerStyle}>
            <Text style={styles.contrastBtnTextStyle}> {rightTitle} </Text>
          </View>
        </View>}
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