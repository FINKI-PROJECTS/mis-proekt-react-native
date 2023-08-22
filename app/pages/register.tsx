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
import AddressInput from "../../components/AddressInput";
import BackButton from "../../components/buttons/BackButton";
import {useNavigation} from "expo-router";

export default function RegisterScreen() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const navigator = useNavigation();

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

    //TODO Save user in firebase
    const handleRegister = () => {

        navigator.navigate('pages/login' as never)
    };

    return (
        <KeyboardAvoidingView
            style={globalStyles.background_transparent}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ImageBackground source={require('../../assets/images/background.png')}
                             style={globalStyles.background}>
                <ScrollView contentContainerStyle={globalStyles.scroll_view}>
                    <BackButton title={"Назад"} source={require('../../assets/images/back-icon.png')}/>
                    <View style={globalStyles.container}>
                        <Image source={require('../../assets/images/simple-logo.png')} style={globalStyles.simple_logo}/>
                        <Text style={globalStyles.title}>Регистрирај се</Text>

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

                        <AddressInput
                            value={address}
                            onChangeText={handleAddressChange}
                            infoMessage={"Вашата адреса ќе биде видлива за регистрираните корисници на апликацијата!"}
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

                        <SecondaryButton title="Регистрирај се" onPress={handleRegister}/>
                    </View>
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({});
