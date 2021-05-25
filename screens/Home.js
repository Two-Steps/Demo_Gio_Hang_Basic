import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import CartIcon from '../components/CartIcon'

const Stack = createStackNavigator();

function Home() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={
                {
                    title: 'Trang chủ',
                    headerRight: () => <CartIcon />
                    , headerTitleStyle: { color: 'brown' },
                }
            } />
            <Stack.Screen name='Cart' component={CartScreen} options={{ title: 'Giỏ hàng', headerTitleStyle: { color: 'brown' } }} />
        </Stack.Navigator>

    );
}

export default Home;