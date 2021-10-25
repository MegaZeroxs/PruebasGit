import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, StatusBar } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function Cats() {
    const json_info = [
        {
            id: '4',
            title: 'Bengala',
            origen: 'Estados Unidos',
            src: require('../images/bengala.jpg'),
        },
        {
            id: '1',
            title: 'Gato siamés',
            origen: 'Tailandia',
            src: require('../images/siames.jpeg'),
        },
        {
            id: '5',
            title: 'British Shorthair',
            origen: 'Reino Unido',
            src: require('../images/brithis.jpg'),
        },
        {
            id: '3',
            title: 'Maine Coon',
            origen: 'Estados Unidos',
            src: require('../images/maine.jpg'),
        },
        {
            id: '2',
            title: 'Gato persa',
            origen: 'Irán',
            src: require('../images/persa.jpg'),
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