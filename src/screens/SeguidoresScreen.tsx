import React, {useEffect, useState} from 'react';
import { StyleSheet, Image, View, Text, FlatList, ActivityIndicator} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { useUser } from '../context/userContext';
import { getFollowers } from '../service/api';

import Colors from '../constants/Colors';

//components
import Separator from '../components/Separator';
import UserCard from '../components/UserCard';


export default function SeguidoresScreen() {
  const { user } = useUser();
  const navigation = useNavigation();
  
  const [ isLoading, setIsloading ] = useState<boolean>(false);
  const [ followers, setFollowers ] = useState<Array<any> | null>(null);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    (async ()=>{
      await  handleList(1);
    })()
  }, []);

  useEffect(()=>{
    (async ()=>{
      await  handleList(1);
    })()
  }, [user]);

  async function handleList(page=1){
    setIsloading(true);
      try{
        if(!user) {return navigation.dispatch(StackActions.popToTop());};
        const res = await getFollowers(user.login, page);
        if(res!= null){
          setFollowers(res);
        }else{
          navigation.dispatch(StackActions.popToTop());
        }
      }catch(e){
        console.log('erro', e);
      }finally{
        setIsloading(false);
      }
  }

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
          Nenhum follower encontrado
        </Text>
      </View>
  
    )
  }

  const renderItem = ({ item, index }:{item:any, index:number|string}) => {
    //work on it to render with better performance
    return (
      // <ReposCard key={index} name={item.name} details={item.description} stars={item.stargazers_count}/>
      <UserCard 
        key={index}
        name={`${item.login}`}
        avatar={`${item.avatar_url}`}
        onPress={() => navigation.navigate('ProfileScreen', {login: item.login})}
      />
    );
  };

  return (
    <View style={styles.container}> 
      <FlatList 
        data={followers}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={EmptyList}
        // onEndReached={async (info)=>{
        //   await handleList(page);
        //   setPage(page + 1);
        // }}
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
