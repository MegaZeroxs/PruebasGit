import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Modal, Button, TouchableHighlight } from 'react-native';
const App = () => {

  const [modalVisiblePlaya, setModalVisiblePlaya] = useState(false)
  const [modalVisiblePupusas, setModalVisiblePupusas] = useState(false)
  const [modalVisibleRuta, setModalVisibleRuta] = useState(false)

  return (
    <>
      <ScrollView>

        <Modal transparent={true} animationType="slide" visible={modalVisiblePlaya} onRequestClose={()=>{
          alert('Modal has been closed');
        }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text>El Salvador cuenta con hermosas playas a nivel de Centroamerica</Text>
              <Button title="Cerrar" onPress={()=>setModalVisiblePlaya(!modalVisiblePlaya)}></Button>
            </View>
          </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisiblePupusas} onRequestClose={()=>{
          alert('Modal has been closed');
        }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Comer pupusas</Text>
              <Text>Una comida que encontraras en cada esquina</Text>
              <Button title="Cerrar" onPress={()=>setModalVisiblePupusas(!modalVisiblePupusas)}></Button>
            </View>
          </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisibleRuta} onRequestClose={()=>{
          alert('Modal has been closed');
        }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ataco</Text>
              <Text>Pueblos magicos te esperan</Text>
              <Button title="Cerrar" onPress={()=>setModalVisibleRuta(!modalVisibleRuta)}></Button>
            </View>
          </View>
        </Modal>

        <View style={{ flexDirection: 'row' }} >
          <Image
            style={styles.banner}
            source={require('./src/img/bg.jpg')} />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en El Salvador</Text>
          <ScrollView horizontal>
            <TouchableHighlight onPress={()=>{setModalVisiblePlaya(!modalVisiblePlaya)}}>
              <Image style={styles.ciudad} source={require('./src/img/actividad1.jpg')} />
            </TouchableHighlight>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/actividad2.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/actividad3.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/actividad4.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/actividad5.jpg')} />
            </View>
          </ScrollView>
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Platillos Salvadoreños</Text>
            <TouchableHighlight onPress={()=>{setModalVisiblePupusas(!modalVisiblePupusas)}}>
              <Image style={styles.mejores} source={require('./src/img/mejores1.jpg')} />
            </TouchableHighlight>
            <View>
              <Image style={styles.mejores} source={require('./src/img/mejores2.jpg')} />
            </View>
            <View>
              <Image style={styles.mejores} source={require('./src/img/mejores3.jpg')} />
            </View>
        </View>

        <Text style={styles.titulo}>Rutas turisticas</Text>
        <View style={styles.listado}>
            <TouchableHighlight onPress={()=>{setModalVisibleRuta(!modalVisibleRuta)}} style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/rutas1.jpg')} />
            </TouchableHighlight>
            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/rutas2.jpg')} />
            </View>
            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/rutas3.jpg')} />
            </View>
            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/rutas4.jpg')} />
            </View>
        </View>

      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad:{
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores:{
    width: '99%',
    height: 200,
    marginVertical: 5
  },
  listaItem: {
    flexBasis: '49%'
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },vistaModal:{
    backgroundColor:'#000000aa',flex:1
    },
    Modal:{
    backgroundColor:'#fff',margin:50,padding:40,borderRadius:10,flex
    :1
    },
    subtitulo:{
    fontWeight:'bold',
    fontSize:14,
    justifyContent:'center'
    },
});
export default App;