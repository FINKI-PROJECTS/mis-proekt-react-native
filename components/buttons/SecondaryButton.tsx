import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import globalStyles from '../../assets/css/globalStyles';
import {useNavigation} from "expo-router";

interface SecondaryButtonProps {
    title: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ title }) => {

    return (
        <TouchableOpacity style={[globalStyles.secondary_button, globalStyles.shadow]}>
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