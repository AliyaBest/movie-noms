import axios from 'axios'

const GET_ALL_RESULTS = 'GET_ALL_RESULTS'

const getAllResults = results => {
  return {
    type: GET_ALL_RESULTS,
    results
  }
}

const fetchAllResults = (searchTerm) => async dispatch => {
  try {

    const { data } = axios.get()

  } catch (error) {

  }
}


