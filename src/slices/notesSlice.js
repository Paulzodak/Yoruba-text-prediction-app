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

  // return onSnapshot(q)
  //   .then((res) => {
  //     const tempNotes = res.data();
  //     const notes2 = { ...tempNotes };
  //     const propertyValues = Object.values(notes2);
  //     notes = propertyValues;
  //     console.log(propertyValues);
  //     return propertyValues;

  //     // const note3 = [...notes2];
  //     // return data;
  //     // getDoc(docRef)
  //     //   .then((res) => (notes = [...res.data()]))
  //     //   .catch((res) => res.data());
  //     // res.docs.forEach((user) => {
  //     //   console.log(user.data());
  //     //   if (user.data() === uid) {
  //     //     console.log(user.data());
  //     //   }
  //     // });
  //   })
  //   .then((res) => console.log(res));
});
const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    loading: false,
  },
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
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
export const {} = notesSlice.actions;
export default notesSlice.reducer;
