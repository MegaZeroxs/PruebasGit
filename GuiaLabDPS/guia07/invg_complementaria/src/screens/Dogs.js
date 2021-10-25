import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, StatusBar } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function Dogs() {
    const json_info = [
        {
            id: '5',
            title: 'Husky',
            origen: 'Rusia',
            src: require('../images/husky.jpg'),
        },
        {
            id: '3',
            title: 'Pomerania',
            origen: 'Alemania',
            src: require('../images/pomerania.png'),
        },
        {
            id: '1',
            title: 'Bulldog',
            origen: 'Reino Unido',
            src: require('../images/bulldog.png'),
        },


        {
            id: '4',
            origen: 'Alemania',
            title: 'Canadá',
            src: require('../images/labrador.jpg'),
        },
        {
            id: '2',
            origen: 'Alemania',
            title: 'Pastor alemán',
            src: require('../images/pastor.jpg'),
        },

    ];

    const Item = ({ title, src, origen }) => (
        <View style={styles.user}>
            <Image resizeMode="cover" style={styles.img} source={src} />
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.name}>{origen}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item {...item} img={item} />
    );

    return (
        <Card>
            <FlatList
                data={json_info}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    img: {
        width: 150,
        height: 120,
        resizeMode: 'cover',
        margin: 8,
    },
    user: {
        borderBottomWidth: 1,
        paddingVertical: 15
    }
});