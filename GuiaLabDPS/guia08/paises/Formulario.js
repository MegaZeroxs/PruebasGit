import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Animated, Alert, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default Formulario = ({ busqueda, guardarbusqueda, guardarconsultar }) => {
    const { pais } = busqueda;

    const [animacionboton] = useState(new Animated.Value(1));

    const animacionEntrada = () => {
        Animated.spring(animacionboton, {
            toValue: 0.9,
            useNativeDriver: false
        }).start();
    }

    const animacionSalida = () => {
        Animated.spring(animacionboton, {
            toValue: 1,
            useNativeDriver: false
        }).start();
    }

    const estiloAnimacion = {
        transform: [{
            scale: animacionboton
        }]
    }

    const consultarPais = () => {
        if (pais.trim() === '') {
            mostrarAlerta();
            return;
        }
        guardarconsultar(true);
    }

    const mostrarAlerta = () => {
        Alert.alert('Error', 'Debe seleccionar un país'), [{ Text: "Entendido" }]
    }

    return (
        <View>
            <View>
                <Text style={styles.input}>Pais</Text>
            </View>
            <View>
                <Picker style={styles.itempais} onPress={() => consultarPais()} selectedValue={pais} onValueChange={pais => guardarbusqueda({ ...busqueda, pais })}>
                    <Picker.Item label="--seleccione un pais--" value="" />
                    <Picker.Item label="Canada" value="ca" />
                    <Picker.Item label="El Salvador" value="sv" />
                    <Picker.Item label="Guatemala" value="gt" />
                    <Picker.Item label="Honduras" value="hn" />
                    <Picker.Item label="Nicaragua" value="ni" />
                    <Picker.Item label="Panama" value="pa" />
                    <Picker.Item label="Costa Rica" value="cr" />
                    <Picker.Item label="Mexico" value="mx" />
                    <Picker.Item label="Argentina" value="ar" />
                    <Picker.Item label="Estados Unidos" value="us" />
                    <Picker.Item label="Colombia" value="co" />
                    <Picker.Item label="España" value="es" />
                    <Picker.Item label="Peru" value="pe" />
                </Picker>
            </View>
            <Button title="Consultar pais" onPress={() => consultarPais()} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 50,
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        color: '#000'
    },
    itempais: {
        height: 60,
        backgroundColor: '#fff',
    },
    btnBuscar: {
        marginTop: 50,
        height: 50,
        backgroundColor: '#000',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    textoBuscar: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: "center",
        fontSize: 18,
    },
});