import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import ListItem from '../components/lists/ListItem';
import AppText from '../components/AppText';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/jacket.jpg")}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
            </View>
            <View style={styles.userContainer}>
            
            <ListItem
                image={require("../assets/mosh.jpg")}
                title="Mosh Hamedani"
                subTitle="5 Listings"

            /> 

            </View>

        </View>
        
    );
}

const styles = StyleSheet.create({
    image:{
       width:"100%",
       height:300,
    },
    detailsContainer:{
        padding:20,
    },
    title:{
        fontSize:24,
       
        fontWeight:"500",
    },
    price:{
        marginVertical:10,
        fontWeight:"bold",
        color:colors.secondary,
        fontSize:20,
    },
    userContainer:{
        marginVertical:10,
    },
})
export default ListingDetailsScreen;