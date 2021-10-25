import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dogs from "../screens/Dogs";

const Stack = createStackNavigator();

export default function DogStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="dogs" component={Dogs} options={{title: 'Dogs'}}/>
        </Stack.Navigator>
    );
}