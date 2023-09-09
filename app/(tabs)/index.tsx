import { ImageBackground, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import globalStyles from "../../assets/css/globalStyles";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useAuth } from "../services/context/AuthContext";
import Categories from "../pages/categories";

// TODO this page is only shown if the user is not logged in
export default function UnathorizedScreen() {
  const { user } = useAuth();
  if (user) {
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
