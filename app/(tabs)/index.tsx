import {Button, Image, ImageBackground, StyleSheet} from 'react-native';

import { Text, View } from '../../components/Themed';
import globalStyles from '../../assets/css/globalStyles';
import PrimaryButton from "../../components/PrimaryButton";

export default function TabOneScreen() {
  return (
        <ImageBackground source={require('../../assets/images/background.png')}
          style={styles.background}>
          <View style={styles.container}>
            <PrimaryButton title={'Најави се'} name={'pages/login'}/>
            <PrimaryButton title={'Регистрирај се'} name={'pages/register'}/>
            <PrimaryButton title={'Разгледај'} name={'catalogue'}/>
            <View style={[styles.welcome_info, globalStyles.shadow]}>
              <Text style={[styles.welcome, globalStyles.text_white]}>Добредојде!</Text>
              <Text style={[styles.welcome, globalStyles.text_white]}>
                Особено ни е мило што се наоѓаш на нашата апликација за
                реискористување на облека од втора рака
              </Text>
            </View>
          </View>
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginVertical: 60
  },
  background: {
    flex: 1,
    resizeMode: 'contain',
  },
  welcome_info: {
    width: 250,
    marginVertical: 20,
    backgroundColor: '#7891D3',
    padding: 10,
    borderRadius: 10
  },
  welcome: {
    textAlign: 'center',
    flexWrap: 'wrap',
    textAlignVertical: 'top'
  }
});
