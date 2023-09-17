import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../assets/css/globalStyles";
import { useNavigation } from "expo-router";
interface IProps {
  sellerId: string | undefined;
}

export default function ContactFooter({ sellerId }: IProps) {
  const navigation = useNavigation();

  const handleSeller = () => {
    //TODO open the page of the selected sellers cloth
    navigation.navigate("pages/seller" as never);
  };

  return (
    <TouchableOpacity
      style={[styles.container, globalStyles.background_blue]}
      onPress={handleSeller}
    >
      <Text style={styles.text}>Контактирај продавач</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderTopColor: "grey",
    borderTopWidth: 1,
  },
  text: {
    alignSelf: "center",
    marginVertical: 20,
    color: "white",
    fontSize: 20,
  },
});
