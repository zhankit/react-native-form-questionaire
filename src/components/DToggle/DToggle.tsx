import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, Text, View, Switch } from 'react-native'
import PropTypes from 'prop-types';
import { colors } from '@material-ui/core';
import Toggle from 'react-toggle';
// import './style.css' // for ES6 modules

const styles = StyleSheet.create({
  ContainerStyle: {
    flexDirection: 'row',
    color: 'black',
    textDecorationColor:'#3CAEA3',
    // marginHorizontal: '20px',
    // marginTop: '10px',
    // height: '70px',
  },
  TextStyle:{
    // marginLeft: '20px',
    // fontWeight: "600"
  },
  TextInputStyle: {
    color: 'black',    
    textDecorationColor:'#3CAEA3',
    borderColor: 'black',
    borderWidth: 1,
    // marginTop: '3px',
    // paddingHorizontal: '10px',
    // height: '50px',
  },
})

interface DToggleProps {
  id: string;
  title: string;
  value: any;
  required: boolean;
  index?: number;
  validator: Function;
  onFormUpdate: Function;
  validatorMessage?: string;
  placeholder?: string;
}

const DToggle = (props: DToggleProps) =>  {
  
  const { id, title, index, required, value, placeholder, validator, validatorMessage, onFormUpdate} = props;

  const [toggleValue, settoggleValue] = useState(false);
  const [isValidate, setIsValidate] = useState(true);

  useEffect( () => {
    
    onFormUpdate(index, toggleValue);
    setIsValidate(validator(toggleValue));

  }, [toggleValue, isValidate])
  
  return(
    <View style={styles.ContainerStyle}>
      <Switch 
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={toggleValue ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        value={toggleValue}
        onValueChange={() => settoggleValue(!toggleValue)}
        />  
      <Text style={styles.TextStyle}>{title}</Text> 
    </View>    
  );

}

DToggle.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.any
};

DToggle.defaultProps = {
  required: true,
  validator: () => {},
  validatorMessage: ''
};

export default DToggle