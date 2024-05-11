import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            const existingContact = state.items.find(contact => contact.name === action.payload.name || contact.number === action.payload.number);
            if (!existingContact) {
                state.items.push(action.payload);
            }
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
});

export const { addContact, deleteContact } = slice.actions;
export const selectContacts = state => state.contacts.items;
export default slice.reducer;