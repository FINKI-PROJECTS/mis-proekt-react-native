import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import globalStyles from '../../assets/css/globalStyles';

export default function SecondaryButton({ title }: {title: string}) {

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