import { listEmployerData } from '@/app/_data/Data'
import { createSlice } from '@reduxjs/toolkit'

const initialState = listEmployerData

const employerSlice = createSlice({
  name: 'employer',
  initialState: initialState,
  reducers: {
    removeById: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
    removeByIds: (state, action) => {
      return state.filter((item) => !action.payload.includes(item.id))
    }
  }
})

export default employerSlice
