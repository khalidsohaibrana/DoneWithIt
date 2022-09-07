import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

function ListingScreen(props) {
    return (
        <Screen style={styles.container}>

        <View> 
            <Card
                    title="Red jacket for sale!"
                    subTitle="$100"
                    image={require("../assets/jacket.jpg")}
            >
            </Card> 
            <Card
                    title="Couch in great condition"
                    subTitle="$1000"
                    image={require("../assets/couch.jpg")}
            >
            </Card>
        </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor:colors.light,
    },
  
  });
export default ListingScreen;