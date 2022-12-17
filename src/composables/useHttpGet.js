import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

// Add Your Key Here!!!
axiosInstance.defaults.headers.common = {
  "X-API-Key": "c55bc7d3a124e923aa524f9b27699385",
};


export function useHttpGet(){
  return axiosInstance.get
}

// export default axiosInstance;
