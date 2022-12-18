<template>
    <section>
      <aside class="left-side">
        <SideBar />
      </aside>
  
      <main>
        <div class="search-wrapper">
          <va-icon name="search" size="large" color="#666666" />
          <SearchBar />

          <div class="cto-wrapper">
          <div class="notif-wrapper pointer">
            <va-icon name="notifications_active"/>
          </div>
          <div class="avatar-wrapper pointer"></div>
        </div>
        </div>
  
        <div class="movie-banner-wrapper">
          <MovieBanner :ratio="2.9"/>
        </div>
        <div class="movie-details-wrapper">
            <MovieDetailsCard />
        </div>
      </main>

    </section>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia'
   import { useConfigStore } from '../stores/tmdbConfig'
  
  import SearchBar from "../components/SearchBar.vue";
  import SideBar from "../components/SideBar.vue";
  import MovieBanner from "../components/MovieBanner.vue";
  import MovieDetailsCard from '../components/MovieDetailsCard.vue';
  
  //HELPERS
  const router = useRouter()
  const store = useConfigStore()
  
  //DATA
  const { movies } = storeToRefs(store)
  
  
  //METHODS
  watch(movies,(a,b)=>{
    movies.value = a;
  })
  
  </script>
  
  <style scoped>
  
  section{
    display: flex;
    justify-content: center;
    /* align-content: center; */
    position: relative;
  }
   main{
    flex-basis: 65%;
   }
  
  main{
    padding: 0;
    margin-left:5rem;
  }
  .search-wrapper{
    background: #212121;
    border: none;
    padding:1rem 7rem 1rem 3rem;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
    position: relative;
  }
  
  
  .cto-wrapper{
    display: flex;
    justify-content: space-between;
    position: fixed;
    right: 2%;
  }
  .notif-wrapper{
    height:70px;
    width:70px;
    border-radius: 50%;
    background-color: #212121;
    display: grid;
    place-items: center;
    margin-right:1rem;
  }
  .avatar-wrapper{
    height:70px;
    width:70px;
    border-radius: 50%;
    background-image:url("https://picsum.photos/70?avatar&random=1")
  }

  .movie-banner-wrapper{
    margin-bottom: 2rem;
  }
  </style>
  