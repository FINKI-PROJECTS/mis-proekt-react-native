import { ImageBackground, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import globalStyles from "../../assets/css/globalStyles";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useAuth } from "../services/context/AuthContext";
import Categories from "../pages/categories";
import { useRoute } from "@react-navigation/native";
import ListOfProducts from "../pages/list-of-products";
import LoginScreen from "../pages/login";
import RegisterScreen from "../pages/register";
import Product from "../pages/product";
import { IProduct } from "../interfaces/types";

interface IType {
  screen: string;
  id: string;
  product?: IProduct;
}
// TODO this page is only shown if the user is not logged in
export default function UnathorizedScreen() {
  const route = useRoute();
  const params = route.params as IType;
  if (params?.screen === "pages/list-of-products" && params?.id && params.product) {
    return <Product product={params.product} />;
  }
  if (params?.screen === "pages/list-of-products" && params?.id) {
    return <ListOfProducts name={params.id} />;
  }

  const { user } = useAuth();
  if (user || params?.screen === "pages/categories") {
    return <Categories />;
  }
  return (
    <ImageBackground source={require("../../assets/images/background.png")} style={globalStyles.background}>
      <View style={styles.container}>
        <PrimaryButton title={"Најави се"} name={"pages/login"} />
        <PrimaryButton title={"Регистрирај се"} name={"pages/register"} />
        <PrimaryButton title={"Разгледај"} name={"pages/categories"} />
        <View style={[styles.welcome_info, globalStyles.shadow]}>
          <Text style={[styles.welcome, globalStyles.text_white]}>Добредојде!</Text>
          <Text style={[styles.welcome, globalStyles.text_white]}>
            Особено ни е мило што се наоѓаш на нашата апликација за реискористување на облека од втора рака
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  welcome_info: {
    width: 250,
    marginVertical: 20,
    backgroundColor: "#7891D3",
    padding: 10,
    borderRadius: 10,
  },
  welcome: {
    textAlign: "center",
    flexWrap: "wrap",
    textAlignVertical: "top",
    fontSize: 16,
  },
});
