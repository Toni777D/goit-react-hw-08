import { createSelector } from "@reduxjs/toolkit";
import {selectNameFilter} from "../filters/selectors";

export const selectLoading = state => state.contacts.loading;

export const selectContacts = state => state.contacts.items;
 
export const selectFilter = (state) => state.task.items

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filter) => {
    return contacts.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase())
);
});