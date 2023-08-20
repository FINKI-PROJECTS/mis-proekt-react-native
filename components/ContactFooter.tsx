import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import globalStyles from "../assets/css/globalStyles";

export default function ContactFooter() {
    return (
        <TouchableOpacity style={[styles.container, globalStyles.background_blue]}>
            <Text style={styles.text}>Контактирај продавач</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        borderTopColor: 'grey',
        borderTopWidth: 1
    },
    text: {
        alignSelf: 'center',
        marginVertical: 20,
        color: 'white',
        fontSize: 20

    }
})