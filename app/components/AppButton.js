import React from 'react';
import {  StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({title, onPress, color="primary", style}) {
    return (
       <TouchableOpacity style={[styles.button, {backgroundColor:colors[color]}]} onPress={onPress}>
        <Text style={[styles.text, style]}>{title}</Text>
       </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    
    button:{
       backgroundColor:colors.primary,
       borderRadius:25, 
       justifyContent:'center',
       alignContent:'center',
       alignItems:'center',
       padding:15,
       width:"100%",
       marginVertical:10,

    },
    text:{
        color:colors.white,
        fontSize:18,
        textTransform:"uppercase",
        fontWeight:"bold"
    }

})
export default AppButton;