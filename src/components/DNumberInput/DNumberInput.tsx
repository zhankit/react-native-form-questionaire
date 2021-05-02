import React, { useEffect, useState } from 'react'
import { TextInput, Text, View } from 'react-native'
import PropTypes from 'prop-types';
import  { styles } from './styles';

interface DNumberInputProps {
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

const DNumberInput = (props: DNumberInputProps) =>  {
  
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
        value={textValue}
        onChangeText={(text) => { setTextValue(text)}}
        selectionColor={'blue'}
        keyboardType="numeric"
        style={[styles.TextInputStyle]}
        placeholder={placeholder} 
        />  
      { !isValidate && (<Text style={{color : '#e00000'}}> {validatorMessage} </Text>) }
    </View>    
  );

}

DNumberInput.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};

DNumberInput.defaultProps = {
  required: true,
  validator: (text: string) => { return !isNaN(Number(text)) },
  validatorMessage: 'Input must be number!'
};

export default DNumberInput;