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
      _id: '',
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
        _id: '',
      }
    },
    setUserId: (state, action) => {
      state.user._id = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser, setUserId, emptyUser } = userSlice.actions

export default userSlice.reducer