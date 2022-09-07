import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title : Yup.string().min(1).label("Title"),
    price : Yup.number().min(1).max(10000).label("Price"),
    description : Yup.string().label("Description"),
    category: Yup.object().nullable().label("Category")
});

const categories=[
{label: "Furniture", color:"#fc5c65", icon:"floor-lamp", value: 1}, 
{label: "Cars", color:"#fd9644", icon:"car", value: 2},
{label: "Cameras",color:"#fed330", icon:"camera", value:3},
{label: "Games",color:"#26de81", icon:"cards", value:4},
{label: "Clothing",color:"#2bcbba", icon:"shoe-heel", value:5},
{label: "Sports",color:"#45aaf2", icon:"basketball", value:6},
{label: "Movies & Music",color:"#4b7bec", icon:"headphones", value:7},
{label: "Books",color:"purple", icon:"book", value:8},
{label: "Others",color:"gray", icon:"", value:9},  
];

function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{title:"", price:"", description:"", category:(null)}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            > 
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                
                <AppFormPicker 
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"  
                    width="50%"
                />

                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}
const styles =StyleSheet.create({
    container:{
        padding:10,
        },

 })
export default ListingEditScreen;