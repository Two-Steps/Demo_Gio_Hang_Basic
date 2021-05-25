import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'

const CartIcon = () => {
    const navigation = useNavigation();
    const data = useSelector(state => state);
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Cart')
        }}>
            <FontAwesome name="shopping-cart" size={24} color="brown" style={{ marginRight: 32 }} />
            <Text style={{ color: 'black', position: 'absolute', top: -10, left: 15, padding: 3, fontWeight: 'bold', fontSize: 20 }}>{data.length}</Text>
        </TouchableOpacity>
    )
}

export default CartIcon;