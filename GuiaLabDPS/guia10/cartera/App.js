import * as React from 'react';
import {
  SafeAreaView, Button, View, Text,
  Image, TouchableOpacity, Keyboard, Alert, FlatList, StyleSheet, ScrollView
} from
  'react-native';
import { createAppContainer, NavigationEvents } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class PantallaInicio extends React.Component {
  state = {
    usuario: '',
    contrasena: ''
  }
  static navigationOptions = {
    header: null
  };
  Entrar() {
    if (!!this.state.usuario && !!this.state.contrasena) {
      fetch('http://192.168.1.3/wallet_api/apiusuario.php?comando=autenticar&usuario=' + this.state.usuario + '&contrasena=' + this.state.contrasena, { method: 'GET' })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          const encontrado = responseJson.encontrado;
          // Alert("Mensaje="+mensaje);
          if (encontrado == 'si') {
            this.props.navigation.navigate('ListarProductos')
          }
          else {
            Alert.alert(
              'Usuario',
              'No encontrado!!',
              [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ],
              { cancelable: false }
            )
          }
        })
        .catch((error) => {
          console.error(error);
          Alert.alert(
            'Aviso',
            'Error de Internet!!',
            [
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
          );
        });
    } else {
      Alert.alert(
        'Aviso',
        'No introdujo datos',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );

    }
  }
  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>

        <Text
          style={{ fontSize: 34, marginTop: 25, alignSelf: 'center' }}>Bienvenidos</Text>
        <Image
          style={{ width: 200, height: 160, alignSelf: 'center', marginTop: 15 }}
          source={require('./imagenes/market.jpg')}
        />

        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Input
            placeholder='USUARIO'
            onChangeText={(text) => this.setState({ usuario: text })}
            rightIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
          />
          <Input
            placeholder='CONTRASEÑA'
            onChangeText={(text) => this.setState({ contrasena: text })}
            secureTextEntry={true}
            rightIcon={
              <Icon
                name='lock'
                size={24}
                color='black'
              />
            }
          />
        </View>
        <TouchableOpacity
          style={{
            height: 50, backgroundColor: '#8F00FF',
            marginTop: 15, borderRadius: 5, justifyContent:
              'center', marginLeft: 20, marginRight: 20
          }}
          onPress={() => { this.Entrar() }}
        >
          <Text style={{
            color: 'white', fontSize: 22, textAlign: 'center',
            textAlignVertical: 'center'
          }}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
