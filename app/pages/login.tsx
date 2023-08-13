import {
    Button,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput
} from 'react-native';

import {Text, View} from '../../components/Themed';
import globalStyles from '../../assets/css/globalStyles';
import PrimaryButton from "../../components/PrimaryButton";
import {useState} from "react";
import SecondaryButton from "../../components/SecondaryButton";

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle input changes
    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    // Function to handle form submission
    const handleLogin = () => {
        // Do something with the input value, e.g., submit it to a server
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <KeyboardAvoidingView
            style={globalStyles.keyboard}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ImageBackground source={require('../../assets/images/background.png')}
                             style={styles.background}>
                <ScrollView style={styles.background}>
                    <View style={styles.container}>
                        <View style={styles.content}>
                            <Image source={require('../../assets/images/simple-logo.png')} style={styles.logo}/>
                            <Text style={styles.title}>Најави се</Text>

                            <TextInput
                                style={globalStyles.input_field}
                                placeholder="Емаил"
                                value={email}
                                onChangeText={handleEmailChange}
                            />

                            <TextInput
                                style={globalStyles.input_field}
                                placeholder="Лозинка"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={handlePasswordChange}
                            />
                        </View>

                        <SecondaryButton title="Најави се" onPress={handleLogin}/>
                    </View>
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7891D3',
        marginVertical: 20,
        marginHorizontal: 35,
        borderRadius: 25
    },
    content: {
        backgroundColor: 'transparent',
        alignItems: 'center'
    },
    background: {
        flex: 1,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 40,
    },
    logo: {
        width: 125,
        height: 125,
        resizeMode: 'contain',
        marginVertical: 30,
    }
});
