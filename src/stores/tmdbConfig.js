import { ref, } from 'vue'
import { defineStore } from 'pinia';
import { useHttpGet, buildURL } from '../composables/useHttpGet';

const httpGet = useHttpGet()

const moviesUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`

export const useConfigStore = defineStore('configs', () => {
  const configs = ref(0)
  const movies = ref([])
  const imgPath = ref("")

  async function getConfig() {
    const res = await httpGet(buildURL('/configuration'))
    configs.value = res;
  }

  async function getMovies(){
    const data = await httpGet(moviesUrl);
    movies.value = data.data.results;
  }

  function buildBackdropImageUrl(path) {
    // console.log("url------->",configs.value.data.images.base_url + configs.value.data.images.backdrop_sizes[1] + path)
    const newPath  = configs.value.data.images.base_url + configs.value.data.images.backdrop_sizes[2] + path
    imgPath.value = newPath;
    return newPath
  }

  return { configs, imgPath, movies, getMovies, getConfig, buildBackdropImageUrl}
})
