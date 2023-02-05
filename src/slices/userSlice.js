import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, query, getDoc, doc } from "firebase/firestore";
import { db } from "../firestore";
export const getProducts = createAsyncThunk("product/getProducts", (uid) => {
  //   const colRef = collection(db, "user");
  //   const q = query(colRef);
  console.log(uid);
  const docRef = doc(db, "users", uid);
  return getDoc(docRef)
    .then((res) => res.data())
    .catch((res) => res.data());
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    loading: false,
  },
  reducer: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [getProducts.pending]: (state) => {
      state.loading = false;
    },
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
