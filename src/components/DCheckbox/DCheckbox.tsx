import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types';
import { Checkbox } from 'react-native-paper';
import  { styles } from './styles';

interface DCheckboxProps {
  id: string;
  index: number;
  title: string;
  value: boolean;
  required: boolean;
  onFormUpdate: Function;
  validator: Function;
  options: any;
  validatorMessage?: string;
  placeholder?: string;
}

const DCheckbox = (props: DCheckboxProps) =>  {
  
  const {id, title, index, required, value, placeholder, options, validator, validatorMessage, onFormUpdate} = props;

  const [checkedValue, setcheckedValue] = useState(value);
  const [isValidate, setIsValidate] = useState(true);

  useEffect( () => {
    onFormUpdate(index, checkedValue);
    setIsValidate(validator(checkedValue));
  }, [checkedValue, isValidate])
  
  return(
    <View style={styles.ContainerStyle}>
    
      <Checkbox.Android  
        status={checkedValue ? 'checked' : 'unchecked'}
        color={'#0D3B66'}
        uncheckedColor={'#0D3B66'}
        onPress={() => setcheckedValue(!checkedValue)}
      />
      <View style={styles.textContainer}>
        <Text style={styles.TextStyle}>{title}</Text> 
      </View>  
    </View>    
  );

}

DCheckbox.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.any
};

DCheckbox.defaultProps = {
  required: true,
  value: false,
  validator: () => {},
  validatorMessage: ''
};

export default DCheckbox