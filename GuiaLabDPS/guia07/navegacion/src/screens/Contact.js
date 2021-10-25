import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Contact(props){
    const{navigation} = props;
    return(
        <View>
            <Text>Estamos en Contact</Text>
            <Button title="ir a Home" onPress={()=> navigation.navigate('home')}></Button>
        </View>
    );
}