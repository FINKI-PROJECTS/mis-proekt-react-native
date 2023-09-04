import {ImageBackground, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import globalStyles from "../../assets/css/globalStyles";
import Navbar from "../../components/Navbar";
import BackButton from "../../components/buttons/BackButton";
import {SetStateAction, useState} from "react";
import StarRating from "../../components/StarRating";
import SecondaryButton from "../../components/buttons/SecondaryButton";

export default function LeaveRating() {
    const [description, setDescription] = useState('');

    const handleDescriptionChange = (text: SetStateAction<string>) => {
        setDescription(text);
    }

    // TODO handle save rating and show modal that the save has been successful
    const handleSave = () => {

    }

    return(
        <View style={globalStyles.background_transparent}>
            <Navbar user={"user1"}/>
            <ImageBackground source={require('../../assets/images/background.png')}
                             style={globalStyles.background}>
                <ScrollView>
                    <BackButton title={"Назад"} source={require('../../assets/images/back-icon.png')}/>
                    <View style={globalStyles.container}>
                        <Text style={[globalStyles.text_white, styles.title]}>ОСТАВИ РЕЈТИНГ ЗА</Text>
                        <TextInput
                            style={globalStyles.input_field}
                            placeholder="Име на продавач"
                            editable={false}
                            value={"userId"}
                            textAlign={"center"}/>
                        <TextInput
                            multiline
                            style={[globalStyles.input_field, styles.description_field]}
                            placeholder="Опис"
                            value={description}
                            textAlignVertical={"top"}
                            onChangeText={handleDescriptionChange}/>
                        <StarRating rating={0} isDisabled={false}/>
                        <SecondaryButton title={"Зачувај"} onPress={handleSave}/>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    description_field: {
        height: 150
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
})