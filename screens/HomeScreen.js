import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import store from '../components/store';
import { ADD_ITEM } from '../components/reducerItem';
import { Ionicons } from '@expo/vector-icons';


function HomeScreen() {
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();
    const addItem = item => dispatch({ type: ADD_ITEM, payload: item });
    const data = [
        { id: 0, name: 'ace', count: 1 },
        { id: 1, name: 'mokey d luffy', count: 1 },
        { id: 2, name: 'black bead', count: 1 },
        { id: 3, name: 'moria', count: 1 },
        { id: 4, name: 'sabo', count: 1 },
        { id: 5, name: 'shank', count: 1 },
        { id: 6, name: 'zoro', count: 1 },
        { id: 7, name: 'sanji', count: 1 },
        { id: 8, name: 'nami', count: 1 },
        { id: 9, name: 'robin', count: 1 }
    ]

    return (
        <View style={[styles.container, { paddingTop: insets.top + 32 }]}>
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.id}-{item.name}</Text>
                        <TouchableOpacity onPress={() => {
                            addItem(item);
                        }}>
                            <Ionicons name="add-circle" size={24} color="purple" />
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
        alignItems: 'center',
    }, item: {
        flexDirection: 'row',
        height: 50,
        borderColor: 'brown',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: 250
    }
})

export default HomeScreen;
