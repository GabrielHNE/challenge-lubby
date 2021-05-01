import React, {useEffect, useState} from 'react';
import { StyleSheet, Image, View, Text, FlatList, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../context/userContext';
import { getFollowingAsUsers } from '../service/api';
import { User } from '../../types';

import Colors from '../constants/Colors';

//components
import FancyText from '../components/FancyText';
import Separator from '../components/Separator';
import UserCard from '../components/UserCard';


export default function SeguindoScreen() {
  const { user } = useUser();
  const navigation = useNavigation();
  
  const [ isLoading, setIsloading ] = useState<boolean>(false);
  const [ following, setFollowing ] = useState<Array<User> | null>(null);

  if(!user) return null;

  useEffect(()=>{
    (async ()=>{
      setIsloading(true);
      try{
        const res = await getFollowingAsUsers(user.login);
        // console.log('getFollowingAsUsers', res);
        setFollowing(res);
      }catch(e){
        console.log('oiioi', e);
      }finally{
        setIsloading(false);
      }
    })()
  }, []);

  useEffect(()=>{
    (async ()=>{
      setIsloading(true);
      try{
        const res = await getFollowingAsUsers(user.login);
        // console.log('getFollowingAsUsers', res);
        setFollowing(res);
      }catch(e){
        console.log('oiioi', e);
      }finally{
        setIsloading(false);
      }
    })()
  }, [user]);

  function showLoading(){
    return(
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={Colors.colors.yellow}/>
      </View>
    );
  }

  function EmptyList(){
    if(isLoading){
      return showLoading();
    }

    return(
      <View 
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text 
          style={{
            color: 'white',
            fontSize:32,
            fontWeight: 'bold'
          }}
        >
          Não está seguindo ninguem
        </Text>
      </View>
  
    )
  }

  const renderItem = ({ item, index }:{item:User, index:number|string}) => {
    return (
      // <ReposCard key={index} name={item.name} details={item.description} stars={item.stargazers_count}/>
      <UserCard 
        key={index}
        name={`${item.login}`}
        avatar={`${item.avatar_url}`}
        onPress={() => navigation.navigate('ProfileScreen')}
      />
    );
  };

  return (
    <View style={styles.container}>
      
      
      <FlatList 
        data={following}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.colors.background,
    paddingTop: 50
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});