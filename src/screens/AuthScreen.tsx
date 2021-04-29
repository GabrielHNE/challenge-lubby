import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, TextInput, Image, Alert} from 'react-native';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import Button from '../components/Button';

const Logo = require('../../assets/images/adaptive-icon.png'); 

export default function AuthScreen(){

    return(
      <View style={styles.container}>
        <Image style={styles.image} source={Logo} />
        <TextInput 
          style={styles.input}
          placeholder="Usuário"
        />
        <Button label="" customStyle={ styles.button } onPress={()=>{Alert.alert('yeyyrgegy')}}>
          <Text style={styles.buttonLabel}>Entrar</Text>
          <AntDesign name="arrowright" size={30} color="black" style={{}} />
        </Button>
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
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
  