import * as React from 'react';
import { StyleSheet, TextInput, Text, View, TextProps } from 'react-native'
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  TextStyle:{
    paddingHorizontal: '20px',
  },
})

interface DLabelProps {
  text: string;
}

const DLabel = (props: DLabelProps) => {
  const { text, ...rest } = props;

  return (
    <Text {...props} style={[styles.TextStyle]} >
      {text}
    </Text>
    );
}

DLabel.propTypes = {
  text: PropTypes.string,
};

export default DLabel