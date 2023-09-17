import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "../../components/Navbar";
import SimpleProductCard from "../../components/SimpleProductCard";
import BackButton from "../../components/buttons/BackButton";
import globalStyles from "../../assets/css/globalStyles";
import { useNavigation } from "expo-router";
import { getDatabase, ref, onValue, query, orderByChild, equalTo } from "firebase/database";
import { useEffect, useState } from "react";
import { IProduct } from "../interfaces/types";

interface IProps {
  name: string;
}

export default function ListOfProducts({ name }: IProps) {
  const navigator = useNavigation();
  const handleBack = () => {
    navigator.navigate({
      name: "index",
      params: { screen: "pages/categories" },
    } as never);
  };
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProductsByCategory = async (category: string): Promise<{ [key: string]: IProduct }> => {
    const db = getDatabase();
    const productsRef = ref(db, "products");
    const q = query(productsRef, orderByChild("category"), equalTo(category));

    const products: { [key: string]: IProduct } = {};

    // Use the onValue method to fetch the products by category.
    // This will give you both the product data and the product ID.
    onValue(q, (snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const productId = childSnapshot.key;
          const productData = childSnapshot.val() as IProduct;
          if (productId) {
            products[productId] = productData;
          }
        });
      }
    });

    return products;
  };

  useEffect(() => {
    const effect = async () => {
      const products = await fetchProductsByCategory(name);
      setProducts(Object.keys(products).map((key) => ({ ...products[key], id: key })));
    };
    effect();
  }, []);
  console.log(products.length);
  return (
    <View style={[globalStyles.background_transparent]}>
      <ImageBackground source={require("../../assets/images/background.png")} style={globalStyles.background}>
        <ScrollView>
          <BackButton title={"Назад"} source={require("../../assets/images/back-icon.png")} goBack={handleBack} />
          <View style={styles.center}>
            <Text style={styles.text}>{name}</Text>
          </View>
          {products.length ? (
            products.map((product) => <SimpleProductCard key={product.id} {...product} />)
          ) : (
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}>
              <Text>Не се пронајдени производи за ова категорија</Text>
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
