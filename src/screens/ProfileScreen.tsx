import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, ActivityIndicator, Modal} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { User } from '../../types';
import { getUserByName } from '../service/api';
import { useUser } from '../context/userContext';

//components
import FancyText from '../components/FancyText';
import SpotlighInfo from '../components/SpotlightInfo';

import Colors from '../constants/Colors';
// import { Text, View } from '../components/Themed';

export default function ProfileScreen(props:any) {
  const navigation = useNavigation();
  const { setTmpUser } = useUser();
  const [someone, setSomeone] =  useState<User | null>(null);
  const [isLoading, setIsLoading] =  useState<boolean>(false);


  useEffect(()=>{
    
    (async()=>{
      if(props.route.params.login){
        setIsLoading(true);
        try{
          const res = await getUserByName(props.route.params.login);
          if(res){ 
            setSomeone(res);
            setTmpUser(res);
          }
          else{ 
            navigation.dispatch(StackActions.popToTop());
          }
        } catch(e){
          console.log(e);
        } finally{
          setIsLoading(false);
        }
      }else{
        //go to home and destroy all the other pages
        navigation.dispatch(StackActions.popToTop());
      }
    })()
      
  },[]);

  function showLoading(){
    return(
      <Modal
        animationType="fade"
        transparent={true}
        visible={isLoading}
      >
        <View style={styles.modal}>
          <ActivityIndicator size="large" color={Colors.colors.yellow}/>
        </View>
      </Modal>
    );
  }

  return (
    <View style={styles.container}>
      {/* Component */}
      <View style={styles.headerComplement}>
          <Image style={styles.headerComplImage}source={{uri:`${someone?.avatar_url}`}}/>
      </View>

      <FancyText text={someone?.name? someone?.name : someone?.login}>
        <Text style={{color: Colors.colors.grey, fontWeight: '100', textAlign: 'left'}}>
          {someone?.email}{'\n'}
          {someone?.location}
        </Text>
      </FancyText>

      <SpotlighInfo
        data={[
          {
            label: 'Seguidores',
            info: someone?.followers? someone?.followers : 0
          },
          {
            label: 'Seguindo',
            info: someone?.following? someone?.following : 0
          },
          {
            label: 'Repos',
            info: someone?.public_repos? someone?.public_repos : 0
          }
        ]}
      />

      <FancyText text="BIO">
        <Text style={{color: Colors.colors.grey, fontWeight: '100', textAlign: 'left'}}>
          {someone?.bio}
        </Text>
      </FancyText>

      {
        showLoading()
      }
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
  },
  modal:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000aa',
    
  }
  
});
