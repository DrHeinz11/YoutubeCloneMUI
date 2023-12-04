import { createSlice } from '@reduxjs/toolkit'

const initialState = { search: 'seven' }

export const searchReducer = createSlice({
  name: 'searchReducer',
  initialState,
  reducers: {
    searchKeyword: (_state, action) => {
      return (_state = { search: action.payload })
    }
  }
})

export const { searchKeyword } = searchReducer.actions

export default searchReducer
