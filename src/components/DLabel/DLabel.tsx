import * as React from 'react';
import { Text } from 'react-native'
import PropTypes from 'prop-types';
import { styles } from './styles';
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