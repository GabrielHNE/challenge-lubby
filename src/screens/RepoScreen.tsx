import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, Modal, ActivityIndicator} from 'react-native';
import { getRepos } from '../service/api';
import { useUser } from '../context/userContext';
import Colors from '../constants/Colors';
import  { Repo } from '../../types';
//components
import ReposCard from '../components/ReposCard';
import Separator from '../components/Separator';

export default function RepoScreen() {
  const { user } = useUser();
  const [ repos, setRepos ] = useState<Array<Repo> | null>(null);
  const [ isLoading, setIsloading ] = useState<boolean>(false);

  if(!user) return null;

  //maybe save it or call it on login?
  useEffect(()=>{
    (async ()=>{
      setIsloading(true);
      try{
        const res = await getRepos(user.login);
        setRepos(res);
      }catch(e){
        console.log('oiioi', e);
      }finally{
        setIsloading(false);
      }
    })()
  }, []);

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
          Sem repositórios
        </Text>
      </View>
  
    )
  }

  const renderItem = ({ item, index }:{item:Repo, index:number|string}) => {
    return (
      <ReposCard key={index} name={item.name} details={item.description} stars={item.stargazers_count}/>
    );
  };

  return (
    <View style={styles.container}>
      
      <FlatList 
        data={repos}
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
  }
});
