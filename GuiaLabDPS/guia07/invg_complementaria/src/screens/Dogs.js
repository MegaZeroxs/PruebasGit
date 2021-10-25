import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, StatusBar} from 'react-native';

export default function Dogs(){
    const DATA = [
        {
            id: '1',
            title: 'Bulldog',
            src: require('../images/bulldog.png'),
        },
        {
            id: '2',
            title: 'Pastor alemán',
            src: require('../images/pastor.jpg'),
        },
        {
            id: '3',
            title: 'Pomerania',
            src: require('../images/pomerania.png'),
        },
        {
            id: '4',
            title: 'Labrador',
            src: require('../images/labrador.jpg'),
        },
        {
            id: '5',
            title: 'Husky',
            src: require('../images/husky.jpg'),
        },
    ];

    const Item = ({ title, img }) => (
        <View style={styles.item}> 
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.img} source={img}/>
        </View>
    );
    
    const renderItem = ({ item }) => (
    <Item title={item.title} img={item.src} />
    );

    return(
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
    },  
    img: {
      width: 200,
      height: 125,
      borderWidth: 2,
      borderColor: '#d35647',
      resizeMode: 'contain',
      margin: 8,
    },
});