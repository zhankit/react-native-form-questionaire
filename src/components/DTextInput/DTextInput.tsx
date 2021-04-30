import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'
import PropTypes from 'prop-types';
import { colors } from '@material-ui/core';

const styles = StyleSheet.create({
  ContainerStyle: {
  },
  TextStyle:{
    fontWeight: "600"
  },
  TextInputStyle: {
    color: 'black',    
    textDecorationColor:'#3CAEA3',
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
  }
})

interface DTextInputProps {
  id: string;
  index?: number;
  title: string;
  value: string;
  required?: boolean;
  onFormUpdate: Function;
  validator: Function;
  validatorMessage?: string;
  placeholder?: string;
}

const DTextInput = (props: DTextInputProps) =>  {
  
  const {id, title, index, required, value, placeholder, validator, validatorMessage, onFormUpdate} = props;

  const [textValue, setTextValue] = useState(value);
  const [isValidate, setIsValidate] = useState(true);

  useEffect( () => {
    
    setIsValidate(validator(textValue));
    onFormUpdate(index, textValue, isValidate);

  }, [textValue, isValidate])
  
  return(
    <View style={styles.ContainerStyle}>
      <Text style={styles.TextStyle}>{title}{ required? <Text style={{color : '#e00000'}}> *</Text>: ''} </Text> 
      <TextInput 
        key={id}
        value={textValue}
        onChangeText={(text) => { setTextValue(text)}}
        selectionColor={'blue'}
        style={[styles.TextInputStyle]}
        placeholder={placeholder} 
        />  
      { !isValidate && (<Text style={{color : '#e00000'}}> {validatorMessage} </Text>) }
    </View>    
  );

}

DTextInput.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};

DTextInput.defaultProps = {
  required: true,
  index: -1,
  validator: (value: any) => { return String(value).length > 0 },
  validatorMessage: 'Fields Must be filled'
};

export default DTextInput