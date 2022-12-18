import axios from "axios";

const baseURL= "https://api.themoviedb.org/3";
const api_key = import.meta.env.VITE_API_KEY

const axiosInstance = axios.create({baseURL});

// Add Your Key Here!!!
axiosInstance.defaults.headers.common = {
  "X-API-Key": api_key,
  "Access-Control-Allow-Origin": "*"
};

export function buildURL(relURL){
  return baseURL + relURL + "?api_key="+ api_key
}

export function useHttpGet(){
  return axiosInstance.get
}

// export default axiosInstance;
