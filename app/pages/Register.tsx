import {
    Image,
    ImageBackground,
    KeyboardAvoidingView, Platform,
    ScrollView,
    StyleSheet,
    TextInput, TouchableOpacity
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import {Text, View} from '../../components/Themed';
import globalStyles from '../../assets/css/globalStyles';
import {SetStateAction, useState} from "react";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import ImageInput from "../../components/ImageInput";
import CustomAddressInput from "../../components/CustomAddressInput";

export default function RegisterScreen() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    // Functions to handle input changes
    const handleImagePress = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert('Permission to access camera roll is required!');
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!pickerResult.canceled) {
            const imageUri = pickerResult.assets[0].uri;
            setSelectedImage(imageUri as never);
        }
    };
    const handleNameChange = (text: SetStateAction<string>) => {
        setName(text);
    };
    const handleSurnameChange = (text: SetStateAction<string>) => {
        setSurname(text);
    };
    const handleEmailChange = (text: SetStateAction<string>) => {
        setEmail(text);
    };
    const handleAddressChange = (text: SetStateAction<string>) => {
        setAddress(text);
    };
    const handlePhoneChange = (text: SetStateAction<string>) => {
        setPhone(text);
    };

    const handlePasswordChange = (text: SetStateAction<string>) => {
        setPassword(text);
    };

    // Function to handle form submission
    const handleLogin = () => {
        //TODO Save it in firebase
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
                            <Text style={styles.title}>Регистрирај се</Text>

                            <ImageInput onPress={handleImagePress} imageUri={selectedImage}/>

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

                            <CustomAddressInput
                                value={address}
                                onChangeText={handleAddressChange}
                                infoMessage={"вашата адреса ќе биде видлива за корисниците"}
                            />

                            <TextInput
                                style={globalStyles.input_field}
                                placeholder="Телефон"
                                value={phone}
                                onChangeText={handlePhoneChange}
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
        flex: 1,
        backgroundColor: '#7891D3',
        marginVertical: 100,
        marginHorizontal: 35,
        borderRadius: 25,
    },
    content: {
        backgroundColor: 'transparent',
        alignItems: 'center'
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
