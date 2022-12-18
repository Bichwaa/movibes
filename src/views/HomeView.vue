<template>
  <section>
    <aside class="left-side">
      <!-- <SideBar /> -->
      <!-- <RegistrationViewVue/> -->
      <div class="panel">
      <va-sidebar
      :minimized="minimized" 
      minimizedWidth="64px"
      width="15rem"
      >
        <img :src="wordLogo" alt="movibes logo" width="150" class="sidebar-img">
        <template v-for="item in sidebarItems" :key="item.title">
          <va-sidebar-item 
            :active="item.active" 
            :class="{bor:item.active}" 
            class="redbor"
            @click="itemClicked(item)"
            >
            <va-sidebar-item-content>
              <va-icon :name="item.icon" />
              <va-sidebar-item-title class="bold">
                {{ item.title }}
              </va-sidebar-item-title>
            </va-sidebar-item-content>
          </va-sidebar-item>
        </template>

        <div class="sidebar-card">
          <div class="sidebar-circle">
            <va-icon name="quiz"/>
          </div>
          <span class="bold"> Play movie quized and earn free tickets</span>
          <p>50k people are playing now!</p>

          <va-button class="play-btn" color="#3DD2CC66" round>Start playing</va-button>
        </div>

        <va-sidebar-item @click="logout">
          <va-sidebar-item-content>
            <va-icon name="logout"/>
            <va-sidebar-item-title>Logout</va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>

      </va-sidebar>

      </div>
    </aside>

    <main>
      <div class="search-wrapper">
        <va-icon name="search" size="large" color="#666666" />
        <SearchBar />
      </div>

      <div class="movie-banner-wrapper">
        <MovieBanner />
      </div>

      <div class="movie-card-wrapper">
        <template v-for="movie in movies">
          <MovieCard  :movieData="movie"/>
        </template>
        
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia'
 import { useConfigStore } from '../stores/tmdbConfig'

import wordLogo from '../assets/movibes-logo.svg';
import ListCard from '../components/ListCard.vue';
import SearchBar from "../components/SearchBar.vue";
import MovieBanner from "../components/MovieBanner.vue";
import MovieCard from '../components/MovieCard.vue';

//HELPERS
const router = useRouter()
const store = useConfigStore()

//DATA
const minimized = ref(false)

const { movies } = storeToRefs(store)

const sidebarItems = ref(
  [
  {title:"Home", icon:"home", active:false},
  {title:"Movies", icon:"videocam", active:true},
  {title:"Tv Shows", icon:"tv", active:false},
  {title:"Upcoming", icon:"folder", active:false},
]
)

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
const itemClicked = (item)=>{
  sidebarItems.value.map(x=>x.active=false);
  item.active =  true
}

const logout = ()=>{
  return router.push({name:"register"})
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
}
 main{
  flex-basis: 45%;
 }
.bor{
  border-left:none !important;
  border-right: solid 4px #3DD2CCBF !important;
  border-style: inset;
}

.redbor:hover{
  border-right: solid 4px #3DD2CCBF!important;
}
.left-side{
  /* width:100%; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.right-side{
  /* width:100%; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
main{
  padding: 0;
}
.panel{
    padding: 1rem 0 1rem 1rem;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #131A22;
    /* height:93vh; */
}

.sidebar-card{
  background-color: #191919;
  border-radius: 15px;
  padding :1rem;
  position: relative;
  margin:3rem 1rem 0 1rem;
  padding-top:3rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar-circle{
  border-radius: 50%;
  background-color: #3DD2CC66;
  display: grid;
  place-items: center;
  height:60px;
  width:60px;
  position: absolute;
  top:-20%;
  left:30%;
  opacity:.6;
}
.bold{
  font-weight:600;
  font-size: 1.1rem;
  padding:.5rem 0;
}

.play-btn{
  margin-top:1rem;
  color: white !important;
}

.sidebar-img{
  margin-left:1.2rem;
  margin-bottom:1rem;
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
  padding-top:2rem;
  display: grid;
  grid-template-columns: repeat(4,1fr);
}
</style>
