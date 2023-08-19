import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import globalStyles from "../../assets/css/globalStyles";
import {useNavigation} from "expo-router";

interface CustomBackButtonProps {
    title: string,
    source: string
}
const CustomBackButton: React.FC<CustomBackButtonProps> = ({ title, source }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={[globalStyles.backButton, globalStyles.shadow, styles.margin]} onPress={() => navigation.goBack()}>
            <Image source={source} style={styles.backIcon}/>
            <Text style={[globalStyles.text_white, styles.title]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomBackButton;

const styles = StyleSheet.create({
    margin: {
       marginBottom: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    backIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 16,
        width: 24
    }
})