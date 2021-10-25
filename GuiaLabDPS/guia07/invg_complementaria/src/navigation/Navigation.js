import React from 'react';
import CatStack from './CatStack';
import DogStack from './DogStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let colors;
                if (route.name === 'dogs') {
                    iconName = focused
                        ? 'dog'
                        : 'dog';
                    colors = focused
                        ? '#2196F3'
                        : 'gray';
                } else if (route.name === 'cats') {
                    iconName = focused ? 'cat' : 'cat';
                    colors = focused
                        ? '#2196F3'
                        : 'gray';
                }

                // You can return any component that you like here!
                return <FontAwesome5 name={iconName} size={32} color={colors} />;
            },
            tabBarActiveTintColor: '#2196F3',
            tabBarInactiveTintColor: 'gray',
        })} >
            <Tab.Screen name="dogs" component={DogStack} options={{ title: 'Dogs', headerShown: false }} />
            <Tab.Screen name="cats" component={CatStack} options={{ title: 'Cats', headerShown: false }} />
        </Tab.Navigator>
    );
}