import * as React from 'react';
import { StyleSheet, Image, Text, View} from 'react-native';

import Colors from '../constants/Colors';

type Props = {
    text?: string;
    children?: React.ReactChild;
    componentFancy?: React.ReactNode ;
}

export default function FancyText(props: Props){
    return(
        <View>
            <View style={styles.fancyTextContainer}>
                <View style={styles.afterFancy}></View>
                {
                    props.componentFancy?
                        props.componentFancy
                    :
                        <Text style={styles.fancyText}>{props.text}</Text>
                }
            </View>

            {
                props.children?(
                    <View style={styles.fancyDescription}>
                        {props.children}
                    </View>
                ):
                (
                    <></>
                )
            }
        </View>
    );
} 

//I could've be done it better using styled-components :( srry
const styles = StyleSheet.create({
    fancyTextContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minWidth: '100%',
        minHeight: 50
    },
    afterFancy:{
        width: 10,
        position: 'relative',
        right: 0,
        height: '100%',
        marginRight: 12,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: Colors.colors.yellow
    },
    fancyText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.colors.white
    },
    fancyDescription:{
        marginLeft: 22,
        paddingRight: 10
    }
});