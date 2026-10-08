import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import products from './productsSlice'

// One store per request/browser session (App Router: never share a module-level store between requests).
export const makeStore = () => configureStore({ reducer: { products } })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export const useAppSelector = useSelector.withTypes<RootState>()
