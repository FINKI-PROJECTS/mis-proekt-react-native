import {Button, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import globalStyles from "../../assets/css/globalStyles";
import Navbar from "../../components/Navbar";
import BackButton from "../../components/buttons/BackButton";
import StarRating from "../../components/StarRating";
import MyProductsButton from "../../components/buttons/MyProductsButton";
import {useNavigation} from "expo-router";

export default function UserProfile( {userName, userSurname, userEmail, userAddress, userPhone, userPassword} :
    {
        userName: string
        userSurname: string
        userEmail: string
        userAddress: string
        userPhone: string
        userPassword: string
    }
) {

    const navigator = useNavigation()

    const handleNameChange = () => {}
    const handleSurnameChange = () => {}
    const handleEmailChange = () => {}
    const handleAddressChange = () => {}
    const handlePhoneChange = () => {}
    const handlePasswordChange = () => {}

    // TODO take the list of ratings per user and calculate the average
    const calculateRating = () => {
        return 2
    }

    // TODO using the user id, open his list of products
    const openUserProducts = () => {

        navigator.navigate('pages/user-list-of-products' as never)
    }

    return(
        <KeyboardAvoidingView
            style={globalStyles.background_transparent}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Navbar user={"user1"}/>
            <ImageBackground source={require('../../assets/images/background.png')}
                             style={globalStyles.background}>
                <ScrollView>
                    <Text style={[globalStyles.wide_title, styles.custom_width]}>МОЈ ПРОФИЛ</Text>
                    <BackButton title={"Назад"} source={require('../../assets/images/back-icon.png')}/>
                    <View style={globalStyles.container}>
                        <TextInput style={globalStyles.input_field}
                                   placeholder={userName}
                                   value={userName}
                                   onChangeText={handleNameChange}/>
                        <TextInput style={globalStyles.input_field}
                                   placeholder={userSurname}
                                   value={userSurname}
                                   onChangeText={handleSurnameChange}/>
                        <TextInput style={globalStyles.input_field}
                                   placeholder={userEmail}
                                   value={userEmail}
                                   onChangeText={handleEmailChange}/>
                        <TextInput style={globalStyles.input_field}
                                   placeholder={userAddress}
                                   value={userAddress}
                                   onChangeText={handleAddressChange}/>
                        <TextInput style={globalStyles.input_field}
                                   placeholder={userPhone}
                                   value={userPhone}
                                   onChangeText={handlePhoneChange}/>
                        <TextInput style={globalStyles.input_field}
                                   placeholder={userPassword}
                                   value={userPassword}
                                   onChangeText={handlePasswordChange}/>
                        <MyProductsButton onPress={openUserProducts}/>
                        <Text style={styles.text}>Просечен рејтинг:</Text>
                        <StarRating rating={calculateRating} isDisabled={true}/>
                    </View>
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    two_buttons: {
        paddingVertical: 20,
        width: 250,
        flexGrow: 1,
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    text: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'white'
    },
})