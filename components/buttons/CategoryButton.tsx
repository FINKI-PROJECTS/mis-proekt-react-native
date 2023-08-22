import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import globalStyles from "../../assets/css/globalStyles";
import {useNavigation} from "expo-router";

export default function CategoryButton({ title, onPress }: {title: string, onPress: () => void}) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={[globalStyles.category_button, globalStyles.shadow]} onPress={onPress}>
            <Text style={[globalStyles.text_blue, styles.title]}>{title}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})