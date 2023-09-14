import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import globalStyles from "../../assets/css/globalStyles";
import Navbar from "../../components/Navbar";
import BackButton from "../../components/buttons/BackButton";
import React from "react";
import RatingCard from "../../components/RatingCard";

export default function ListOfRatings() {
  return (
    <View style={globalStyles.background_transparent}>
      <Navbar />
      <ImageBackground source={require("../../assets/images/background.png")} style={globalStyles.background}>
        <ScrollView>
          <BackButton title={"Назад"} source={require("../../assets/images/back-icon.png")} />
          <View style={globalStyles.container}>
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  custom_width: {
    maxWidth: 250,
    alignSelf: "center",
  },
});
