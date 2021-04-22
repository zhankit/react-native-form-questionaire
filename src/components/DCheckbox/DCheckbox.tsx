import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'
import PropTypes from 'prop-types';
import { colors } from '@material-ui/core';
import { Checkbox } from 'react-native-paper';

const styles = StyleSheet.create({
  ContainerStyle: {
    flexDirection: 'row',
    // color: 'black',
    // textDecorationColor:'#3CAEA3',
    // marginHorizontal: '20px',
    // marginTop: '10px',
    // height: '70px',
  },
  TextStyle:{
    fontWeight: "600"
  },
  TextInputStyle: {
  },
})

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
    
      <Checkbox 
        status={checkedValue ? 'checked' : 'unchecked'}
        color={'black'}
        uncheckedColor={'black'}
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
  value: false,
  validator: () => {},
  validatorMessage: ''
};

export default DCheckbox