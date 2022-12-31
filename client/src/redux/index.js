import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import authSliceReducer from './authSlice'



const store = configureStore({
    reducer:authSliceReducer
})

export default store