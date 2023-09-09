import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import globalStyles from "../../assets/css/globalStyles";
import Navbar from "../../components/Navbar";
import BackButton from "../../components/buttons/BackButton";
import UserProductCard from "../../components/UserProductCard";
import React from "react";

type Product = {
  name: string;
  // TODO other props
};

type Props = {
  list: Product[]; // Array of Person objects
};

const UserListOfProducts: React.FC<Props> = ({ list }) => {
  // TODO using the userId, get the list of products and create that many user product cards
  const getProducts = () => {};

  return (
    <View style={globalStyles.background_transparent}>
      <Navbar />
      <ImageBackground source={require("../../assets/images/background.png")} style={globalStyles.background}>
        <ScrollView>
          <Text style={[globalStyles.wide_title, styles.custom_width]}>МОИ ПРОДУКТИ</Text>
          <BackButton title={"Назад"} source={require("../../assets/images/back-icon.png")} />
          <View style={globalStyles.container}>
            <UserProductCard productId={"productId"} />
            <UserProductCard productId={"productId"} />
            <UserProductCard productId={"productId"} />
            <UserProductCard productId={"productId"} />
            <UserProductCard productId={"productId"} />
            <UserProductCard productId={"productId"} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default UserListOfProducts;

const styles = StyleSheet.create({
  custom_width: {
    maxWidth: 250,
    alignSelf: "center",
  },
});
