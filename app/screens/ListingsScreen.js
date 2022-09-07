import React from 'react';
import { FlatList } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';


const listings = [
{    id: 1,
    title: "Red jacket for sale",
    price: "$100",
    image: require("../assets/jacket.jpg")
},
{    id: 1,
    title: "Couch in great condition",
    price: "$1000",
    image: require("../assets/couch.jpg")
}
];


function ListingsScreen(props) {
    return (
        <Screen>
            <FlatList
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={item.price}
                        image={item.image}
                        />
                }
                 />
        </Screen>
    );
}

export default ListingsScreen;