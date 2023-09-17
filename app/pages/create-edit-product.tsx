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
import { useState } from "react";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import ImageInput from "../../components/ImageInput";
import AddressInput from "../../components/AddressInput";
import BackButton from "../../components/buttons/BackButton";
import { useNavigation } from "expo-router";
import { IProduct, IRegister } from "../interfaces/types";
import { useAuth } from "../services/context/AuthContext";

const initialState = {
  category: "",
  size: "",
  brand: "",
  color: "white",
  price: "",
  image: "",
  address: "",
};

export default function CreateEditProduct() {
  const [data, setData] = useState<IProduct>({ ...initialState });

  const changeHandler = (name: string, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const navigator = useNavigation();

  // Functions to handle input changes
  const handleImagePress = async () => {
    // TODO allow users to take picture also
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
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

  const handleAddNew = async () => {
    if (!data.image) {
      alert("Ве молиме изберете слика!");
      return;
    }
    if (!data.category) {
      alert("Ве молиме внесете категорија!");
      return;
    }
    if (!data.color) {
      alert("Ве молиме внесете боја!");
      return;
    }
    if (!data.price) {
      alert("Ве молиме внесете цена!");
      return;
    }
    if (!data.size) {
      alert("Ве молиме внесете големина!");
      return;
    }

    // await signUp(data);
    // navigator.navigate("pages/login" as never); // note: the "as never" type casting seems odd and may not be necessary.
  };

  const handleBack = () => {
    navigator.navigate("index" as never);
  };
  return (
    <KeyboardAvoidingView
      style={globalStyles.background_transparent}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={globalStyles.background}
      >
        <ScrollView contentContainerStyle={globalStyles.scroll_view}>
          <BackButton
            title={"Назад"}
            source={require("../../assets/images/back-icon.png")}
            goBack={handleBack}
          />
          <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Додади производ</Text>

            <ImageInput onPress={handleImagePress} imageUri={data.image} />

            <TextInput
              style={globalStyles.input_field}
              placeholder="Категорија"
              value={data.category}
              onChangeText={changeHandler.bind(null, "category")}
            />

            <TextInput
              style={globalStyles.input_field}
              placeholder="Големина"
              value={data.size}
              onChangeText={changeHandler.bind(null, "size")}
            />

            <AddressInput
              value={data.address}
              onChangeText={changeHandler.bind(null, "address")}
              infoMessage={
                "Вашата адреса ќе биде видлива за регистрираните корисници на апликацијата!"
              }
            />

            <TextInput
              style={globalStyles.input_field}
              placeholder="Бренд"
              value={data.brand}
              onChangeText={changeHandler.bind(null, "brand")}
            />
            <TextInput
              style={globalStyles.input_field}
              placeholder="Боја"
              value={data.color}
              onChangeText={changeHandler.bind(null, "color")}
            />
            <TextInput
              style={globalStyles.input_field}
              placeholder="Цена"
              value={data.price}
              onChangeText={changeHandler.bind(null, "price")}
            />
            <SecondaryButton title="Додади" onPress={handleAddNew} />
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
