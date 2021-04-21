import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'
import PropTypes from 'prop-types';
import { colors } from '@material-ui/core';
import { Checkbox } from 'react-native-paper';

const styles = StyleSheet.create({
  ContainerStyle: {
    flexDirection: 'row',
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

interface DCheckboxProps {
  id: string;
  index: number;
  title: string;
  value: any;
  required: boolean;
  onFormUpdate: Function;
  validator: Function;
  options: any;
  validatorMessage?: string;
  placeholder?: string;
}

const DCheckbox = (props: DCheckboxProps) =>  {
  
  const {id, title, index, required, value, placeholder, options, validator, validatorMessage, onFormUpdate} = props;

  const [checkedValue, setcheckedValue] = useState(false);
  const [isValidate, setIsValidate] = useState(true);

  useEffect( () => {
    onFormUpdate(index, value);
    setIsValidate(validator(checkedValue));
  }, [checkedValue, isValidate])
  
  return(
    <View style={styles.ContainerStyle}>
    
      <Checkbox 
        status={checkedValue ? 'checked' : 'unchecked'}
        color={'black'}
        onPress={() => setcheckedValue(!checkedValue)}
        />       
        <Text style={styles.TextStyle}>{title}</Text> 
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
  validator: () => {},
  validatorMessage: ''
};

export default DCheckbox