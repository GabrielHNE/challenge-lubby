import * as React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useUser } from '../context/userContext';

import Colors from '../constants/Colors';

import FancyText from './FancyText';
import RoundImage from './RoundImage';


type Props = {
    name: string | null;
    avatar: string | null;
    onPress: any;
}

export default function UserCard(props: Props){
    function Seguidor(){
        return(
            <View 
                style={{
                width: '90%',
                flexDirection: 'row',
                alignItems:'center',
                justifyContent: 'space-between'
                }}
            >
                <View 
                style={{
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent: 'space-between'
                }}
                >
                <RoundImage 
                    height={64} 
                    width={64}
                    url={`${props.avatar}`}
                />
                <Text 
                    style={{
                    color:'white',
                    fontSize: 26,
                    fontWeight: 'bold',
                    marginLeft: 12
                    }}
                >
                    {props.name}
                </Text>
                </View>
                <AntDesign 
                name="arrowright"
                size={24}
                color="white"
                />
            </View>
        );
      } 

    return(
        <TouchableOpacity
            onPress={props.onPress}    
        >
            <FancyText
                componentFancy={<Seguidor />}
            />
        </TouchableOpacity>
    );
}

