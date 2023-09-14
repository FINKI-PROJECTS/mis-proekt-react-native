import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "../../components/Navbar";
import SimpleProductCard from "../../components/SimpleProductCard";
import BackButton from "../../components/buttons/BackButton";
import globalStyles from "../../assets/css/globalStyles";
import { useNavigation } from "expo-router";

interface IProps {
  name: string;
}
export default function ListOfProducts({ name }: IProps) {
  const navigator = useNavigation();
  const handleBack = () => {
    navigator.navigate({
      name: "index",
      params: { screen: "pages/categories" },
    } as never);
  };
  return (
    <View style={[globalStyles.background_transparent]}>
      <ImageBackground source={require("../../assets/images/background.png")} style={globalStyles.background}>
        <ScrollView>
          <BackButton title={"Назад"} source={require("../../assets/images/back-icon.png")} goBack={handleBack} />
          <View style={styles.center}>
            <Text style={styles.text}>{name}</Text>
          </View>
          <SimpleProductCard name={"pages/product"} source={require("../../assets/images/example-cloth.png")} />
          <SimpleProductCard name={"pages/product"} source={require("../../assets/images/example-cloth-2.png")} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
