import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/AppButton';

function WelcomScreen(props) {
    return (
        <ImageBackground 
        blurRadius={5}
        style={styles.background} 
        source={require('../assets/background.jpg')}>
         <View style={styles.logoContainer}>
            <Image style={styles.logoImage} source={require('../assets/logo-red.png')}></Image>
            <Text style={styles.tagLine}>Sell things that you don't need</Text>
         </View>

         <View style={styles.buttonContainer}>
         <AppButton title="login" onPress={()=> console.log("Tapped")}/>
            
         <AppButton title="register" color='secondary' onPress={()=> console.log("register")}/>
            
         </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        paddingTop: Platform.OS === "android" ? 20 : 0,
        flex:1,
        resizeMode:"cover",
        justifyContent:"flex-end",
        alignItems:"center"
    },

    logoContainer:{
        position:"absolute",
        top:100,
        alignItems:"center"
    },
    buttonContainer:{
        padding:20,
        width:"100%"

    },

    logoImage:{
        width:70,
        height:70,
        
    },
    tagLine:{
        fontSize:20,
        fontWeight:"600",
        paddingVertical:20,
    },
    
})

export default WelcomScreen;