import * as React from 'react';
import { StyleSheet, Image, Text, View} from 'react-native';
import { useUser } from '../context/userContext';
//components
import FancyText from '../components/FancyText';
import SpotlighInfo from '../components/SpotlightInfo';
import RoundImage from '../components/RoundImage';


import Colors from '../constants/Colors';
import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
// import { Text, View } from '../components/Themed';

export default function HomeScreen() {
  const { user } = useUser();

  //user could never be null, otherwise return null
  if(!user) return null;

  return (
    <View style={styles.container}>
      {/* Component */}
      <View style={styles.headerComplement}>
        <RoundImage height={128} width={128} url={`${user.avatar_url}`}/>
      </View>

      <FancyText text={`${ user.name? user.name.toUpperCase() : user.login }`}>
        <Text style={{color: Colors.colors.grey, fontWeight: '100', textAlign: 'left'}}>
          {user.email}{"\n"}
          {user.location}
        </Text>
      </FancyText>

      <SpotlighInfo data={[
        {
          label: 'Seguidores',
          info: user.followers
        },
        {
          label: 'Seguindo',
          info: user.following
        },
        {
          label: 'Repos',
          info: user.public_repos
        }
      ]}/>

      <FancyText text="BIO">
        <Text style={{color: Colors.colors.grey, fontWeight: '100', textAlign: 'left'}}>
          {
            user.bio? user.bio : 'Sem biografia'
          }
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
