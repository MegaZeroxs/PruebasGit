import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Text, Image,ScrollView, SafeAreaView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default function App() {
  const [comidas, setComidas] = useState([
    {
      titulo: "Pupusas",
      img: "https://i.imgur.com/9zAbO1z.jpg",
      ingredientes: "De masa de arroz o maiz, relleno de queso, chicharron y otros ingredientes."
    },
    {
      titulo: "Tamales",
      img: "https://i.imgur.com/mgP0rdu.jpg",
      ingredientes: "Preparado generalmente a base de masa de maíz o de arroz rellena de carnes, vegetales, salsas y otros ingredientes."
    },
    {
      titulo: "Atol de elote",
      img: "https://i.imgur.com/2uKPufi.jpg",
      ingredientes: "Una bebida ancestral, hecha a base de maíz y de un sabor único y exquisito."
    }
  ])

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <ScrollView style={styles.scrollView}>
      <Card>
        <Card.Title>Comidas tipicas</Card.Title>
        <Card.Divider />
        {
          comidas.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image source={{ uri: u.img }}
                  style={{ width: '100%', height: 250, resizeMode: 'cover'}} />
                <Text style={styles.name}>{u.titulo}</Text>
                <Text style={styles.ingredientes}>{u.ingredientes}</Text>
              </View>
            );
          })
        }
      </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  margin: {
    marginTop: 10,
    borderTopWidth: 1,
    width: '50%',
    paddingTop: 5
  },
  user: {
    marginBottom: 30,
  }, 
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24
  },
  container: {
    flex: 1,
    paddingTop: 50,
  },
  scrollView: {
    marginHorizontal: 5,
  },
  text: {
    fontSize: 42,
  }, input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '50%'
  }
});
