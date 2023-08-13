import {
    Button,
    Image,
    ImageBackground,
    ImageBase,
    KeyboardAvoidingView, Platform,
    ScrollView,
    StyleSheet,
    TextInput
} from 'react-native';

import {Text, View} from '../../components/Themed';
import globalStyles from '../../assets/css/globalStyles';
import {useState} from "react";
import SecondaryButton from "../../components/SecondaryButton";

export default function RegisterScreen() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle input changes
    const handleNameChange = (text) => {
        setName(text);
    };
    const handleSurnameChange = (text) => {
        setSurname(text);
    };
    const handleEmailChange = (text) => {
        setEmail(text);
    };
    const handleAddressChange = (text) => {
        setAddress(text);
    };
    const handlePhoneChange = (text) => {
        setPhone(text);
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
                            <Text style={styles.title}>Регистрирај се</Text>

                            <TextInput
                                style={globalStyles.input_field}
                                placeholder="Име"
                                value={name}
                                onChangeText={handleNameChange}
                            />

                            <TextInput
                                style={globalStyles.input_field}
                                placeholder="Презиме"
                                value={surname}
                                onChangeText={handleSurnameChange}
                            />

                            <TextInput
                                style={globalStyles.input_field}
                                placeholder="Емаил"
                                value={email}
                                onChangeText={handleEmailChange}
                            />

                            <TextInput
                                style={globalStyles.input_field}
                                placeholder="Адреса"
                                value={address}
                                onChangeText={handleAddressChange}
                            />

                            <TextInput
                                style={globalStyles.input_field}
                                placeholder="Телефон"
                                value={phone}
                                onChangeText={handlePhoneChange}
                            />

                            {/*image input*/}

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
        marginVertical: 50,
        marginHorizontal: 35,
        borderRadius: 25,
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
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginVertical: 20
    }
});
