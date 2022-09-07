import React from 'react';
import {Platform, StyleSheet, TextInput, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import defaultStyles from '../config/styles'

function AppTextInput({icon, width, ...otherProps}) {
    return (
        <View style={[styles.container , {width:width} ]}>
            {icon && <MaterialCommunityIcons name={icon} size={25} color={defaultStyles.colors.medium} style={styles.icon}  />}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.light,
        borderRadius:25,
        flexDirection:"row", 
        padding:15,
        marginVertical:10,
        
    },
   
    icon:{
        marginRight:10,

    },
    
})
export default AppTextInput;