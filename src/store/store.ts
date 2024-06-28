'use client'

import { configureStore } from '@reduxjs/toolkit'
import slice from '@/store/slice'

const store = configureStore({
  reducer: {
    slice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
