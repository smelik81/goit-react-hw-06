import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
      state.items.sort((a, b) => a.name.localeCompare(b.name));
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;

// remote

/* import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = { items: [] };

export const addContact = createAction("contact/addcontact");
export const deleteContact = createAction("contact/delete");

export const contactReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    });
}); */
