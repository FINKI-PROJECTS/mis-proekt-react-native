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
import globalStyles from "../../assets/css/globalStyles";
import Navbar from "../../components/Navbar";
import CategoryButton from "../../components/buttons/CategoryButton";
import BackButton from "../../components/buttons/BackButton";
import ContactFooter from "../../components/ContactFooter";

export default function Product() {
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
                            <View style={styles.productContainer}>
                                <Image source={require('../../assets/images/example-cloth.png')}
                                       style={globalStyles.clothImage}/>
                                <View style={globalStyles.clothDescription}>
                                    <View>
                                        <Text style={styles.text}>Категорија</Text>
                                        <Text style={styles.text}>Големина</Text>
                                        <Text style={styles.text}>Бренд</Text>
                                        <Text style={styles.text}>Продавач</Text>
                                        <Text style={styles.text}>Локација</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.text}>/dynamic value/</Text>
                                        <Text style={styles.text}>/dynamic value/</Text>
                                        <Text style={styles.text}>/dynamic value/</Text>
                                        <Text style={styles.text}>/dynamic value/</Text>
                                        <Text style={styles.text}>/dynamic value/</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.price}>
                                <Text style={[globalStyles.text_white, styles.text]}>/dynamic value/ ден.</Text>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </KeyboardAvoidingView>
            <ContactFooter/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 25,
        marginHorizontal: 35,
        borderRadius: 25,
    },
    transparent: {
        backgroundColor: 'rgba(120, 145, 211, 0.7)',
        borderRadius: 25,
    },
    arrow: {
        alignSelf: 'center',
        height: 70,
        width: 70,
        marginTop: 8
    },
    productContainer: {
        width: 280,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20
    },
    price: {
        alignItems: 'center',
        marginVertical: 10
    },
    text: {
        fontSize: 18,
        marginVertical: 5
    }
})