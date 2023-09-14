import { ImageBackground, ScrollView, StyleSheet, TextInput, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import globalStyles from "../../assets/css/globalStyles";
import Navbar from "../../components/Navbar";
import BackButton from "../../components/buttons/BackButton";
import React from "react";

export default function CreateEditProduct() {
  return (
    <View style={globalStyles.background_transparent}>
      <Navbar />
      <ImageBackground source={require("../../assets/images/background.png")} style={globalStyles.background}>
        <ScrollView>
          <BackButton title={"Назад"} source={require("../../assets/images/back-icon.png")} />
          <View style={globalStyles.container}></View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
