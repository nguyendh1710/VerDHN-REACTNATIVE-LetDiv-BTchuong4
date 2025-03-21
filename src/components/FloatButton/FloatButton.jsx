import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {styles} from './FloatButton.style';
import { LinearGradient } from 'expo-linear-gradient';



export default function FloatButton({onPress}) {
  if(onPress){
    console.log("hê")
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
      <LinearGradient
                colors={['#F76707', '#FF922B']}
                style={styles.gradient}
            >
        <Text>
        <Icon name="add" style={styles.icon} size={40} color="#FFFFFF" />
        </Text>
       
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}