class listarProductos extends React.Component {
  state = {
    elementos: [],
    total: 0
  }
  static navigationOptions = {
    title: 'Clientes',
    headerStyle: {
      backgroundColor: '#8F00FF',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  cargarRegistros() {
    console.log('Prueba');
    fetch('http://192.168.1.3/wallet_api/api.php?comando=listar', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        const listado = responseJson.records;
        console.log(listado);
        this.setState({
          elementos: listado,
          total: listado.length
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={{ flex: 1 }} >
        <NavigationEvents
          onWillFocus={() => {
            // Do your things here
            this.cargarRegistros();
          }}
        />
        <Text
          style={{
            fontSize: 18, textAlign: 'center', height: 40, marginTop: 10, backgroundColor: 'lightgray', textAlignVertical: 'center',
            borderRadius: 10, marginLeft: 10, marginRight: 10
          }}>{this.state.total} cliente/s</Text>
        <FlatList
          data={this.state.elementos}
          renderItem={({ item }) => <TouchableOpacity
            key={item.id_cliente}
            //onPress = {() => this.alertItemName(item)}
            onPress={() =>
              this.props.navigation.navigate('Detalles', item)}
          >
            <View
              style={{ flexDirection: 'row', marginTop: 15, marginLeft: 2 }}>
              <View style={{ height: 80, marginLeft: 5 }}>
                <Text style={{
                  flex: 1, fontSize: 16, fontWeight:
                    'bold',
                }}>
                  {item.nombres} {item.apellidos}
                </Text>
                <Text style={{ flex: 1, fontSize: 14 }}>
                  Correo: {item.correo}
                </Text>
                <Text style={{ flex: 1, fontSize: 14 }}>
                  Tipo de cliente: {item.tipo_cliente}
                </Text>
              </View>
            </View>
          </TouchableOpacity>}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            position: 'absolute',
            bottom: 10,
            right: 10,
            height: 70,
            backgroundColor: '#8F00FF',
            borderRadius: 100,

          }}
          onPress={() => this.props.navigation.navigate('Agregar')}
        >
          <Icon name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}
class PaginaDetalle extends React.Component {
  state = {
    nombres: '',
    apellidos: '',
    tipo_cliente: '',
    direccion_postal: '',
    direccion_trabajo: '',
    telefono: '',
    correo: '',
    nivel_economico: '',
    posibilidades: '',
    intereses: ''
  }
  static navigationOptions = {
    title: 'Editar cliente',
    headerStyle: {
      backgroundColor: '#8F00FF',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  Actualizar() {

    fetch('http://192.168.1.3/wallet_api/.php?comando=editarr&nombres=' +
      this.state.nombres
      + '&apellidos=' + this.state.apellidos
      + '&tipo_cliente=' + this.state.tipo_cliente
      + '&direccion_postal=' + this.state.direccion_postal
      + '&direccion_trabajo=' + this.state.direccion_trabajo
      + '&telefono=' + this.state.telefono
      + '&correo=' + this.state.correo
      + '&nivel_economico=' + this.state.nivel_economico
      + '&posibilidades=' + this.state.posibilidades
      + '&intereses=' + this.state.intereses
      , {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        const mensaje = responseJson.mensaje;
        console.log(mensaje);
        if (!mensaje)
          alert("Error al actualizar!");
        else {
          alert(mensaje);
          this.props.navigation.goBack();
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Error de Internet!!");
      });
  }
  Eliminar() {

    fetch('http://192.168.1.3/wallet_api/api.php?comando=eliminar&id=' + this.state.id_cliente, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        const mensaje = responseJson.mensaje;
        console.log(mensaje);
        if (!mensaje)
          alert("Error al eliminar!");
        else {
          alert(mensaje);
          this.props.navigation.goBack();
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Error de Internet!!");
      });
  }
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center'
              , height: 60
            }}>
            <TouchableOpacity
              style={{
                flex: 1, height:
                  40, backgroundColor: 'black', borderRadius: 5, justifyContent:
                  'center', marginLeft: 5
              }}
              onPress={() => { this.Actualizar() }}
            >
              <Text style={{
                color: 'white', fontSize: 22, textAlign: 'center',
                textAlignVertical: 'center', padding: 3
              }}>Actualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1, height:
                  40, backgroundColor: 'black', borderRadius: 5, justifyContent:
                  'center', marginLeft: 5, marginRight: 5
              }}
              onPress={() => { this.Eliminar() }}
            >
              <Text style={{
                color: 'white', fontSize: 22, textAlign: 'center',
                textAlignVertical: 'center', padding: 3
              }}>Eliminar</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, padding: 20 }}>

            <NavigationEvents
              onWillFocus={() => {
                this.setState({
                  nombres: navigation.getParam('nombres'),
                  apellidos: navigation.getParam('apellidos'),
                  tipo_cliente: navigation.getParam('tipo_cliente'),
                  direccion_postal: navigation.getParam('direccion_postal'),
                  direccion_trabajo: navigation.getParam('direccion_trabajo'),
                  telefono: navigation.getParam('telefono'),
                  correo: navigation.getParam('correo'),
                  nivel_economico: navigation.getParam('nivel_economico'),
                  posibilidades: navigation.getParam('posibilidades'),
                  intereses: navigation.getParam('intereses'),
                  id_cliente: navigation.getParam('id_cliente')
                });
              }}
            />
            <Input value={this.state.nombres}
              label="Nombre" placeholder='Nombre'
              onChangeText={(text) => this.setState({ nombres: text })}
            />
            <Input value={this.state.apellidos}
              label="Apellidos" placeholder='Apellidos'
              onChangeText={(text) => this.setState({ apellidos: text })}
            />
            <Input value={this.state.tipo_cliente}
              label="Tipo de cliente" placeholder='Tipo de cliente'
              onChangeText={(text) => this.setState({ tipo_cliente: text })}
            />
            <Input value={this.state.direccion_postal}
              label="Direccion postal" placeholder='Direccion postal'
              onChangeText={(text) => this.setState({ direccion_postal: text })}
            />
            <Input value={this.state.direccion_trabajo}
              label="Direccion de trabajo" placeholder='Direccion de trabajo'
              onChangeText={(text) => this.setState({ direccion_trabajo: text })}
            />
            <Input value={this.state.telefono}
              label="Telefono" placeholder='Telefono'
              onChangeText={(text) => this.setState({ telefono: text })}
            />
            <Input value={this.state.correo}
              label="Correo" placeholder='Correo'
              onChangeText={(text) => this.setState({ correo: text })}
            />
            <Input value={this.state.nivel_economico}
              label="Nivel economico" placeholder='Nivel economico'
              onChangeText={(text) => this.setState({ nivel_economico: text })}
            />
            <Input value={this.state.posibilidades}
              label="Posibilidades" placeholder='Posibilidades'
              onChangeText={(text) => this.setState({ posibilidades: text })}
            />
            <Input value={this.state.intereses}
              label="Intereses" placeholder='Intereses'
              onChangeText={(text) => this.setState({ intereses: text })}
            />
          </View>
        </View>
      </ScrollView>

    );
  }
}
class PaginaAgregar extends React.Component {
  state = {
    nombres: '',
    apellidos: '',
    tipo_cliente: '',
    direccion_postal: '',
    direccion_trabajo: '',
    telefono: '',
    correo: '',
    nivel_economico: '',
    posibilidades: '',
    intereses: ''
  }

