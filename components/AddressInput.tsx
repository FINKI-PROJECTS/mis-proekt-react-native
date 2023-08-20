import React, {SetStateAction, useEffect, useRef, useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet, Text, TouchableWithoutFeedback, Modal} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyles from "../assets/css/globalStyles"; // Import an icon from your chosen icon library


export default function AddressInput({value, onChangeText, infoMessage}: {
    value: string;
    onChangeText: (text: SetStateAction<string>) => void;
    infoMessage: string;
})
{

    const [showInfo, setShowInfo] = useState(false);

    const handleInfoPress = () => {
        setShowInfo(!showInfo);
    };

    const handleOutsidePress = () => {
        setShowInfo(false);
    };

    return (
        <View style={[globalStyles.input_field, styles.container]}>
            <TextInput
                style={styles.input}
                placeholder={'Адреса'}
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity style={styles.infoIcon} onPress={handleInfoPress}>
                <Icon name="info-circle" size={20} color="#7891D3"/>
            </TouchableOpacity>
            <Modal visible={showInfo} transparent animationType={"fade"}>
                <TouchableWithoutFeedback onPress={handleOutsidePress}>
                    <View style={styles.overlay}>
                        <View style={styles.infoTooltip}>
                            <Text>{infoMessage}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        color: '#7891D3'
    },
    infoIcon: {
        padding: 5,
    },
    infoTooltipContainer: {
        position: 'absolute',
        zIndex: 1,
        top: '100%',
        left: 0,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoTooltip: {
        width: 250,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'gray',
    },
});


