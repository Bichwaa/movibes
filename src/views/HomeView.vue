<template>
  <section>
    <aside class="left-side">
      <SideBar />
    </aside>

    <main>
      <div class="search-wrapper">
        <va-icon name="search" size="large" color="#666666" />
        <SearchBar />
      </div>

      <div class="movie-banner-wrapper">
        <MovieBanner :ratio="2.3"/>
      </div>

      <div class="movie-card-wrapper">
        <div class="movielist-bar"><h6>Trending</h6> <span @click="fillTrending" class="see-all">see all</span></div>
        <div class="movie-group">
          
          <template v-for="movie in switchTrending?trending:trendingFull">
          <MovieCard  
          :movieData="movie"
          @click="openDetails(movie)"
          />
        </template>
        </div>

        <div class="movielist-bar"><h6>Upcoming</h6> <span @click="fillUpcoming" class="see-all">see all</span></div>
        <div class="movie-group">
          
          <template v-for="movie in switchUpcoming?upcoming:upcomingFull">
          <MovieCard  
          :movieData="movie"
          @click="openDetails(movie)"
          />
        </template>
        </div>
        
      </div>
    </main>


    <aside class="right-side">
      <div class="cto-wrapper">
        <div class="notif-wrapper pointer">
          <va-icon name="notifications_active"/>
        </div>
        <div class="avatar-wrapper pointer"></div>
      </div>
      <div class="category-card-wrapper">
        <div class="category-header">
          <span class="bold">Categories</span>
          <span class="uncheck">Uncheck all</span>
        </div>
        <ListCard :items="categories" />
      </div>
      <div class="service-card-wrapper">
        <div class="service-header">
          <span class="bold">Services</span>
          <span class="uncheck">Uncheck all</span>
        </div>
        <ListCard :items="services" />
      </div>
  </aside>
  </section>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia'
 import { useConfigStore } from '../stores/tmdbConfig'

import ListCard from '../components/ListCard.vue';
import SearchBar from "../components/SearchBar.vue";
import SideBar from "../components/SideBar.vue";
import MovieBanner from "../components/MovieBanner.vue";
import MovieCard from '../components/MovieCard.vue';

//HELPERS
const router = useRouter()
const store = useConfigStore()

//DATA
const { movies } = storeToRefs(store)

const trending = computed(()=>{
  return movies.value.slice(0,4)
})
const trendingFull = computed(()=>{
  return movies.value.slice(0,10)
})
const switchTrending=ref(true)

// const upcoming = computed(()=>{
//   return movies.value.slice(movies.value.length-4,movies.value.length)
// })

const upcoming = computed(()=>{
  return movies.value.slice(movies.value.length-4,movies.value.length)
})
const upcomingFull = computed(()=>{
  return movies.value.slice(movies.value.length-10,movies.value.length)
})
const switchUpcoming=ref(true)



const categories = ref([
  {
    title:"Action",
    checked:false
  }, 
  {
    title:"Adventure",
    checked:true
  },
  {
    title:"Animated",
    checked:false
  }, 
  {
    title:"Comedy",
    checked:false
  }, 
  {
    title:"Crime",
    checked:true
  }, 
  {
    title:"Fantasy",
    checked:true
  }
])

const services = ref([
  {
    title:"Netflix",
    checked:true
  }, 
  {
    title:"Prime video",
    checked:true
  },
  {
    title:"Disney +",
    checked:false
  }, 
  {
    title:"HBO",
    checked:true
  }, 
  {
    title:"Hulu",
    checked:false
  }, 
  {
    title:"Starz",
    checked:false
  }
])

//METHODS
watch(movies,(a,b)=>{
  movies.value = a;
})

const openDetails = (movie)=>{
  store.currentMovie = movie;
  return router.push({name:"detailsview"});
}

const fillUpcoming = ()=>{
  switchUpcoming.value = !switchUpcoming.value
}

const fillTrending = ()=>{
  switchTrending.value = !switchTrending.value
}

</script>

<style scoped>

.bold{
  font-weight: 700;
  line-height: 1.2;
}
section{
  display: flex;
  justify-content: space-between;
  align-content: center;
  position: relative;
}
 main{
  flex-basis: 53%;
 }

.bold{
  font-weight:600;
  font-size: 1.1rem;
  padding:.5rem 0;
}

main{
  padding: 0;
  margin-left:13rem;
}


.right-side{
  /* width:100%; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.right-side{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right:2rem;
}
.category-card-wrapper{
  width:15rem;
  margin:3rem 0;
}

.service-card-wrapper{
  width:15rem;
  margin-bottom:2rem;
}

.category-header, .service-header{
  padding: .5rem 0;
  display: flex;
  justify-content: space-between;
}

.uncheck{
  font-size:.9rem;
  color:#666666;
  font-weight: 600;
  cursor: pointer;
  transition:color .25s;
}
.uncheck:hover{
  color:#3DD2CC66;
}

.cto-wrapper{
  display: flex;
  justify-content: space-between;
}
.notif-wrapper{
  height:70px;
  width:70px;
  border-radius: 50%;
  background-color: #212121;
  display: grid;
  place-items: center;
}
.avatar-wrapper{
  height:70px;
  width:70px;
  border-radius: 50%;
  background-image:url("https://picsum.photos/70?avatar&random=1")
}

.search-wrapper{
  background: #212121;
  border: none;
  padding:1rem 17rem 1rem 3rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 3rem;
}

.movie-card-wrapper{
  display: flex;
  flex-direction: column;
}

.movie-group{
  /* padding-top:2rem; */
  display: grid;
  grid-template-columns: repeat(4,1fr);
}

.movielist-bar{
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}

.see-all{
  cursor: pointer;
}
</style>
