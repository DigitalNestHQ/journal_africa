import axios from "axios"
const baseURL = process.env.REACT_APP_API_BASE_URL
const token = localStorage.getItem("token") && localStorage.getItem("token")

export const withAuthToken = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
})

export const withoutAuthToken = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
})
