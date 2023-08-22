import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import globalStyles from "../assets/css/globalStyles";
import React from "react";
// @ts-ignore
import Icon from "react-native-vector-icons/Ionicons";
import {useNavigation} from "expo-router";

export default function UserProductCard({ productId }: { productId: string }) {

    const navigator = useNavigation();

    // TODO using the productId open the particular product
    const openCreateEditProduct = () => {

        navigator.navigate('pages/create-edit-product' as never)
    }

    return(
        <View style={[globalStyles.white_container, styles.row]}>
            <Image source={require('../assets/images/example-cloth.png')} style={styles.image_product}/>
            <Text style={styles.text}>Маичка</Text>
            <TouchableOpacity onPress={openCreateEditProduct}>
                <Icon name={'pencil'} size={25} color={"#7891D3"}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.margin}>
                <Icon name={'trash'} size={25} color={"#7891D3"}/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    image_product: {
        width: 100,
        height: 100,
        borderRadius: 20
    },
    row: {
        marginVertical: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    text: {
        fontSize: 20
    },
    margin: {
        marginEnd: 10
    }
})