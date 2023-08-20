import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import globalStyles from "../../assets/css/globalStyles";
import {useNavigation} from "expo-router";

export default function CategoryButton({ name, title }: {name: string, title: string}) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={[globalStyles.categoryButton]} onPress={() => navigation.navigate(name as never)}>
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