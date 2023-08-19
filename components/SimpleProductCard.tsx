import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "expo-router";
import globalStyles from "../assets/css/globalStyles";

interface SimpleProductCardProps {
    name: string,
    source: string
}
const SimpleProductCard: React.FC<SimpleProductCardProps> = ({ name, source }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={[globalStyles.simpleProduct]} onPress={() => navigation.navigate(name as never)}>
            <Image source={source} style={globalStyles.clothImage}/>
            <Text style={[globalStyles.text_white, styles.title]}>
                /dynamic data/ ден.
            </Text>
        </TouchableOpacity>
    );
};

export default SimpleProductCard;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20
    }
})