import axios from 'axios'

export const faucetApi = axios.create({
  baseURL: process.env.REACT_APP_FAUCET_API_URL,
})
