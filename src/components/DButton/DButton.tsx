import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native'
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  btnContainerStyle: {
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: '#1463A9',
    marginTop: 15,
    marginBottom: 5,
    height: 50,
  },
  btnTextStyle: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent: 'center'
  },
  contrastBtnContainerStyle: {
    borderRadius: 10,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: '#1463A9',
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 5,
    height: 50,
  },
  contrastBtnTextStyle: {
    color: '#1463A9',
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
  type?: string;
  style?: any;
  onPress: (event: GestureResponderEvent) => void
}

const DButton = ( props: DButtonProps) => {
  const { title, type, loading, onPress, style, ...rest } = props;
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onPress}>
        { type == 'regular' && <View style={(styles.btnContainerStyle)}>
          <Text style={styles.btnTextStyle}> {title} </Text>
        </View>}
        { type == 'contrast' && <View style={(styles.contrastBtnContainerStyle)}>
          <Text style={styles.contrastBtnTextStyle}> {title} </Text>
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