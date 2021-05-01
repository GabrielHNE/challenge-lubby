import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, TextInput, Image, Modal, ActivityIndicator, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

import { useUser } from '../context/userContext';
import { getUserByName } from '../service/api';

import Colors from '../constants/Colors';
import Button from '../components/Button';

const Logo = require('../../assets/images/adaptive-icon.png'); 

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function AuthScreen(){
    const { updateUser, isLoading, setLoading } = useUser();
    const [ showError, setShowError ] = React.useState<any>({status: false, msg: ''});
    // const [ isLoading, setIsLoading ] = React.useState<boolean>(false);

    const [user, setUser] = React.useState<string>('');

    async function handleSubmit(){
      if(!user){
        return setShowError({status: true, msg: 'Campo Obrigatório'});
      }

      setLoading(true);
      try{
        const authUser = await getUserByName(user);
        console.log(authUser);
        updateUser(authUser);
        setUser('');
      }catch(e){
        console.log('some error', e);
        setShowError({status: true, msg: 'Usuário não encontrado'});
      }finally{
        setLoading(false);
      }
    }

    function renderErrorMsg(){
      if(showError.status){
        return(
          <Text style={styles.errorContainer}>
            {showError.msg}
          </Text>
        );
      }
    }

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

    return(
      <View style={styles.container}>
        <Image style={styles.image} source={Logo} />
        <View style={styles.inputContainer}>
          
          <TextInput 
            style={styles.input}
            value={user}
            onChangeText={(val)=> {
              setShowError({status: false, msg: ''});
              setUser(val);
            }}
            placeholder="Usuário"
          />
          
          {
            renderErrorMsg()
          }

        </View>
        <Button 
          label=""
          customStyle={ styles.button }
          onPress={handleSubmit}
        >
          <Text style={styles.buttonLabel}>Entrar</Text>
          <AntDesign name="arrowright" size={30} color="black" />
        </Button>

        {
          showLoading()
        }
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.colors.background,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    alignMiddle:{
      flexDirection: 'column',
      height: '100%',
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red'
    },
    button:{
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.colors.yellow,
      width: '90%',
      marginVertical: 10
    },
    buttonLabel:{
      fontWeight: 'bold',
      fontSize: 28,
      marginRight: 10
    },
    image:{
      width: 256,
      height: 256
    },
    title: {
      color: '#ffff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    input:{
      backgroundColor: '#fff',
      width: '90%',
      height: 60,
      borderRadius: 10,
      paddingHorizontal: 16,
      fontSize: 25
    },
    inputContainer:{
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    errorContainer:{
      position: 'absolute',
      right: WIDTH*0.1,
      color: 'red'
    },
    modal:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000aa',
      
    }
  });
  