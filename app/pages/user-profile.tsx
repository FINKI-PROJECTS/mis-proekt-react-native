import {
  Button,
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
interface IProps {
  userName: string;
  userSurname: string;
  userEmail: string;
  userAddress: string;
  userPhone: string;
  userPassword: string;
}
export default function UserProfile({ name, surname, email, address, phone }: Omit<IRegister, "password">) {
  const navigator = useNavigation();
  const { signOut } = useAuth();
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
      <Navbar />
      <ImageBackground source={require("../../assets/images/background.png")} style={globalStyles.background}>
        <ScrollView>
          <Text style={[globalStyles.wide_title]}>МОЈ ПРОФИЛ</Text>
          <BackButton title={"Назад"} source={require("../../assets/images/back-icon.png")} />
          <View style={globalStyles.container}>
            <TextInput
              style={globalStyles.input_field}
              placeholder="Име"
              value={name}
              onChangeText={changeHandler.bind(null, "name")}
            />

            <TextInput
              style={globalStyles.input_field}
              placeholder="Презиме"
              value={surname}
              onChangeText={changeHandler.bind(null, "surname")}
            />

            <TextInput
              style={globalStyles.input_field}
              keyboardType="email-address"
              placeholder="Емаил"
              value={email}
              onChangeText={changeHandler.bind(null, "email")}
            />

            <AddressInput
              value={address}
              onChangeText={changeHandler.bind(null, "address")}
              infoMessage={"Вашата адреса ќе биде видлива за регистрираните корисници на апликацијата!"}
            />

            <TextInput
              style={globalStyles.input_field}
              keyboardType="phone-pad"
              placeholder="Телефон"
              value={phone}
              onChangeText={changeHandler.bind(null, "phone")}
            />

            <TextInput
              style={globalStyles.input_field}
              placeholder="Лозинка"
              secureTextEntry={true}
              value={""}
              onChangeText={changeHandler.bind(null, "password")}
            />
            {/* <Button title="Зачувај" onPress={() => {}} /> */}
            <MyProductsButton onPress={openUserProducts} />
            <TouchableOpacity
              style={[styles.button, globalStyles.shadow]}
              onPress={() => {
                signOut();
                navigator.navigate("pages/login" as never);
              }}>
              <Text style={[globalStyles.text_blue, styles.textBtn]}>Одјависе</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Просечен рејтинг:</Text>
            <StarRating rating={calculateRating()} isDisabled={true} />
          </View>
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
    alignSelf: "center",
    fontSize: 18,
  },
  button: {
    width: 150,
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
