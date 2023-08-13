import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import globalStyles from '../assets/css/globalStyles';
import {useNavigation} from "expo-router";

// @ts-ignore
const SecondaryButton = ( {title, name} ) => {

    const navigation = useNavigation();

    const handlePress = () => {
        // Navigate to the new screen
        navigation.navigate(name);
    };

    return (
        <TouchableOpacity style={[globalStyles.secondary_button, globalStyles.shadow]} onPress={handlePress}>
            <Text style={[styles.buttonText, globalStyles.text_white]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
});

export default SecondaryButton;