import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import globalStyles from "../../assets/css/globalStyles";
import Navbar from "../../components/Navbar";
import BackButton from "../../components/buttons/BackButton";
import RatingFooter from "../../components/RatingFooter";
import StarRating from "../../components/StarRating";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { useNavigation } from "expo-router";

export default function Seller() {
  const navigator = useNavigation();

  // TODO navigate to the list of a particular ID of a seller
  const showListOfRatings = () => {
    navigator.navigate("pages/list-of-ratings" as never);
  };

  // TODO open a rating form for a particular seller
  const openRatingForm = () => {
    navigator.navigate("pages/leave-rating" as never);
  };

  return (
    <View style={globalStyles.background_transparent}>
      <Navbar />
      <ImageBackground source={require("../../assets/images/background.png")} style={globalStyles.background}>
        <ScrollView>
          <BackButton title={"Назад"} source={require("../../assets/images/back-icon.png")} />
          <View style={[globalStyles.container, globalStyles.shadow]}>
            <View style={globalStyles.white_container}>
              <Text style={[globalStyles.wide_title, styles.custom_width]}>ПРОДАВАЧ</Text>
              <Text style={styles.seller_name}>Сара Стојановска</Text>
              <Image
                source={require("../../assets/images/user_photo.png")}
                style={[globalStyles.background_blue, styles.image_style]}
              />
              <View style={styles.owner_description}>
                <View>
                  <Text style={styles.text}>Телефонски број</Text>
                  <Text style={styles.text}>Е-маил</Text>
                  <Text style={styles.text}>Адреса</Text>
                  <Text style={styles.text}>Локација</Text>
                </View>
                <View>
                  <Text style={styles.text}>/dynamic value/</Text>
                  <Text style={styles.text}>/dynamic value/</Text>
                  <Text style={styles.text}>/dynamic value/</Text>
                  <Text style={styles.text}>/dynamic value/</Text>
                </View>
              </View>
              <Text>Рејтинг</Text>
              <StarRating rating={3} isDisabled={true} />
              <SecondaryButton title={"Погледни рејтинзи"} onPress={showListOfRatings} />
            </View>
          </View>
        </ScrollView>
        {/*TODO The footer should be visible only if a user is logged in*/}
        <RatingFooter onPress={openRatingForm} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  seller_name: {
    letterSpacing: 3,
  },
  owner_description: {
    paddingVertical: 20,
    width: 250,
    flexGrow: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  image_style: {
    marginVertical: 20,
  },
  text: {
    fontSize: 15,
    marginVertical: 5,
    maxWidth: 150,
  },
  custom_width: {
    maxWidth: 250,
  },
});