  static navigationOptions = {
    title: 'Agregar cliente',
    headerStyle: {
      backgroundColor: '#8F00FF',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  Guardar() {

    fetch('http://192.168.1.3/wallet_api/api.php?comando=agregar&nombres=' +
      this.state.nombres
      + '&apellidos=' + this.state.apellidos
      + '&tipo_cliente=' + this.state.tipo_cliente
      + '&direccion_postal=' + this.state.direccion_postal
      + '&direccion_trabajo=' + this.state.direccion_trabajo
      + '&telefono=' + this.state.telefono
      + '&correo=' + this.state.correo
      + '&nivel_economico=' + this.state.nivel_economico
      + '&posibilidades=' + this.state.posibilidades
      + '&intereses=' + this.state.intereses
      , {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        const mensaje = responseJson.mensaje;
        console.log(mensaje);
        if (!mensaje)
          alert("Error al agregar!");
        else {
          alert(mensaje);
          this.props.navigation.goBack();
        }
      })
      .catch((error) => {
        console.error("Erro de internet");
      });
  }

  render() {
    return (

      <View style={{ flex: 1, padding: 20 }}>
        <Input
          placeholder='Nombre'
          onChangeText={(text) => this.setState({ nombres: text })}
        />
        <Input
          placeholder='Apellidos'
          onChangeText={(text) => this.setState({ apellidos: text })}
        />
        <Input
          placeholder='Tipo de cliente'
          onChangeText={(text) => this.setState({ tipo_cliente: text })}
        />
        <Input
          placeholder='Direccion postal'
          onChangeText={(text) => this.setState({ direccion_postal: text })}
        />
        <Input
          placeholder='Direccion de trabajo'
          onChangeText={(text) => this.setState({ direccion_trabajo: text })}
        />
        <Input
          placeholder='Telefono'
          onChangeText={(text) => this.setState({ telefono: text })}
        />
        <Input
          placeholder='Correo'
          onChangeText={(text) => this.setState({ correo: text })}
        />
        <Input
          placeholder='Nivel economico'
          onChangeText={(text) => this.setState({ nivel_economico: text })}
        />
        <Input
          placeholder='Posibilidades'
          onChangeText={(text) => this.setState({ posibilidades: text })}
        />
        <Input
          placeholder='Intereses'
          onChangeText={(text) => this.setState({ intereses: text })}
        />
        <TouchableOpacity
          style={{
            height: 50, backgroundColor: '#8F00FF',
            marginTop: 15, borderRadius: 5, justifyContent:
              'center', marginLeft: 20, marginRight: 20
          }}
          onPress={() => { this.Guardar() }}
        >
          <Text style={{
            color: 'white', fontSize: 22, textAlign: 'center',
            textAlignVertical: 'center'
          }}>Guardar</Text>
        </TouchableOpacity>
      </View>

    );
  }
}
const RootStack = createStackNavigator(
  {
    Inicio: PantallaInicio,
    ListarProductos: listarProductos,
    Detalles: PaginaDetalle,
    Agregar: PaginaAgregar,
  },
  {
    initialRouteName: 'Inicio',
  }
);
const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
