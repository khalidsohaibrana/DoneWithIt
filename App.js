import React from 'react';
import { StyleSheet} from 'react-native';
import ListingEditScreen from './app/screens/ListingEditScreen';

 import AppText from './app/components/AppText';
import colors from './app/config/colors';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import WelcomScreen from './app/screens/WelcomScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingScreen from './app/screens/ListingScreen'
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import ListItem from './app/components/lists/ListItem';
import MyAccountScreen from './app/screens/MyAccountScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker'; 
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen'; 


export default function App() {
  /* const [Category, setCategory] = useState();
  
  const catogories=[
    {label: "Furniture", value: 1},
    {label: "Clothing", value: 2},
    {label: "Cameras", value:3},
      
  ]; */
  return( 
/*       <Screen>

          <AppPicker 
            selectedItem={Category}
            onSelectItem={(item) => setCategory(item)}
            items={catogories} placeholder={"Category"} icon="apps"  />

          <AppTextInput placeholder="username" icon='email' />
      </Screen> */
      

    //<WelcomScreen/>
    //<ListingDetailsScreen/>
    //<ViewImageScreen/>
    //<MessagesScreen/>
    //--Raw-- <MyAccountScreen/>
    //<AccountScreen/>
    //--Raw-- <ListingScreen/>
    //<ListingsScreen/>
    //<LoginScreen/>
    // --Raw--
     //<RegisterScreen/>
    <ListingEditScreen/>


  );
}



const styles = StyleSheet.create({
  container: {
   paddingTop: Platform.OS === "android" ? 20 : 0,
  },

});
