import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import globalStyles from '../assets/css/globalStyles';
import {useNavigation} from "expo-router";

// @ts-ignore
const PrimaryButton = ( {title, name} ) => {

    const navigation = useNavigation();

    const handlePress = () => {
        // Navigate to the new screen
        navigation.navigate(name);
    };

    return (
        <TouchableOpacity style={[globalStyles.primary_button, globalStyles.shadow]} onPress={handlePress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    },
});

export default PrimaryButton;