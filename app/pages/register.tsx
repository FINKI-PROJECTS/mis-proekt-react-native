import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { Text, View } from "../../components/Themed";
import globalStyles from "../../assets/css/globalStyles";
import { SetStateAction, useState } from "react";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import ImageInput from "../../components/ImageInput";
import AddressInput from "../../components/AddressInput";
import BackButton from "../../components/buttons/BackButton";
import { useNavigation } from "expo-router";
import { IRegister } from "../interfaces/types";

const initialState = {
  selectedImage: "",
  name: "",
  surname: "",
  email: "",
  address: "",
  phone: "",
  password: "",
};

export default function RegisterScreen() {
  const [data, setData] = useState<IRegister>({ ...initialState });

  const changeHandler = (name: string, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const navigator = useNavigation();

  // Functions to handle input changes
  const handleImagePress = async () => {
    // TODO allow users to take picture also
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!pickerResult.canceled) {
      const imageUri = pickerResult.assets[0].uri;
      changeHandler("selectedImage", imageUri);
    }
  };

  //TODO Save user in firebase
  // TODO Add validations
  const handleRegister = () => {
    console.log(data);
    navigator.navigate("pages/login" as never);
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
            <Text style={globalStyles.title}>Регистрирај се</Text>

            <ImageInput onPress={handleImagePress} imageUri={data.selectedImage} />

            <TextInput
              style={globalStyles.input_field}
              placeholder="Име"
              value={data.name}
              onChangeText={changeHandler.bind(null, "name")}
            />

            <TextInput
              style={globalStyles.input_field}
              placeholder="Презиме"
              value={data.surname}
              onChangeText={changeHandler.bind(null, "surname")}
            />

            <TextInput
              style={globalStyles.input_field}
              keyboardType="email-address"
              placeholder="Емаил"
              value={data.email}
              onChangeText={changeHandler.bind(null, "email")}
            />

            <AddressInput
              value={data.address}
              onChangeText={changeHandler.bind(null, "address")}
              infoMessage={"Вашата адреса ќе биде видлива за регистрираните корисници на апликацијата!"}
            />

            <TextInput
              style={globalStyles.input_field}
              keyboardType="phone-pad"
              placeholder="Телефон"
              value={data.phone}
              onChangeText={changeHandler.bind(null, "phone")}
            />

            <TextInput
              style={globalStyles.input_field}
              placeholder="Лозинка"
              secureTextEntry={true}
              value={data.password}
              onChangeText={changeHandler.bind(null, "password")}
            />

            <SecondaryButton title="Регистрирај се" onPress={handleRegister} />
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
