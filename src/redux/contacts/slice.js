import { createSelector, createSlice } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "./operations";
import { selectNameFilter } from "../filters/slice";

const contactsSlice = createSlice({
        name: "contacts",
        initialState: {
         items: [],
         loading: false,
         error: null,
         },
       
    extraReducers: (builder) => {
        builder 
        .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = false;
        })
        .addCase(fetchContacts.fulfilled, (state,action) => {
            state.items = action.payload;
            state.loading = false;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(addContact.pending, (state) => {
            state.loading = true;
                state.error = null;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
            state.loading = false;
        })
        .addCase(addContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteContact.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload.id)
            state.loading = false;
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading; 
export const selectError = state => state.contacts.error;
export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filter) => {
    return contacts.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase())
);
});

export default contactsSlice.reducer;


    