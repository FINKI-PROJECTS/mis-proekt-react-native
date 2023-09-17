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
import { categories } from "../interfaces/types";
import { Dimensions } from "react-native";

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

  const windowHeight = Dimensions.get("window").height;
  const desiredHeight = windowHeight * 0.6;

  return (
    <View style={globalStyles.background_transparent}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={globalStyles.background}
      >
        <BackButton
          title={"Назад"}
          source={require("../../assets/images/back-icon.png")}
          goBack={handleBack}
        />
        <View style={[globalStyles.container, globalStyles.shadow]}>
          <Text style={globalStyles.title}>Категории</Text>
          <ScrollView
            horizontal={false}
            showsVerticalScrollIndicator={true}
            style={{ height: desiredHeight }}
          >
            {categories.map((category) => (
              <CategoryButton
                key={category}
                title={category}
                onPress={() => handleNavigation(category)}
              />
            ))}
          </ScrollView>
        </View>
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
