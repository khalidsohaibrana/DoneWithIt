import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import  {AppForm, AppFormField, SubmitButton} from '../components/forms/index';
import Screen from '../components/Screen';



function LoginScreen(props) {

const validationSchema = Yup.object().shape({
    email : Yup.string().required().email().label("Email"),
    password : Yup.string().required().min(4).label("Password")
});
    return (
        <Screen>
            <Image source={require("../assets/logo-red.png")} style={styles.logo}/>

            <Screen style={styles.container}>
                <AppForm
                    initialValues={{email:"", password:""}}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                                <AppFormField
                                    autoCorrect={false} 
                                    autoCapitalize={false}
                                    icon="email"
                                    name="email"
                                    keyboardType="email-address"
                                    placeholder="Email"
                                    textContentType="emailAddress"
                                />
                                
                                <AppFormField
                                    autoCorrect={false} 
                                    autoCapitalize={false}
                                    icon="lock"
                                    name="password"
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    textContentType="password"
                                />
                               
                                <SubmitButton  title='Login' />
                           
                </AppForm>

                
            </Screen>


        </Screen>
    );
}

 const styles =StyleSheet.create({
    logo:{
        width:70,
        height:70,
        alignSelf:"center",
        marginTop:50,
        marginBottom:20
        },
    container:{
        padding:10,
        },

 })
export default LoginScreen;