import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import AppText from '../components/AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from '../components/Icon';


function MyAccountScreen(props) {
    return (
        
        <Screen style={styles.container}>

                <View style={styles.accContainer}>
                    <Image style={styles.image} 
                    source={require("../assets/khalid.jpg")}/>
                    <View style={{paddingTop:5,}}>
                        <AppText style={styles.title}>Khalid Sohaib Rana</AppText>
                        <AppText style={styles.subTitle}>khalidsohaibrana@gmail.com</AppText>
                    </View>
                </View>
            <View style={styles.listContainer}>
                <View style={styles.listing}>
                    <MaterialCommunityIcons name='format-list-bulleted' size={30} color={colors.white} />
                </View> 
                <AppText style={[styles.title,styles.listText]}>My Listings</AppText>  

            </View>
            <View style={styles.listContainer}>
                <View style={[styles.listing, {backgroundColor:colors.secondary}]}>
                    <MaterialCommunityIcons name='email' size={30} color={colors.white} />
                </View> 
                <AppText style={[styles.title,styles.listText]}>My Messages</AppText>  

            </View>

            <View style={[styles.listContainer,{marginTop:20}]}>
                <View style={[styles.listing, {backgroundColor:"#ffe66d"}]}>
                    <MaterialCommunityIcons name='logout' size={30} color={colors.white} />
                </View> 
                <AppText style={[styles.title,styles.listText]}>Log Out</AppText>  

            </View>
            
        </Screen>
            
        
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.light,
    },
    accContainer:{
        //flexWrap:"wrap", 
        marginTop:25,
        marginBottom:30,
        flexDirection:'row',
        padding:15,
        backgroundColor:colors.white
    },
    image:{
        borderRadius:35,
        width:70,
        height:70,
        marginRight:10,
        marginLeft:10
    },
    title:{
        fontWeight:"700",
    },
    subTitle:{
        color:colors.medium,
    },
    listContainer:{
        backgroundColor:colors.white,
        width:"100%",
        flexDirection:"row",
        padding:10,
        marginBottom:1,
        alignItems:"center"
    },
    listing:{
        borderRadius:25,
        width:50,
        height:50,
        backgroundColor:colors.primary,
        alignItems:"center",
        justifyContent:"center",
    },
    listText:{
        marginLeft:10,   
    },

})
export default MyAccountScreen;