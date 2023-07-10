import { createSlice } from '@reduxjs/toolkit'

const initialState = { search: 'the weekend' }

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
