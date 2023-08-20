import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, StatusBar, SafeAreaView} from 'react-native';
import {View} from "./Themed";
import globalStyles from "../assets/css/globalStyles";

export default function Navbar() {

    const [userId, setUserId] = useState('');

    const handleOpenProfile = ({ userId }) => {
        //TODO take informations about user and navigate to profile page
    }

    return (
        <SafeAreaView style={[styles.container, globalStyles.background_blue]}>
            <View style={[styles.navContainer, globalStyles.background_blue]}>
                <Image source={require('../assets/images/logo_white.png')} style={styles.image} />
                <TouchableOpacity onPress={handleOpenProfile({userId})}>
                    <Image source={require('../assets/images/user_photo.png')} style={styles.logo} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    navContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 60,
        paddingTop: StatusBar.currentHeight
    },
    image: {
        width: 235,
        height: 50,
        marginVertical: 10
    },
    logo: {
        height: 36,
        width: 38
    }
});

