import { createSlice } from "@reduxjs/toolkit";

const initialState = { search: "the weekend" };

export const searchReducer = createSlice({
  name: "searchReducer",
  initialState,
  reducers: {
    searchKeyword: (state, action) => {
      return (state = { search: action.payload });
    },
  },
});

export const { searchKeyword } = searchReducer.actions;

export default searchReducer;
