import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import globalStyles from '../../assets/css/globalStyles';

export default function SecondaryButton({ title , onPress}: {title: string, onPress: () => void;}) {

    return (
        <TouchableOpacity style={[globalStyles.secondary_button, globalStyles.shadow]} onPress={onPress}>
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