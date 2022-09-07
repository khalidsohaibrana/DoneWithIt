import React, {useState} from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../components/lists/ListItem';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';

const IntialMessages=[
    {
        id:1,
        title:"T1",
        description:"D1",
        Image: require("../assets/mosh.jpg")
    },
    {
        id:2,
        title:"T2",
        description:"D2",
        Image: require("../assets/mosh.jpg")
    },
    {
        id:3,
        title:"T3",
        description:"D3",
        Image: require("../assets/mosh.jpg")
    },
];


function MessagesScreen(props) {

    const [messages, setMessages] = useState(IntialMessages);
    const [refreshing, setRefreshing] = useState(false);
   
    const handleDelete = message => {
        setMessages(messages.filter((m)=> m.id !== message.id)); 
    }


    
    return (
        <Screen>

            <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => (
            <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.Image}
            chevronIcon={true}
            onPress={()=> console.log( "Message Selected",item)}
            renderRightActions={()=> (
            <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            />
            )}

            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id:1,
                        title:"Lorem Ipsum is simply dummy text of the printing and typesetting ",
                        description:"Lorem Ipsum is simply dummy text of the printing and typesetting ",
                        Image: require("../assets/khalid.jpg")
                    },
                    {
                        id:2,
                        title:"T2",
                        description:"D2",
                        Image: require("../assets/khalid.jpg")
                    },
                    {
                        id:3,
                        title:"T3",
                        description:"D3",
                        Image: require("../assets/mosh.jpg")
                    },

                ])
            }}
    
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
   
})
export default MessagesScreen;