
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const PLUS_ITEM = 'PLUS_ITEM'
export const MINUS_ITEM = 'MINUS_ITEM';

const data = [];

const reducerItem = (state = data, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let names = [...state].map((item, index) => {
                return item.name;
            })
            let idx = names.indexOf(action.payload.name);
            if (idx === -1) {
                return [...state, action.payload]
            } else {
                let newArr = [...state];
                newArr[idx] = { ...newArr[idx], count: newArr[idx].count + 1 }
                return newArr;
            }

        case REMOVE_ITEM:
            return state.filter(cartItem => cartItem.id !== action.payload.id)
        case PLUS_ITEM:
            let listName = [...state].map((item, index) => {
                return item.name;
            })
            let ind = listName.indexOf(action.payload.name);
            let newArray = [...state];
            newArray[ind] = { ...newArray[ind], count: newArray[ind].count + 1 }
            return newArray;
        case MINUS_ITEM:
            let listName2 = [...state].map((item, index) => {
                return item.name;
            })
            let ind2 = listName2.indexOf(action.payload.name);
            let newArray2 = [...state];
            if (newArray2[ind2].count >= 1) {
                newArray2[ind2] = { ...newArray2[ind2], count: newArray2[ind2].count - 1 }
                return newArray2;
            } else {
                return newArray2;
            }
    }
    return state;
}

export default reducerItem;
