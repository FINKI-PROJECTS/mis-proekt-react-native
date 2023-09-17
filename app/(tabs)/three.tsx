import { Button, StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { IRegister } from "../interfaces/types";
import { useRoute } from "@react-navigation/native";
import Seller from "../pages/seller";
import { useAuth } from "../services/context/AuthContext";
import { useFocusEffect, useNavigation } from "expo-router";
import globalStyles from "../../assets/css/globalStyles";

interface IType {
  screen: string;
  id?: string;
  user?: IRegister;
}
export default function TabTwoScreen() {
  const route = useRoute();
  const params = route.params ? (route.params as IType) : null;
  const navigator = useNavigation();
  const { userData } = useAuth();
  if (params?.screen === "pages/seller" && params?.user) {
    return <Seller {...params.user} />;
  }

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text>Немате пристап до оваа страна</Text>
        <TouchableOpacity
          style={[globalStyles.primary_button, globalStyles.shadow]}
          onPress={() => {
            navigator.navigate("pages/login" as never);
          }}>
          <Text style={styles.buttonText}>Логирајсе</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return userData ? <Seller {...(userData as IRegister)} /> : <></>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});
