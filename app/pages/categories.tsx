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
import {useNavigation} from "expo-router";

export default function Categories() {

    const navigator = useNavigation();

    // TODO navigate to the list of products from the specific category
    const handleNavigation = () => {
        navigator.navigate('pages/list-of-products' as never);
    }

    return (
        <View style={globalStyles.background_transparent}>
            <Navbar user={"userId"}/>
            <ImageBackground source={require('../../assets/images/background.png')}
                             style={globalStyles.background}>
                <ScrollView>
                    <BackButton title={"Назад"} source={require('../../assets/images/back-icon.png')}/>
                    <View style={[globalStyles.container, globalStyles.shadow]}>
                        <Text style={globalStyles.title}>Категории</Text>
                        <CategoryButton title={"Блузи"} onPress={handleNavigation}/>
                        <CategoryButton title={"Панталони"} onPress={handleNavigation}/>
                        <CategoryButton title={"Сукњи"} onPress={handleNavigation}/>
                        <CategoryButton title={"Маици"} onPress={handleNavigation}/>
                        <CategoryButton title={"Капи"} onPress={handleNavigation}/>
                        <CategoryButton title={"Фустани"} onPress={handleNavigation}/>
                        {/*TODO list other categories*/}
                        <TouchableOpacity style={styles.arrow}>
                            <Image source={require('../../assets/images/arrow-down.png')} style={styles.arrow}/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
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