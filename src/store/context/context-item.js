import { createContext, useReducer} from 'react';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 50.99,
        date: new Date("2025-01-01")
    },
    {
        id: 'e2',
        description: 'Groceries',
        amount: 32.45,
        date: new Date("2025-01-02")
    },
    {
        id: 'e3',
        description: 'Electricity bill',
        amount: 75.30,
        date: new Date("2025-01-03")
    },
    {
        id: 'e4',
        description: 'Dinner at a restaurant',
        amount: 40.75,
        date: new Date("2025-01-04")
    },
    {
        id: 'e5',
        description: 'Monthly subscription',
        amount: 10.99,
        date: new Date("2025-01-05")
    },
    {
        id: 'e6',
        description: 'Books for study',
        amount: 25.00,
        date: new Date("2025-01-06")
    },
    {
        id: 'e7',
        description: 'Gym membership',
        amount: 60.00,
        date: new Date("2025-01-07")
    },
    {
        id: 'e8',
        description: 'Bus ticket',
        amount: 2.50,
        date: new Date("2025-01-08")
    },
    {
        id: 'e9',
        description: 'Office supplies',
        amount: 15.80,
        date: new Date("2025-01-09")
    },
    {
        id: 'e10',
        description: 'Movie night',
        amount: 20.00,
        date: new Date("2025-01-10")
    }
];

export const ItemContext = createContext({
    items:[],
    addItem: ({description, amount, date})=>{},
    deleteItem: (id) =>{},
    editItem: (id,{description, amount, date}) =>{}
});

function itemReducer(state, action){
 switch (action.type){
    case 'ADD':
        const id = new Date().toString() + Math.random().toString();
        return [{...action.payload, id: id},... state];
    case 'EDIT':
        const editableItemIndex = state.findIndex((item)=> 
            item.id === action.payload.id);
        const editExpense= state[editableItemIndex]
        const editItem = {...editExpense, ...action.payload.data};
        const editExpenses = [...state]
        editExpenses[editableItemIndex] = editItem;
        return editExpenses;
    case 'DELETE':
        return state.filter((item) => item.id !== action.payload)
    default:
      return state;
 }
}
function ItemContextProvider({children}) {
    const [itemState, dispatch] = useReducer(itemReducer,DUMMY_EXPENSES);

    function addItem(itemData){
        dispatch({type: 'ADD', payload: itemData});
    }

    function editItem(id,itemData){
        dispatch({type: 'EDIT', payload: {id: id, data: itemData}});
    }

    function deleteItem(id){
        dispatch({type: 'DELETE', payload: id});
    }

    const  value ={
        items: itemState,
        addItem: addItem,
        editItem: editItem,
        deleteItem: deleteItem
        
    }
    return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>
}

export default ItemContextProvider;