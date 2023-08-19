import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import globalStyles from '../../assets/css/globalStyles';
import {useNavigation} from "expo-router";

interface PrimaryButtonProps {
    title: string;
    name: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, name }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={[globalStyles.primary_button, globalStyles.shadow]} onPress={() => {navigation.navigate(name as never)}}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
});

export default PrimaryButton;