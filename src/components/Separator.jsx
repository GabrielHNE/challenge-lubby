import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

export default function Separator(){
    return(
      <View style={styles.separator} />
    );
}

const styles = StyleSheet.create({
    separator: {
      marginVertical: 40,
      height: 1,
      width: '100%',
      backgroundColor: Colors.colors.greyLight
    },
});