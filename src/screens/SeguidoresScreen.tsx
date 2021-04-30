import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//components
import { Text, View } from '../components/Themed';
import Button from '../components/Button';

export default function SeguidoresScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Button 
        label="Go to Profile"
        onPress={()=>{
          navigation.navigate('ProfileScreen')
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
