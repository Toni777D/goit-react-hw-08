import { createSlice } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logOut } from "../auth/operations";

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
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
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
            state.loading = false;
            state.error = null;
            // const index = state.items.findIndex((contact) => contact.id === action.payload.id);
            // state.items.splice(index, 1);
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(logOut.fulfilled, (state) => {
            state.items = [];
            state.error = null;
            state.loading = false
        })
    }
});

export default contactsSlice.reducer;


    