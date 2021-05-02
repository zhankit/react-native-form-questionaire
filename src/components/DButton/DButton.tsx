import React from 'react'
import { Text, View, TouchableOpacity, GestureResponderEvent } from 'react-native'
import PropTypes from 'prop-types';
import { useTheme  } from 'react-native-paper';
import  { styles } from './styles';

interface DButtonProps {
  title: string;
  leftTitle: string;
  rightTitle: string;
  isDisabled: boolean;
  onPress: (event: GestureResponderEvent) => void
}

const DButton = ( props: DButtonProps) => {
  const { colors } = useTheme();
  const { title, leftTitle, rightTitle, isDisabled, onPress } = props;
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onPress} disabled={isDisabled}>
        <View style={{...styles.buttonContainerStyle, ...{backgroundColor: isDisabled ? '#C0C0C0' : colors.accent}}}>
          <View style={styles.titleButtonStyle}>
            <View style={styles.titleContainer}>
              <Text style={styles.BtnTextStyle}> {title} </Text>
            </View>
            { leftTitle.length > 0 && 
              <View style={styles.circleStyle}>
                <Text style={styles.BtnTextStyle}> {leftTitle} </Text>
              </View>}
          </View>
        </View>
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
  type: 'regular',
  leftTitle: '',
  rightTitle: ''
}

export default DButton;