import {Platform, StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text_white: {
        color: 'white',
    },
    text_blue: {
        color: '#7891D3'
    },
    primary_button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        backgroundColor: '#7891D3',
        padding: 8,
        width: 250,
        height: 50,
        borderRadius: 10
    },
    secondary_button: {
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 30,
        backgroundColor: '#7891D3',
        padding: 8,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 2,
        width: '70%'
    },
    background_blue: {
        backgroundColor: '#7891D3'
    },
    shadow: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    input_field: {
        borderRadius: 20,
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 10,
        fontSize: 18,
        backgroundColor: 'white',
        color: '#7891D3',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    keyboard: {
        flex: 1,
        backgroundColor: 'transparent'
    }
});

export default globalStyles;