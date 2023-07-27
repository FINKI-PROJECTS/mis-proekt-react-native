import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import globalStyles from '../assets/css/globalStyles';

// @ts-ignore
const PrimaryButton = ( {title} ) => {
    return (
        <TouchableOpacity style={[globalStyles.primary_button, globalStyles.shadow]}>
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