import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-elements/dist/card/Card";
import { useState } from "react";

export default Pais = ({ resultado }) => {
    const [info, setinfo] = useState([]);
    const [nombre, setnombre] = useState();
    const [capital, setcapital] = useState();
    const [region, setregion] = useState();
    const [lengua, setlengua] = useState([]);
    const [area, setArea] = useState();

    useEffect(() => {
        setinfo(resultado);
        lengua.length = 0;
        Object.values(info).map(e => {
            setnombre(e.nome.abreviado);
            setcapital(e.governo.capital.nome);
            setregion(e.localizacao.regiao.nome);
            setArea(e.area.total);
            Object.values(e.linguas).map(l => {
                lengua.push(l.nome);
            })
        })
    });

    return (
        <Card>
            <View style={{ justifyContent: 'center' }}>
                <Text>Nombre: {nombre}</Text>
                <Text>Capital: {capital}</Text>
                <Text>Region:{region}</Text>
                <Text>Lengua:{lengua.toString()}</Text>
                <Text>Área:{area} km2</Text>
            </View>
        </Card>
    );
}