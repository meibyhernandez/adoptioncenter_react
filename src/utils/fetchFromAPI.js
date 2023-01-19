import axios from "axios";


export const BASE_URL = 'https://api.thecatapi.com/v1/images/search?limit=4';

const options = {
    
    headers: {
      'x-api-key': process.env.REACT_APP_CAT_API_KEY,
    }
  };

  export const  fetchFromAPI = async (url) => {
   const {data} =  await axios.get(`${BASE_URL}&${url}`, 
    options); 

    return data;
    
  }