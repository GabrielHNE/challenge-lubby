import * as React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { Feather, AntDesign   } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import FancyText from '../components/FancyText';
import SpotlighInfo from '../components/SpotlightInfo';
const REPOS = [
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  },
  {
    text: 'brasiliapp-react-native'
  }
];

export default function RepoScreen() {

  const renderItem = ({ item, index }:any) => {
    return (
      <>
        <FancyText
          key={index}
          text={item.text}
        >
          <>
            <Text style={{color:'grey'}}>
              Repository for centralization of the BrasiliApp{"\n"}
              Mobile Project
            </Text>
            <View 
              style={{
                flexDirection: 'row',
                alignItems:'center',
                justifyContent: 'space-between',
                marginTop: 10
              }}
            >
              <View  style={{
                  flexDirection: 'row',
                  alignItems:'center'
                }}
              >
                <Feather name="star" size={24} color="yellow" />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18
                  }}
                >
                  32
                </Text>
              </View>
              <View  style={{
                  flexDirection: 'row',
                  alignItems:'center'
                }}
              >
                <AntDesign name="unlock" size={24} color="green" />
                <AntDesign name="lock1" size={24} color="red" />
              </View>

            </View>
          </>
        </FancyText>

        <View style={styles.separator} />
        
      </>
    );
  };

  return (
    <View style={styles.container}>
      
      <FlatList 
        data={REPOS}
        renderItem={renderItem}
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
  separator: {
    marginVertical: 40,
    height: 1,
    width: '100%',
    backgroundColor: Colors.colors.greyLight
  },
});
