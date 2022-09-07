import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItemSeparator from '../components/lists/ListItemSeparator'

const menuItems =[
    {
        title:"My Listings",
        icon:{
            name:'format-list-bulleted', 
            backgroundColor:colors.primary
        }
    },
    {
        title:"My Messages",
        icon:{
            name:'email' ,
            backgroundColor:colors.secondary
        }
    }

]  

function AccountScreen(props) {
    return (
       
                <Screen style={styles.screen}>
                    <View style={styles.container} >
                        <ListItem
                            title="Khalid Sohaib"
                            subTitle="khalidsohaibrana@gmail.com"
                            image={require("../assets/khalid.jpg")} />
        
                    </View>
        
                    <View style={styles.container} >
                        <FlatList
                            data={menuItems}
                            keyExtractor={menuItems => menuItems.title}
                            ItemSeparatorComponent={ListItemSeparator}
                            renderItem={({ item }) =>
                                <ListItem
                                    title={item.title}
                                    IconComponent={
                                        <Icon
                                            name={item.icon.name}
                                            backgroundColor={item.icon.backgroundColor} 
                                        />
                                    }
                                    />
                            } />
                    </View>
                    <ListItem
                        title={"Log Out"}
                        IconComponent={
                            <Icon name="logout" backgroundColor="#ffe66d" />
                        }
                        />
                        
            </Screen>
        
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.light,
    },
    container:{
        marginVertical:20,
        backgroundColor:colors.white,
        
    }
})
export default AccountScreen;