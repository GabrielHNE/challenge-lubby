import * as React from 'react';
import { StyleSheet, Image, Text, View} from 'react-native';

import Colors from '../constants/Colors';

type Props = {

};

export default function SpotlighInfo(props: Props){
    return(
        <View style={styles.infosSpotlightContainer}>
            {/*Seguidores*/}
            <View style={styles.infoContainer}>
                <Text style={styles.infoNumber}>32</Text>
                <Text style={styles.infoText}>Seguidores</Text>
            </View> 
            
            {/*Seguindo*/}
            <View style={styles.infoContainer}>
                <Text style={styles.infoNumber}>32</Text>
                <Text style={styles.infoText}>Seguindo</Text>
            </View>
            
            {/*Repos*/}
            <View style={styles.infoContainer}>
                <Text style={styles.infoNumber}>10</Text>
                <Text style={styles.infoText}>Repos</Text>
            </View>
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