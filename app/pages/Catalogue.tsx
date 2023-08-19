import {
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import CustomNavbar from "../../components/CustomNavbar";
import globalStyles from "../../assets/css/globalStyles";
import CategoryButton from "../../components/buttons/CategoryButton";

export default function Catalogue() {

    return (
        <View style={globalStyles.background_transparent}>
            <CustomNavbar/>
            <KeyboardAvoidingView
                style={globalStyles.background_transparent}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ImageBackground source={require('../../assets/images/background.png')}
                                 style={globalStyles.background}>
                    <View style={styles.container}>
                        <Text style={[globalStyles.title]}>Категории</Text>
                        <CategoryButton title={"Блузи"} name={'pages/List-Of-Products'} />
                        <CategoryButton title={"Панталони"} name={'pages/Product'} />
                        <CategoryButton title={"Сукњи"} name={'pages/Product'} />
                        <CategoryButton title={"Маици"} name={'pages/Product'} />
                        <CategoryButton title={"Капи"} name={'pages/Product'} />
                        <CategoryButton title={"Фустани"} name={'pages/Product'} />
                        <TouchableOpacity style={styles.arrow}>
                            <Image source={require('../../assets/images/arrow-down.png')} style={styles.arrow}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(120, 145, 211, 0.7)',
        marginVertical: 30,
        paddingVertical: 30,
        marginHorizontal: 35,
        borderRadius: 25,
    },
    arrow: {
        alignSelf: 'center',
        height: 70,
        width: 70,
        marginTop: 8
    }
})