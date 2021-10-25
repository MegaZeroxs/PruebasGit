import React from 'react';
import {View, Text, Button} from 'react-native';

export default function About(props){
    const{navigation} = props;
    return(
        <View>
            <Text>Estamos en About</Text>
            <Button title="ir a Contact" onPress={()=> navigation.navigate('contact')}></Button>
        </View>
    );
}