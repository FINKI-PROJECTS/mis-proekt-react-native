import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Navbar from "../../components/Navbar";
import globalStyles from "../../assets/css/globalStyles";
import CategoryButton from "../../components/buttons/CategoryButton";
import { useNavigation } from "expo-router";
import BackButton from "../../components/buttons/BackButton";

interface IType {
  screen: string;
}
export default function Categories() {
  const navigator = useNavigation();

  const handleNavigation = (name: string) => {
    navigator.navigate({
      name: "index",
      params: { screen: "pages/list-of-products", id: name },
    } as never);
  };

  const handleBack = () => {
    navigator.navigate("index" as never);
  };
  return (
    <View style={globalStyles.background_transparent}>
      <ImageBackground source={require("../../assets/images/background.png")} style={globalStyles.background}>
        <ScrollView>
          <BackButton title={"Назад"} source={require("../../assets/images/back-icon.png")} goBack={handleBack} />
          <View style={[globalStyles.container, globalStyles.shadow]}>
            <Text style={globalStyles.title}>Категории</Text>
            <CategoryButton title={"Блузи"} onPress={() => handleNavigation("Блузи")} />
            <CategoryButton title={"Панталони"} onPress={() => handleNavigation("Панталони")} />
            <CategoryButton title={"Сукњи"} onPress={() => handleNavigation("Сукњи")} />
            <CategoryButton title={"Маици"} onPress={() => handleNavigation("Маици")} />
            <CategoryButton title={"Капи"} onPress={() => handleNavigation("Капи")} />
            <CategoryButton title={"Фустани"} onPress={() => handleNavigation("Фустани")} />
            {/*TODO list other categories*/}
            <TouchableOpacity style={styles.arrow}>
              <Image source={require("../../assets/images/arrow-down.png")} style={styles.arrow} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  arrow: {
    alignSelf: "center",
    height: 70,
    width: 70,
    marginTop: 8,
  },
  categoriesContainer: {
    marginVertical: 30,
    paddingVertical: 30,
    marginHorizontal: 35,
    borderRadius: 25,
  },
});
