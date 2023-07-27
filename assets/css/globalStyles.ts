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
    background_blue: {
        backgroundColor: '#7891D3'
    },
    shadow: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    }
});

export default globalStyles;