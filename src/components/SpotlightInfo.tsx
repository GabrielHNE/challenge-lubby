import * as React from 'react';
import { StyleSheet, Image, Text, View} from 'react-native';

import Colors from '../constants/Colors';

type dataInfo = {
  label: string;
  info: string | number;
}

type Props = {
  data: Array<dataInfo>;
};

export default function SpotlighInfo(props: Props){

  function renderDatas(){
    const datas = props.data;

    return datas.map((data, index)=>{
      return(
        <View key={index} style={styles.infoContainer}>
          <Text style={styles.infoNumber}>{data.info}</Text>
          <Text style={styles.infoText}>{data.label}</Text>
        </View>
      );
    })
  }

  if(props.data.length === 0) return null;

  return(
      <View style={styles.infosSpotlightContainer}>
          {
            renderDatas()
          }
      </View>
  );
}

const styles = StyleSheet.create({
    infosSpotlightContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: Colors.colors.greyLight,
        width: '100%',
        height: 90,
				marginVertical: 30
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
      }
});