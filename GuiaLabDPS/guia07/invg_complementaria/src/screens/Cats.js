import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, StatusBar } from 'react-native';

export default function Cats() {
    const json_info = [
        {
            id: '1',
            title: 'Gato siamés',
            origen: 'Tailandia',
            src: require('../images/siames.jpeg'),
        },
        {
            id: '2',
            title: 'Gato persa',
            origen: 'Irán',
            src: require('../images/persa.jpg'),
        },
        {
            id: '3',
            title: 'Maine Coon',
            origen: 'Estados Unidos',
            src: require('../images/maine.jpg'),
        },
        {
            id: '4',
            title: 'Bengala',
            origen: 'Estados Unidos',
            src: require('../images/bengala.jpg'),
        },
        {
            id: '5',
            title: 'British Shorthair',
            origen: 'Reino Unido',
            src: require('../images/brithis.jpg'),
        },
    ];

    const Item = ({ title, src, origen }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>{origen}</Text>
            <Image style={styles.img} source={src} />
        </View>
    );

    const renderItem = ({ item }) => (
        <Item {...item} img={item} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={json_info}
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