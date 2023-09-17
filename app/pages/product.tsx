import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import globalStyles from "../../assets/css/globalStyles";
import Navbar from "../../components/Navbar";
import BackButton from "../../components/buttons/BackButton";
import ContactFooter from "../../components/ContactFooter";
import { IProduct } from "../interfaces/types";

export default function Products({ product }: { product: IProduct }) {
  return (
    <View style={globalStyles.background_transparent}>
      {/*TODO if there is a user logged in, get the userId*/}
      <Navbar />
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={globalStyles.background}
      >
        <ScrollView>
          <BackButton
            title={"Назад"}
            source={require("../../assets/images/back-icon.png")}
          />
          <View style={[globalStyles.container, globalStyles.shadow]}>
            <View style={globalStyles.white_container}>
              <Image
                source={require("../../assets/images/example-cloth.png")}
                style={globalStyles.cloth_image}
              />
              <View style={globalStyles.cloth_description}>
                <View>
                  <Text style={styles.text}>Категорија</Text>
                  <Text style={styles.text}>Големина</Text>
                  <Text style={styles.text}>Бренд</Text>
                  <Text style={styles.text}>Продавач</Text>
                  <Text style={styles.text}>Локација</Text>
                </View>
                <View>
                  <Text style={styles.text}>{product.category}</Text>
                  <Text style={styles.text}>{product.size}</Text>
                  <Text style={styles.text}>{product.brand}</Text>
                  <Text style={styles.text}>{product.seller?.name}</Text>
                  <Text style={styles.text}>{product.seller?.location}</Text>
                </View>
              </View>
            </View>
            <View style={styles.price}>
              <Text style={[globalStyles.text_white, styles.text]}>
                {product.price} ден.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      {/*TODO The footer should be visible only if a user is logged in*/}
      <ContactFooter sellerId={product.seller?.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  price: {
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});
