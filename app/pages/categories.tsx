import {
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform, ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Navbar from "../../components/Navbar";
import globalStyles from "../../assets/css/globalStyles";
import CategoryButton from "../../components/buttons/CategoryButton";
import BackButton from "../../components/buttons/BackButton";

export default function Categories() {

    return (
        <View style={globalStyles.background_transparent}>
            <Navbar/>
            <KeyboardAvoidingView
                style={globalStyles.background_transparent}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ImageBackground source={require('../../assets/images/background.png')}
                                 style={globalStyles.background}>
                    <ScrollView>
                        <BackButton title={"Назад"} source={require('../../assets/images/back-icon.png')}/>
                        <View style={globalStyles.container}>
                            <Text style={globalStyles.title}>Категории</Text>
                            <CategoryButton title={"Блузи"} name={'pages/list-of-products'}/>
                            <CategoryButton title={"Панталони"} name={'pages/list-of-products'}/>
                            <CategoryButton title={"Сукњи"} name={'pages/list-of-products'}/>
                            <CategoryButton title={"Маици"} name={'pages/list-of-products'}/>
                            <CategoryButton title={"Капи"} name={'pages/list-of-products'}/>
                            <CategoryButton title={"Фустани"} name={'pages/list-of-products'}/>
                            <TouchableOpacity style={styles.arrow}>
                                <Image source={require('../../assets/images/arrow-down.png')} style={styles.arrow}/>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    arrow: {
        alignSelf: 'center',
        height: 70,
        width: 70,
        marginTop: 8
    },
    categoriesContainer: {
        marginVertical: 30,
        paddingVertical: 30,
        marginHorizontal: 35,
        borderRadius: 25,
    }
})