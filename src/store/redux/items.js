import { createSlice } from "@reduxjs/toolkit";
const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 50.99,
        date: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 'e2',
        description: 'Groceries',
        amount: 32.45,
        date: "2025-01-02T00:00:00.000Z"
    },
    {
        id: 'e3',
        description: 'Electricity bill',
        amount: 75.30,
        date: "2025-01-03T00:00:00.000Z"
    },
    {
        id: 'e4',
        description: 'Dinner at a restaurant',
        amount: 40.75,
        date: "2025-01-04T00:00:00.000Z"
    },
    {
        id: 'e5',
        description: 'Monthly subscription',
        amount: 10.99,
        date: "2025-01-05T00:00:00.000Z"
    },
    {
        id: 'e6',
        description: 'Books for study',
        amount: 25.00,
        date: "2025-01-06T00:00:00.000Z"
    },
    {
        id: 'e7',
        description: 'Gym membership',
        amount: 60.00,
        date: "2025-01-07T00:00:00.000Z"
    },
    {
        id: 'e8',
        description: 'Bus ticket',
        amount: 2.50,
        date: "2025-01-18T00:00:00.000Z"
    },
    {
        id: 'e9',
        description: 'Office supplies',
        amount: 15.80,
        date: "2024-12-29T00:00:00.000Z"
    },
    {
        id: 'e10',
        description: 'Movie night',
        amount: 20.00,
        date: "2024-12-20T00:00:00.000Z"
    }
];

const itemSlice = createSlice({
    name: 'items',
    initialState: DUMMY_EXPENSES,
    reducers: {
        addItem: (state, action) =>{
            const { description, amount, date } = action.payload;
            state.push({
                id: new Date().toISOString() + Math.random().toString(),
                description,
                amount,
                date: date || new Date().toISOString(),
            });
      
        },
        editItem:(state, action)=> {
            const { id, description, date, amount } = action.payload
            const item = state.find((item) => item.id === id);
            if (item) {
                if (description !== undefined) item.description = description;
                if (date !== undefined) item.date = date;
                if (amount !== undefined) item.amount = amount;
            }
        },
        removeItem: (state, action) => {
            const { id } = action.payload;
            return state.filter((item) => item.id !== id);
        }
    }
});


export const { addItem, editItem, removeItem } = itemSlice.actions;
export  default itemSlice.reducer;