import { configureStore } from '@reduxjs/toolkit'
import employerSlice from './features/employer/employerSlice'

export const store = () => {
  return configureStore({
    reducer: {
      employer: employerSlice.reducer
    }
  })
}
