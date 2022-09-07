import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card({title, subTitle, image}) {
    return (
        <View style={styles.container}>
        <View style={styles.card}>
            <Image style={styles.imageStyle} source={image}></Image>

            <View style={styles.detailsContainer}>
           
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            

           </View>

        </View>

        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        
        backgroundColor:"#f8f4f4",
        padding:15,
        
       // paddingTop: Platform.OS === "android" ? 20 : 0,
      },

    card:{
        //paddingTop:100,
        borderRadius:15,
       // width:"100%",
        backgroundColor:colors.white,
        //marginBottom:10,
        overflow:'hidden'
    },
    detailsContainer:{
        padding:20,
        //margin:20,
       // borderRadius:20,
       // backgroundColor:colors.white,
    },

    imageStyle:{
        //marginBottom:15,
        width:"100%",
        resizeMode:'cover',
        height:200,
    },
    title:{
        color:colors.black,
        marginBottom:7,
    },
    subTitle:{
        color:colors.secondary,
        fontWeight:"bold",

    },


})
export default Card;