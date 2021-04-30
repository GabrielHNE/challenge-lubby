import React, { useState, ReactNode } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// <FontAwesome name="fire" size={32} color="white"/>
//             <FontAwesome name="tint" size={32} color="white"/>

import styles from './styles';

interface Props {
	label?: string;
	customStyle?: any;
	children?: ReactNode;
	onPress?: any;
}

const Button: React.FC<Props> = ({
	label,
	onPress,
	customStyle,
	children,
}: Props) => {

	function isLabel(){
		if(label){
			return (
				<Text>{label}</Text>
			)
		}
	}

	return (
		<TouchableOpacity
			style={[styles.button, customStyle ? customStyle : {}]}
			onPress={onPress}
		>
			{children}
			{isLabel()}
		</TouchableOpacity>
	);
};

export default Button;
