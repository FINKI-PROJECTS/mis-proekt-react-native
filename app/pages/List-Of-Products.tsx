import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    View
} from "react-native";
import CustomNavbar from "../../components/CustomNavbar";
import SimpleProductCard from "../../components/SimpleProductCard";
import CustomBackButton from "../../components/buttons/CustomBackButton";
import globalStyles from "../../assets/css/globalStyles";

export default function ListOfProducts() {

    return (
        <View style={globalStyles.background_transparent}>
            <CustomNavbar/>
            <ScrollView style={globalStyles.background_transparent}>
                <ImageBackground source={require('../../assets/images/background.png')}
                                 style={globalStyles.background}>
                    <View style={styles.buttonBack}>
                        <CustomBackButton title={"Назад"} source={require('../../assets/images/back-icon.png')}/>
                    </View>
                    <SimpleProductCard name={'pages/Product'} source={require('../../assets/images/example-cloth.png')}/>
                    <SimpleProductCard name={'pages/Product'} source={require('../../assets/images/example-cloth-2.png')}/>
                </ImageBackground>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonBack: {
        marginTop: 30,
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