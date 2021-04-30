import * as React from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../../screens/HomeScreen';
import RepoScreen from '../../screens/RepoScreen';
import SeguidoresScreen from '../../screens/SeguidoresScreen';
import SeguindoScreen from '../../screens/SeguindoScreen';
import ProfileScreen from '../../screens/ProfileScreen';


import Button from '../../components/Button';
function LogoTitle(props:any) {
  return (
    // <Image
    //   style={{ width: 50, height: 50, backgroundColor: 'pink'}}
    //   source={require('../../../assets/images/adaptive-icon.png')}
    // />
    <></>
  );
}

function SignOutHeader(props: any){
  return(
    <>
      <Button customStyle={{
          flexDirection:'row',
            alignItems:'center',
            justifyContent: 'flex-end',
            width: 100
          }}
          onPress={()=>{Alert.alert('Signout?')}}
      >
        <Text style={{ 
            color:'white',
            fontSize: 20,
            textAlign: 'center',
            marginRight: 5
          }}
        >
          Sair
        </Text>
        <MaterialIcons name="logout" size={24} color="red" />
      </Button>
      
    </>
  );
}

function UserNameHeader(props:any){
  return (
    <Text
      style={{ 
        color:'white',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 5
      }}
    >
      #anilton.veiga
    </Text>
  );
}

function BackButtonHeader(props:any){
  const navigate = useNavigation();
  return <HeaderBackButton
    {...props}
    onPress={() => {
      navigate.goBack();
    }}
  />
}


const HomeStack = createStackNavigator();

export function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ 
          headerStyle:{
            backgroundColor: '#1F1F1F',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0,
          },
          headerTitleAlign: 'center',
          headerTitle: props => <LogoTitle {...props}/>,
          headerLeft: props => <UserNameHeader {...props}/>,
          headerLeftContainerStyle:{
            alignItems:'center',
            justifyContent: 'center',
            padding: 8
          },
          headerRight: props => <SignOutHeader {...props}/>,
          headerRightContainerStyle:{
            alignItems:'center',
            justifyContent: 'center',
            padding: 8
          }
        }}
      />
    </HomeStack.Navigator>
  );
}

const ReposStack = createStackNavigator();

export function RepoNavigator() {
  return (
    <ReposStack.Navigator>
      <ReposStack.Screen
        name="RepoScreen"
        component={RepoScreen}
        options={{
          headerStyle:{
            backgroundColor: '#1F1F1F',
          },
          headerBackAccessibilityLabel:"Voltar",
          headerLeft: props => BackButtonHeader(props)
        }}
      />
    </ReposStack.Navigator>
  );
}

const SeguidoresStack = createStackNavigator();

export function SeguidoresNavigator() {
  return (
    <SeguidoresStack.Navigator>
      <SeguidoresStack.Screen
        name="SeguidoresScreen"
        component={SeguidoresScreen}
        options={{
          headerStyle:{
            backgroundColor: '#1F1F1F',
          },
          headerBackAccessibilityLabel:"Voltar",
          headerLeft: props => BackButtonHeader(props)
        }}
      />

      <SeguidoresStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerStyle:{
            backgroundColor: '#1F1F1F',
          },
          headerBackAccessibilityLabel:"Voltar",
          headerLeft: props => BackButtonHeader(props)
        }}
      />  
    </SeguidoresStack.Navigator>
  );
}

const SeguindoStack = createStackNavigator();

export function SeguindoNavigator() {
  return (
    <SeguindoStack.Navigator>
      <SeguindoStack.Screen
        name="SeguindoScreen"
        component={SeguindoScreen}
        options={{
          headerStyle:{
            backgroundColor: '#1F1F1F',
          },
          headerBackAccessibilityLabel:"Voltar",
          headerLeft: props => BackButtonHeader(props)
        }}
      />

      <SeguidoresStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerStyle:{
            backgroundColor: '#1F1F1F',
          },
          headerBackAccessibilityLabel:"Voltar",
          headerLeft: props => BackButtonHeader(props)
        }}
      />    
    </SeguindoStack.Navigator>
  );
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab