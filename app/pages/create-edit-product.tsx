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
import { IProduct, IRegister, categories, sizes } from "../interfaces/types";
import { Picker } from "@react-native-picker/picker";
import ColorPicker from "react-native-wheel-color-picker";

const initialState = {
  category: "Друго",
  size: "XS",
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
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ImageBackground source={require("../../assets/images/background.png")} style={globalStyles.background}>
        <ScrollView contentContainerStyle={globalStyles.scroll_view}>
          <BackButton title={"Назад"} source={require("../../assets/images/back-icon.png")} goBack={handleBack} />
          <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Додади производ</Text>

            <ImageInput onPress={handleImagePress} imageUri={data.image} />

            <Picker
              selectedValue={data.category}
              style={globalStyles.input_field}
              onValueChange={changeHandler.bind(null, "category")}>
              {categories.map((category) => (
                <Picker.Item key={category} label={category} value={category} />
              ))}
            </Picker>

            <Picker
              selectedValue={data.size}
              style={globalStyles.input_field}
              onValueChange={changeHandler.bind(null, "size")}>
              {sizes.map((size) => (
                <Picker.Item key={size} label={size} value={size} />
              ))}
            </Picker>

            <AddressInput
              value={data.address}
              onChangeText={changeHandler.bind(null, "address")}
              infoMessage={"Вашата адреса ќе биде видлива за регистрираните корисници на апликацијата!"}
            />

            <TextInput
              style={globalStyles.input_field}
              placeholder="Бренд"
              value={data.brand}
              onChangeText={changeHandler.bind(null, "brand")}
            />

            <ColorPicker
              color={data.color}
              onColorChange={(color) => changeHandler("color", color)}
              thumbSize={10}
              sliderSize={10}
              swatches={false}
              sliderHidden={true}
              noSnap={true}
              row={false}
            />
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}>
              <Text>Боја: </Text>
              <View style={{ height: 20, backgroundColor: data.color, width: 100 }} />
            </View>

            <TextInput
              style={globalStyles.input_field}
              placeholder="Цена"
              value={data.price}
              keyboardType="numeric"
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
