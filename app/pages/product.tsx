import {
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform, ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import globalStyles from "../../assets/css/globalStyles";
import Navbar from "../../components/Navbar";
import CategoryButton from "../../components/buttons/CategoryButton";
import BackButton from "../../components/buttons/BackButton";
import ContactFooter from "../../components/ContactFooter";

export default function Product({ product }: {product: object}) {

    return (
        <View style={globalStyles.background_transparent}>
            {/*TODO if there is a user logged in, get the userId*/}
            <Navbar user={'user1'}/>
            <ImageBackground source={require('../../assets/images/background.png')}
                             style={globalStyles.background}>
                <ScrollView>
                    <BackButton title={"Назад"} source={require('../../assets/images/back-icon.png')}/>
                    <View style={[globalStyles.container, globalStyles.shadow]}>
                        <View style={globalStyles.white_container}>
                            <Image source={require('../../assets/images/example-cloth.png')}
                                   style={globalStyles.cloth_image}/>
                            <View style={globalStyles.cloth_description}>
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
            {/*TODO The footer should be visible only if a user is logged in*/}
            <ContactFooter sellerId={"seller1"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    price: {
        alignItems: 'center',
        marginVertical: 10
    },
    text: {
        fontSize: 18,
        marginVertical: 5
    }
})