import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    View
} from "react-native";
import Navbar from "../../components/Navbar";
import SimpleProductCard from "../../components/SimpleProductCard";
import BackButton from "../../components/buttons/BackButton";
import globalStyles from "../../assets/css/globalStyles";

export default function ListOfProducts() {

    return (
        <View style={globalStyles.background_transparent}>
            <Navbar/>
            <ScrollView style={globalStyles.background_transparent}>
                <ImageBackground source={require('../../assets/images/background.png')}
                                 style={globalStyles.background}>
                    <BackButton title={"Назад"} source={require('../../assets/images/back-icon.png')}/>
                    <SimpleProductCard name={'pages/product'}
                                       source={require('../../assets/images/example-cloth.png')}/>
                    <SimpleProductCard name={'pages/product'}
                                       source={require('../../assets/images/example-cloth-2.png')}/>
                </ImageBackground>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    arrow: {
        alignSelf: 'center',
        height: 70,
        width: 70,
        marginTop: 8
    }
})