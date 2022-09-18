import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./feature/basketSlice"
import restaurantReducer from "./feature/restaurantSlice"
export default configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  }
})