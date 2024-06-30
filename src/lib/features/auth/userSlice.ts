import { UserModel } from '@/models/userModel'
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: '',
      email: '',
      password: '',
      role: '',
      id: '',
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    emptyUser: state => {
      state.user = {
        name: '',
        email: '',
        password: '',
        role: '',
        id: '',
      }
    },
  }
})

// Action creators are generated for each case reducer function
export const { setUser, emptyUser } = userSlice.actions

export default userSlice.reducer