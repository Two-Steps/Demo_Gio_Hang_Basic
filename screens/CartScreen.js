import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { REMOVE_ITEM, PLUS_ITEM, MINUS_ITEM } from '../components/reducerItem'
import { AntDesign } from '@expo/vector-icons';


function CartScreen() {
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();
    const data = useSelector(state => state);
    console.log(data);
    const removeItem = item => dispatch({ type: REMOVE_ITEM, payload: item });
    const plus_quantityItem = item => dispatch({ type: PLUS_ITEM, payload: item });
    const minus_quantityItem = item => dispatch({ type: MINUS_ITEM, payload: item });

    return (
        <View style={[styles.container, { paddingTop: insets.top + 32 }]}>
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View style={styles.row}>
                            <Text>ID:</Text>
                            <Text>{item.id}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text>Name:</Text>
                            <Text>{item.name}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text>Quantity:</Text>

                            <View style={{ flexDirection: 'row', width: 150, justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={() => {
                                    plus_quantityItem(item);
                                }}>
                                    <AntDesign name="plussquare" size={24} color="#87cefa" />
                                </TouchableOpacity>
                                <Text>{item.count}</Text>
                                <TouchableOpacity onPress={() => {
                                    minus_quantityItem(item);
                                }}>
                                    <AntDesign name="minussquare" size={24} color="#87cefa" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <TouchableOpacity onPress={() => {
                            removeItem(item);
                        }}>
                            <FontAwesome name="remove" size={24} color="blue" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    }, item: {
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        width: 300
    }, row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250,
        marginVertical: 5
    }
})

export default CartScreen;