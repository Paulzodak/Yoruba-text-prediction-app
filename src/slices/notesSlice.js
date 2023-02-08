import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  onSnapshot,
  collection,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";
import { act } from "react-dom/test-utils";
import { db } from "../firestore";
import { useDispatch } from "react-redux";
var notes = [];
export const getNotes = createAsyncThunk("notes/getNotes", (uid) => {
  const colRef = collection(db, "notes");
  const docRef = doc(db, "notes", uid);
  const q = query(docRef, uid);
  return getDoc(docRef)
    .then((res) => {
      const result = res.data();
      const tempNotes = { ...result };
      const propertyValues = Object.values(tempNotes);
      return propertyValues;
    })
    .catch((res) => res.data());
});
const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    loading: false,
    activeNote: {},
  },
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
    },
  },
  extraReducers: {
    [getNotes.pending]: (state) => {
      state.loading = true;
    },
    [getNotes.fulfilled]: (state, action) => {
      state.notes = action.payload;
      state.loading = false;
    },
    [getNotes.pending]: (state) => {
      state.loading = false;
    },
  },
});
export const { setActiveNote } = notesSlice.actions;
export default notesSlice.reducer;
