import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { IRegister } from "../interfaces/types";
import { useRoute } from "@react-navigation/native";
import Seller from "../pages/seller";
import { useAuth } from "../services/context/AuthContext";
import { useFocusEffect, useNavigation } from "expo-router";

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
});
