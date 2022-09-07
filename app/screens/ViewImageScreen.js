import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import WelcomScreen from './WelcomScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ViewImageScreen(props) {
    
    return (
        
      <View style={styles.container}>

          <View  style={styles.closeButton}>
            <MaterialCommunityIcons name="close" size={35} color={colors.white} /> 
          </View>

          <View style={styles.deleteButton}>
            <MaterialCommunityIcons  name="trash-can-outline" size={35} color={colors.white} />
          </View>

          

          <Image style={styles.image} source={require("../assets/chair.jpg")}></Image>
          
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? 20 : 0,
        backgroundColor:colors.black

    },
    closeButton:{
        position:'absolute',
        top:40,
        right:30,
       // backgroundColor:colors.primary
    },
    deleteButton:{
        position:'absolute',
        top:40,
        left:30,
       // backgroundColor:colors.secondary
    },
    image: {
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
})

export default ViewImageScreen;