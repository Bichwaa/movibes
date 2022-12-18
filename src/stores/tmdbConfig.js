import { ref, } from 'vue'
import { defineStore } from 'pinia';
import { useHttpGet, buildURL } from '../composables/useHttpGet';

const httpGet = useHttpGet()

export const useConfigStore = defineStore('configs', () => {
  const configs = ref(0)
  const imgPath = ref("")
  async function getConfig() {
    const res = await httpGet(buildURL('/configuration'))
    configs.value = res;
  }

  function buildBackdropImageUrl(path) {
    // console.log("url------->",configs.value.data.images.base_url + configs.value.data.images.backdrop_sizes[1] + path)
    const newPath  = configs.value.data.images.base_url + configs.value.data.images.backdrop_sizes[2] + path
    imgPath.value = newPath;
    return newPath
  }

  return { configs, imgPath, getConfig, buildBackdropImageUrl}
})
