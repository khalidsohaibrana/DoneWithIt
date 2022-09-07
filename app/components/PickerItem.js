import React from 'react';
import {StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';


function PickerItem({item, onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
    container:{
        padding:10
    },
    text:{
        padding:5,  
    }
})
export default PickerItem;