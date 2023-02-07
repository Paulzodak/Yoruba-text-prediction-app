import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, query, getDoc, doc } from "firebase/firestore";
import { db } from "../firestore";
export const getUser = createAsyncThunk("user/getUser", (uid) => {
  // console.log(uid);
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
    [getUser.pending]: (state) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [getUser.pending]: (state) => {
      state.loading = false;
    },
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
