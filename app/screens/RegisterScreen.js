import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import  {AppForm, AppFormField, SubmitButton} from '../components/forms/index';
import Screen from '../components/Screen';

function RegisterScreen(props){
    
    const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email : Yup.string().required().email().label("Email"),
    password : Yup.string().required().min(4).label("Password")
});
    return (
        <Screen>
           

            <Screen style={styles.container}>
                <AppForm
                    initialValues={{name:"", email:"", password:""}}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                                <AppFormField
                                    autoCorrect={false} 
                                    icon="account"
                                    name="name"
                                    keyboardType="default"
                                    placeholder="Name"
                                    
                                />

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
                               
                                <SubmitButton  title='REGISTER' />
                           
                </AppForm>

                
            </Screen>


        </Screen>
    );
}

 const styles =StyleSheet.create({
    container:{
        padding:10,
        },

 })
export default RegisterScreen;