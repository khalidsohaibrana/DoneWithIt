import React from 'react';
import { Image, View, StyleSheet, TouchableHighlight, } from 'react-native';
import colors from '../../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppText from '../AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function ListItem({image, IconComponent, chevronIcon, title, subTitle, onPress, renderRightActions,}) {
    return (
        
        <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions}>

        <TouchableHighlight 
          underlayColor={colors.light}
          onPress={onPress}
        >

            <View style={styles.container}>

                {IconComponent}
                {image && <Image style={styles.image} 
                source={image}/>}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1} ellipsizeMode="tail" >{title}  </AppText>
                    {subTitle && <AppText style={styles.subTitle} numberOfLines={2} ellipsizeMode="tail">{subTitle}</AppText>}
                </View>
                {chevronIcon &&
                <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={35}/>
                 }
            </View>
        </TouchableHighlight>
        </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles=StyleSheet.create({
    container:{
        //flexWrap:"wrap", 
        alignItems:"center",
        flexDirection:'row',
        padding:15,
        backgroundColor:colors.white,
    },
    detailsContainer:{
        //paddingTop:5, 
        flex:1,
        marginLeft:10,
        justifyContent:"center"
    },
    image:{
        borderRadius:35,
        width:70,
        height:70,
       // marginRight:10,
       // marginLeft:10
    },
    title:{
        fontWeight:"700",
    },
    subTitle:{
        color:colors.medium,
    },
})
export default ListItem;