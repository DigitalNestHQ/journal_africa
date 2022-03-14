import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { alertReducer } from "./reducers/alertReducers"
import { createUserReducer, loginUserReducer } from "./reducers/userReducers"

const reducer = combineReducers({
  alert: alertReducer,
  createUser: createUserReducer,
  loginUser: loginUserReducer,
})

const tokenFromStorage = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {}

const initialState = {
  loginUser: {
    token: tokenFromStorage,
    user: userFromStorage,
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
