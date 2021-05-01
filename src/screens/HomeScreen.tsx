import * as React from 'react';
import { StyleSheet, Image, Text, View} from 'react-native';

//components
import FancyText from '../components/FancyText';
import SpotlighInfo from '../components/SpotlightInfo';

import Colors from '../constants/Colors';
import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
// import { Text, View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Component */}
      <View style={styles.headerComplement}>
        <Image style={styles.headerComplImage}source={{uri:'https://avatars.githubusercontent.com/u/50528900?v=4'}}/>
      </View>

      <FancyText text="GABRIEL HENRIQUE">
        <Text style={{color: Colors.colors.grey, fontWeight: '100', textAlign: 'left'}}>
          gabrielhnespindola@gmail.com{"\n"}
          Londrina/PR
        </Text>
      </FancyText>

      <SpotlighInfo/>

      <FancyText text="BIO">
        <Text style={{color: Colors.colors.grey, fontWeight: '100', textAlign: 'left'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce lacinia et orci vitae euismod. Ut eleifend fermentum purus quis sodales.
          Proin vel leo mollis, congue diam a, posuere eros. Morbi condimentum ut diam convallis volutpat.
          Mauris lacus velit, accumsan ut nibh vitae, hendrerit ultricies purus. Etiam sed tellus gravida,
          congue dolor quis, pharetra nunc.
        </Text>
      </FancyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.colors.background
  },
  headerComplement:{
    width: '100%',
    height: 64,  // half image size
    backgroundColor: Colors.colors.backgroundDark,
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'visible',
    marginBottom: 100, //must include half image size plus another value
  },
  headerComplImage:{
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.colors.white,
    width: 128,
    height: 128
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  infosSpotlightContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.colors.greyLight,
    width: '100%',
    height: 90,

  },
  infoContainer:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText:{
    color: Colors.colors.grey,
    fontSize: 16
  },
  infoNumber:{
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }
  
});
