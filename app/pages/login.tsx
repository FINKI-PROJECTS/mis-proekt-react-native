import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";

import { Text, View } from "../../components/Themed";
import globalStyles from "../../assets/css/globalStyles";
import { SetStateAction, useState } from "react";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { useNavigation } from "expo-router";
import BackButton from "../../components/buttons/BackButton";
import { ILogin } from "../interfaces/types";

const initialState = { email: "", password: "" };

export default function LoginScreen() {
  const [data, setData] = useState<ILogin>({ ...initialState });

  const navigation = useNavigation();

  // Function to handle input changes
  const changeHandler = (name: string, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle form submission
  const handleLogin = () => {
    // Do something with the input value, e.g., submit it to a server
    // TODO handle validation & firebase check
    const name = "pages/categories";
    navigation.navigate(name as never);
  };

  return (
    <KeyboardAvoidingView
      style={globalStyles.background_transparent}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ImageBackground source={require("../../assets/images/background.png")} style={globalStyles.background}>
        <ScrollView contentContainerStyle={globalStyles.scroll_view}>
          <BackButton title={"Назад"} source={require("../../assets/images/back-icon.png")} />
          <View style={globalStyles.container}>
            <Image source={require("../../assets/images/simple-logo.png")} style={globalStyles.simple_logo} />
            <Text style={globalStyles.title}>Најави се</Text>

            <TextInput
              style={globalStyles.input_field}
              keyboardType="email-address"
              placeholder="Емаил"
              value={data.email}
              onChangeText={changeHandler.bind(null, "email")}
            />

            <TextInput
              style={globalStyles.input_field}
              placeholder="Лозинка"
              secureTextEntry={true}
              value={data.password}
              onChangeText={changeHandler.bind(null, "password")}
            />

            <SecondaryButton title="Најави се" onPress={handleLogin} />
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
