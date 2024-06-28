import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  value: number
}

const initialState: InitialState = {
  value: 0,
}

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = slice.actions

export default slice.reducer
