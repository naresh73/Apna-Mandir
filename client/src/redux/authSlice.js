import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({

    name: "auth",
    initialState: {
        isloggedIn: false,
        isLoading: false,
        user: "",
        Token: ""
    },
    reducers: {
        login: (state, action) => {
            state.isLoading = false
            state.isloggedIn = action.payload.Token && true
            state.user = action.payload.user
            state.Token = action.payload.Token
        }
    }

})

export const { login } = authSlice.actions

export default authSlice.reducer