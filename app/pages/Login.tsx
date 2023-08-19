import {
    Button,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput, TouchableOpacity
} from 'react-native';

import {Text, View} from '../../components/Themed';
import globalStyles from '../../assets/css/globalStyles';
import PrimaryButton from "../../components/buttons/PrimaryButton";
import {SetStateAction, useState} from "react";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import {useNavigation} from "expo-router";

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    // Function to handle input changes
    const handleEmailChange = (text: SetStateAction<string>) => {
        setEmail(text);
    };

    const handlePasswordChange = (text: SetStateAction<string>) => {
        setPassword(text);
    };

    // Function to handle form submission
    const handleLogin = () => {
        // Do something with the input value, e.g., submit it to a server
        console.log('Email:', email);
        console.log('Password:', password);
        const name = "pages/catalogue"
        navigation.navigate(name as never);
    };

    return (
        <KeyboardAvoidingView
            style={globalStyles.background_transparent}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ImageBackground source={require('../../assets/images/background.png')}
                             style={globalStyles.background}>
                <ScrollView contentContainerStyle={globalStyles.scrollView}>
                    <View style={styles.container}>
                        <View style={styles.content}>
                            <Image source={require('../../assets/images/simple-logo.png')} style={styles.logo}/>
                            <Text style={globalStyles.title}>Најави се</Text>

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

                        <TouchableOpacity onPress={handleLogin}>
                            <SecondaryButton title="Најави се"/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7891D3',
        marginVertical: 20,
        marginHorizontal: 35,
        borderRadius: 25
    },
    content: {
        backgroundColor: 'transparent',
        alignItems: 'center'
    },
    logo: {
        width: 125,
        height: 125,
        resizeMode: 'contain',
        marginVertical: 30,
    }
});
