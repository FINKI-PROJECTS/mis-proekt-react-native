import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import globalStyles from "../../assets/css/globalStyles";
import Navbar from "../../components/Navbar";
import BackButton from "../../components/buttons/BackButton";
import StarRating from "../../components/StarRating";
import MyProductsButton from "../../components/buttons/MyProductsButton";
import { useNavigation } from "expo-router";
import { IRegister } from "../interfaces/types";
import AddressInput from "../../components/AddressInput";
import { useAuth } from "../services/context/AuthContext";

export default function UserProfile() {
  const navigator = useNavigation();
  const { signOut } = useAuth();
  const {userData} = useAuth();
  const changeHandler = (name: string, value: string) => {};

  // TODO take the list of ratings per user and calculate the average
  const calculateRating = () => {
    return 2;
  };

  // TODO using the user id, open his list of products
  const openUserProducts = () => {
    navigator.navigate("pages/user-list-of-products" as never);
  };

  return (
    <KeyboardAvoidingView
      style={globalStyles.background_transparent}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ImageBackground source={require("../../assets/images/background.png")} style={globalStyles.background}>
        <Navbar/>
        <ScrollView>
          <Text style={[globalStyles.wide_title]}>МОЈ ПРОФИЛ</Text>
          <BackButton title={"Назад"} source={require("../../assets/images/back-icon.png")} />
          <View style={globalStyles.container}>
            <TextInput
              style={globalStyles.input_field}
              placeholder="Име"
              value={userData?.name}
              editable={false}
              onChangeText={changeHandler.bind(null, "name")}
            />

            <TextInput
              style={globalStyles.input_field}
              placeholder="Презиме"
              value={userData?.surname}
              editable={false}
              onChangeText={changeHandler.bind(null, "surname")}
            />

            <TextInput
              style={globalStyles.input_field}
              keyboardType="email-address"
              placeholder="Емаил"
              value={userData?.email}
              editable={false}
              onChangeText={changeHandler.bind(null, "email")}
            />

            <TextInput
              style={globalStyles.input_field}
              keyboardType="phone-pad"
              placeholder="Телефон"
              value={userData?.phone}
              editable={false}
              onChangeText={changeHandler.bind(null, "phone")}
            />

            {/* <Button title="Зачувај" onPress={() => {}} /> */}
            {/*<MyProductsButton onPress={openUserProducts} />*/}
            {/*<Text style={styles.text}>Просечен рејтинг:</Text>*/}
            {/*<StarRating rating={calculateRating()} isDisabled={true} />*/}
          </View>
          <TouchableOpacity
              style={[styles.button, globalStyles.shadow, globalStyles.secondary_button]}
              onPress={() => {
                signOut();
                navigator.navigate("pages/login" as never);
              }}>
            <Text style={[globalStyles.text_white, styles.textBtn]}>Одјави се</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  two_buttons: {
    paddingVertical: 20,
    width: 250,
    flexGrow: 1,
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
    color: "white",
  },
  textBtn: {
    textAlign: "center",
    fontSize: 18,
  },
  button: {
    height: 40,
    marginVertical: 20,
    paddingHorizontal: 20,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    flexGrow: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
