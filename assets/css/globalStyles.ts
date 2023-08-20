import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#7891D3',
        marginVertical: 20,
        paddingVertical: 20,
        marginHorizontal: 35,
        borderRadius: 25,
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
    categoryButton: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 13,
        backgroundColor: 'white',
        padding: 8,
        width: 250,
        height: 50,
        borderRadius: 10
    },
    backButton: {
        width: 105,
        height: 35,
        marginStart: 35,
        marginTop: 45,
        borderRadius: 20,
        backgroundColor: '#7891D3',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    background: {
        flex: 1,
        resizeMode: 'contain',
    },
    background_blue: {
        backgroundColor: '#7891D3'
    },
    background_white: {
        backgroundColor: 'white'
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
        alignSelf: 'center'
    },
    background_transparent: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 40,
        textAlign: 'center'
    },
    clothImage: {
        width: 270,
        height: 270,
        marginTop: 5,
        borderRadius: 20
    },
    clothDescription: {
        paddingVertical: 20,
        width: 250,
        flexGrow: 1,
        justifyContent: 'space-between',
        flexDirection: "row"
    },
    simpleProduct: {
        margin: 20,
        backgroundColor: '#7891D3',
        paddingVertical: 25,
        marginHorizontal: 35,
        borderRadius: 25,
        alignItems: 'center'
    },
    simpleLogo: {
        alignSelf: 'center',
        width: 125,
        height: 125,
        resizeMode: 'contain',
        marginVertical: 30,
    }
});

export default globalStyles;