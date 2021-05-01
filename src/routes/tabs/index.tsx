import * as React from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/stack';
import { useNavigation, StackActions } from '@react-navigation/native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

import HomeScreen from '../../screens/HomeScreen';
import RepoScreen from '../../screens/RepoScreen';
import SeguidoresScreen from '../../screens/SeguidoresScreen';
import SeguindoScreen from '../../screens/SeguindoScreen';
import ProfileScreen from '../../screens/ProfileScreen';

import { useUser } from '../../context/userContext';

import Button from '../../components/Button';
function LogoTitle(props:any) {

  return (
    <Text
      style={{
        maxWidth: 150,
        color: 'white',
        fontSize: 16,
        alignItems: 'center'
      }}
    >
      #{props.route.params.user.login}
    </Text>
    
  );
}

function InfoTitle(props:any){
  const {user} = useUser();

  switch(props.title){
    case 'Repositórios':{
      return (
        <Text
          style={{
            maxWidth: 150,
            color: 'white',
            fontSize: 16,
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          {user?.public_repos} {props.title}
        </Text>
      );
    }
    case 'Seguidores':{
      return (
        <Text
          style={{
            maxWidth: 150,
            color: 'white',
            fontSize: 16,
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          {user?.followers} {props.title}
        </Text>
      );
    }
    case 'Seguindo':{
      return (
        <Text
          style={{
            maxWidth: 150,
            color: 'white',
            fontSize: 16,
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          {user?.following} {props.title}
        </Text>
      );
    }
  }
  
  return <></>;
}
//gambiarrinha
function LogoNoTitle(props: any){
  return <></>;
}

function SignOutHeader(props: any){
  const{ signOut} = useUser();
  return(
    <>
      <Button customStyle={{
          flexDirection:'row',
            alignItems:'center',
            justifyContent: 'flex-end',
            width: 100
          }}
          onPress={signOut}
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

function SaveUser(props: any){
  const { user, updateUser } = useUser();
  return(
    <>
      <Button customStyle={{
          flexDirection:'row',
            alignItems:'center',
            justifyContent: 'flex-end',
            width: 100
          }}
          onPress={()=>{
            if(props.route.params){
              updateUser(props.route.params.user);
              // props.navigation.navigate('Home');
              props.navigation.dispatch(StackActions.popToTop());
            }
          }}
      >
        <Text style={{ 
            color:'white',
            fontSize: 20,
            textAlign: 'center',
            marginRight: 5
          }}
        >
          Salvar
        </Text>
        <Feather name="log-in" size={24} color="green" />
      </Button>
      
    </>
  );
}

function UserNameHeader(props:any){
  const { user } = useUser();
  return (
    <Text
      style={{ 
        color:'white',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 5,
        maxWidth:  150,
        overflow: 'hidden'
      }}
    >
      #{user?.login}
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
          headerTitle: props => <LogoNoTitle {...props}/>,
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
          headerTitleAlign: 'center',
          headerTitle: (props) => <InfoTitle {...props} title="Repositórios"/>,
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
          headerTitleAlign: 'center',
          headerTitle: (props) => <InfoTitle {...props} title="Seguidores"/>,
          headerBackAccessibilityLabel:"Voltar",
          headerLeft: props => BackButtonHeader(props)
        }}
      />

      <SeguidoresStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={( props )=>({
            headerStyle:{
              backgroundColor: '#1F1F1F',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0,
            },
            headerTitleAlign: 'center',
            headerTitle: () => <LogoTitle {...props}/>,
            headerBackAccessibilityLabel:"Voltar",
            headerLeft: props => BackButtonHeader(props),
            headerRight: () => <SaveUser {...props}/>,
            headerRightContainerStyle:{
              alignItems:'center',
              justifyContent: 'center',
              padding: 8
            }
          })
        }
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
          headerTitleAlign: 'center',
          headerTitle: (props) => <InfoTitle {...props} title="Seguidores"/>,
          headerBackAccessibilityLabel:"Voltar",
          headerLeft: props => BackButtonHeader(props)
        }}
      />

      <SeguidoresStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={( props )=>({
            headerStyle:{
              backgroundColor: '#1F1F1F',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0,
            },
            headerTitleAlign: 'center',
            headerBackAccessibilityLabel:"Voltar",
            headerLeft: props => BackButtonHeader(props),
            headerRight: () => <SaveUser {...props}/>,
            headerRightContainerStyle:{
              alignItems:'center',
              justifyContent: 'center',
              padding: 8
            }
          })
        }
      />    
    </SeguindoStack.Navigator>
  );
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab