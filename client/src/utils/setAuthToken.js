import axios from 'axios';

const setAuthToken = token => {
  if (token) { //if it exists
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token;//advantage of using axios over fetch, so once we have logged in, he authorization is assigned to the token for every request under that user
  } else {
    // Delete auth header(this comes on the click of logout button/functionality)
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
