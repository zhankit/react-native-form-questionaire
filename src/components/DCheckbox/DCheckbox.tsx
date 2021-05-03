import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types';
import { Checkbox } from 'react-native-paper';
import  { styles } from './styles';

interface DCheckboxProps {
  id: string;
  title: string;
  value: boolean;
  required: boolean;
  onFormUpdate: Function;
  validator: Function;
  validatorMessage?: string;
  placeholder?: string;
}

const DCheckbox = (props: DCheckboxProps) =>  {
  
  const {id, title, required, value, placeholder, validator, validatorMessage, onFormUpdate} = props;

  const [checkedValue, setcheckedValue] = useState(value);
  const [isValidate, setIsValidate] = useState(true);

  useEffect( () => {
    setIsValidate(validator(checkedValue));
    onFormUpdate(id, checkedValue, isValidate);
  }, [checkedValue, isValidate])
  
  return(
    <View style={styles.ContainerStyle}>
    
      <Checkbox.Android  
        key={id}
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
  value: PropTypes.bool,
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