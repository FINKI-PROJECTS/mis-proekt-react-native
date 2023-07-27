import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {View} from "./Themed";

// @ts-ignore
const CustomHeaderIcon = ({ source }) => {
    return (
        <View style={styles.container}>
            <Image source={source} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    image: {
        justifyContent: "center",
        width: 270,
        height: 55,
        marginVertical: 25,
        marginTop: 50
    }
});

export default CustomHeaderIcon;
