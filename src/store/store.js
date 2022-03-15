import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { alertReducer } from "./reducers/alertReducers"
import {
  createUserReducer,
  loginUserReducer,
  getPlansReducer,
  userPayReducer,
  userSubReducer,
} from "./reducers/userReducers"
import { getNewsReducer, getWordpressReducer } from "./reducers/newsReducers"

const reducer = combineReducers({
  alert: alertReducer,
  createUser: createUserReducer,
  loginUser: loginUserReducer,
  getPlans: getPlansReducer,
  userPay: userPayReducer,
  getNews: getNewsReducer,
  getWordpress: getWordpressReducer,
  userSub: userSubReducer,
})

const tokenFromStorage = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {}
const plansFromStorage = localStorage.getItem("plans")
  ? JSON.parse(localStorage.getItem("plans"))
  : []

const initialState = {
  loginUser: {
    token: tokenFromStorage,
    user: userFromStorage,
  },
  getPlans: {
    plans: plansFromStorage,
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
