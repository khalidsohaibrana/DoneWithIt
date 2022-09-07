import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';
import Screen from './Screen';

function CategoryPickerItem({item, onPress}) {
    return (
        <Screen>

        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon backgroundColor={item.color} name={item.icon} size={80} />
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        paddingVertical:5,
        alignItems:"center",

    },
    text:{
        flex:1,
        maxWidth:100,
        textAlign:"center"
           }
    
})
export default CategoryPickerItem;