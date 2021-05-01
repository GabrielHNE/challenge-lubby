import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather, AntDesign   } from '@expo/vector-icons';

import Colors from '../constants/Colors';

//component
import FancyText from './FancyText';

type Props = {
    name: string;
    details: string | null;
    stars: number | string;
};

export default function ReposCard(props: Props){
    return(
        <FancyText
          text={props.name}
        >
            <View>
                <Text style={{ color: Colors.colors.grey }}>
                    {props.details}
                </Text>

                <View 
                    style={styles.repoDetails}
                >
                    <View style={styles.rowCenter}>
                        <Feather name="star" size={24} color="yellow" />
                        <Text style={styles.starsText}>
                            {props.stars}
                        </Text>
                    </View>
                    <View style={styles.rowCenter}>
                        <AntDesign name="unlock" size={24} color="green" />
                        <AntDesign name="lock1" size={24} color="red" />
                    </View>
                </View>
            </View>
        </FancyText>
    );
}

const styles = StyleSheet.create({
    starsText:{
        marginLeft: 5,
        color: 'white',
        fontSize: 18
    },
    repoDetails:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    rowCenter:{
        flexDirection: 'row',
        alignItems:'center'
    }
});