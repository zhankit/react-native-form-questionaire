import React from 'react';
import { Text, View, Image } from 'react-native'
import DButton from '../DButton';
import { styles } from './styles';


const CustomFallback = (props: { error: Error, resetError: Function }) => {

    const generaltext = 'The app ran into a problem and could not continue. We apologise for any inconvenience this has caused! Press the button below to restart the app and sign back in. Please contact us if this issue persists.'
    return (<View style={styles.mainContainer}>

        <View style={styles.paddingContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/vectors/warning.png')} style={styles.imageStyle} />
            </View>
            <Text style={styles.title}>Whoooops, Something happened!</Text>
            <Text style={styles.subTitle}>{generaltext}</Text>
            <Text style={styles.errorTitle}>{props.error.toString()}</Text>
        </View>
        <DButton isDisabled={false} type={'contrast'} onPress={props.resetError} title='Try again' />
    </View>
    )
}


export default CustomFallback;