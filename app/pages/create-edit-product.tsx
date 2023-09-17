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
import { useEffect, useState } from "react";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import ImageInput from "../../components/ImageInput";
import AddressInput from "../../components/AddressInput";
import BackButton from "../../components/buttons/BackButton";
import { useNavigation } from "expo-router";
import { IProduct, IRegister, categories, sizes } from "../interfaces/types";
import { Picker } from "@react-native-picker/picker";
import ColorPicker from "react-native-wheel-color-picker";
import { useAuth } from "../services/context/AuthContext";
import { getDatabase, ref, set, push } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

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

  const navigator = useNavigation();
  const { user } = useAuth();

  const changeHandler = (name: string, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

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
    console.log(pickerResult);
    if (!pickerResult.canceled) {
      const imageUri = pickerResult.assets[0].uri;
      changeHandler("image", imageUri);
    }
  };

  const uploadImageAndGetURL = async (uri: string) => {
    const storage = getStorage();

    // Generating a unique filename for each image.
    // This uses a combination of productId and a timestamp.
    const uniqueImageName = `${Math.ceil(Math.random() * 1000000)}_${Date.now()}.jpg`;

    const imageRef = storageRef(storage, `productImages/${uniqueImageName}`);

    let blob: Blob;

    try {
      const response = await fetch(uri);
      blob = await response.blob();
    } catch (error) {
      console.error("Error fetching the image:", error);
      throw new Error("Failed to fetch the image.");
    }

    // Add metadata if required, for instance setting content type.
    const metadata = {
      contentType: "image/jpeg",
    };

    try {
      await uploadBytes(imageRef, blob, metadata);
      const downloadURL = await getDownloadURL(imageRef);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading the image to Firebase:", error);
      throw new Error("Failed to upload the image.");
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

    if (!user) {
      alert("User not logged in");
      return;
    }
    try {
      const database = getDatabase();
      const productImageUrl = await uploadImageAndGetURL(data.image);
      const newProduct = { ...data, userId: user.uid, image: productImageUrl };
      const productsRef = ref(database, "products/");
      const newProductRef = push(productsRef);
      await set(newProductRef, newProduct);
      navigator.navigate("index" as never);
    } catch (error: any) {
      alert(error.message);
    }
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
