import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'
import PropTypes from 'prop-types';
import { colors } from '@material-ui/core';

const styles = StyleSheet.create({
  ContainerStyle: {
    color: 'black',
    // overlayColor: 'black',
    outlineWidth: 1,
    outlineColor:'#3CAEA3',
    overlayColor: 'blue',
    marginHorizontal: '20px',
    marginTop: '10px',
    height: '70px',
  },
  TextStyle:{
    fontWeight: "600"
  },
  TextInputStyle: {
    color: 'black',
    // overlayColor: 'black',
    outlineWidth: 1,
    outlineColor:'#3CAEA3',
    overlayColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: '3px',
    paddingHorizontal: '10px',
    height: '50px',
    tintColor: 'black'
  },
})

interface DTextInputProps {
  id: string;
  index: number;
  title: string;
  value: string;
  required: boolean;
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
    if (index >= 0 ) onFormUpdate(index, textValue);
    else  onFormUpdate(textValue);
    setIsValidate(validator(textValue));
  }, [textValue, isValidate])
  
  return(
    <View style={styles.ContainerStyle}>
      <Text style={styles.TextStyle}>{title}{ required? <Text style={{color : '#e00000'}}> *</Text>: ''} </Text> 
    
      <TextInput 
        key={id}
        value={textValue}
        onChange={(e) => { setTextValue(e.target.value)}}
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
  validator: (value: any) => { return String(value).length > 0 },
  validatorMessage: 'Fields Must be filled'
};

export default DTextInput