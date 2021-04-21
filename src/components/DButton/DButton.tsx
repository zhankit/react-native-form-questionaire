import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native'
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  btnContainerStyle: {
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: '#1ebaba',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '10px',
    marginBottom: '10px',
    height: '50px',
  },
  btnTextStyle: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent: 'center'
  },
})

interface DButtonProps {
  title: string;
  loading: boolean;
  style: any;
  onPress: (event: GestureResponderEvent) => void
}

const DButton = ( props: DButtonProps) => {
  const { title, loading, onPress, style, ...rest } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> {title} </Text>
      </View>
    </TouchableOpacity>
  )
}

DButton.prototype = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default DButton;