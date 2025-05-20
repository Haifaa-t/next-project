import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  email: string
  firstName?: string
  lastName?: string
  profilePicture?: string
}

interface UserState {
  user: User
}

const initialState: UserState = {
  user: {
    email: '',
    firstName: '',
    lastName: '',
    profilePicture: ''
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        email: string
        firstName?: string
        lastName?: string
        profilePicture?: string
      }>
    ) => {
      state.user.email = action.payload.email
      state.user.firstName = action.payload.firstName || state.user.firstName || ''
      state.user.lastName = action.payload.lastName || state.user.lastName || ''
      state.user.profilePicture = action.payload.profilePicture || state.user.profilePicture || ''
    },

    logout: (state) => {
      state.user.email = '' 
    },

    updateProfile: (
      state,
      action: PayloadAction<{
        firstName: string
        lastName: string
        profilePicture: string
      }>
    ) => {
      state.user.firstName = action.payload.firstName
      state.user.lastName = action.payload.lastName
      state.user.profilePicture = action.payload.profilePicture
    }
  }
})

export const { login, logout, updateProfile } = userSlice.actions
export default userSlice.reducer
