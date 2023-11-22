import axios from 'axios'

export const HOST = 'https://shop-avion.onrender.com/api'
// export const HOST = 'http://localhost:4000/api'

export let token

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = token
  } else {
    delete axios.defaults.headers.common.Authorization
  }
}

export const getCustomer = async () => {
  const response = await axios.get(HOST + '/customers/customer')
  const customerData = response.data
  return customerData
}
