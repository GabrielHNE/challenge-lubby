import * as React from 'react';
import { View, StyleSheet, Image, TextPropTypes } from 'react-native';

import Colors from '../constants/Colors';

type Props = {
    url: string | null;
    width: string | number;
    height: string | number;
}

export default function RoundImage(props: Props){

    return(
        <Image style={[styles.image, {width: props.width, height: props.height} ]}source={{uri: `${props.url}`}}/>
    );
}

const styles = StyleSheet.create({
    image:{
        borderRadius: 100,
        borderWidth: 2,
        borderColor: Colors.colors.white
      }
});