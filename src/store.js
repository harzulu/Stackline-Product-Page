import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import rootReducer from './reducers'

const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk))

export default store