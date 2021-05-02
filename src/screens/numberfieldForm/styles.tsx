import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30,
        marginHorizontal: 20
    },
    inputForm: { 
        paddingHorizontal: 40, 
        paddingTop: 40
    },
    buttonView: {
        backgroundColor: 'white',
        paddingBottom: 20,
        marginBottom: 20,
        marginHorizontal: 20,
        borderBottomLeftRadius: 30, 
        borderBottomRightRadius: 30,
    },
    title: {
        fontWeight: "bold", 
        fontSize: 24, 
        textAlign: 'justify', 
        color: 'black', 
        marginRight: 20
    },
    subTitle: {
        fontWeight: "400", 
        fontSize: 20, 
        textAlign: 'left', 
        color: 'black', 
        marginRight: 10
    },
    headerContainer: {
        flexDirection: 'row', 
        padding: 20 
    },
    imageContainer: {
        borderRadius: 40, 
        alignItems: 'center',
        alignContent: 'center', 
        justifyContent: 'center', 
        width: 80, 
        height: 80
    },
    imageStyle: {
        width: 60,
        height: 60
    }
});

export { styles };