<template>
    <div class="panel">
      <va-sidebar
      :minimized="minimized" 
      minimizedWidth="64px"
      width="13rem"
      class="curve"
      >
        <img :src="wordLogo" alt="movibes logo" width="150" class="sidebar-img">
        <template v-for="item in sidebarItems" :key="item.title">
          <va-sidebar-item 
            :active="item.active" 
            :class="{bor:item.active}"
            :href="item.href" 
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
            <va-sidebar-item-title class="logout">Logout</va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>

      </va-sidebar>

      </div>
</template>

<script setup>
import { ref } from 'vue';
import wordLogo from '../assets/movibes-logo.svg';
import { useRouter } from 'vue-router';

const router = useRouter()

const sidebarItems = ref(
  [
  {title:"Home", icon:"home", active:false, href:"#/home"},
  {title:"Movies", icon:"videocam", active:true, href:"#/home"},
  {title:"Tv Shows", icon:"tv", active:false, href:"#/home"},
  {title:"Upcoming", icon:"folder", active:false, href:"#/home"},
]
)

const itemClicked = (item)=>{
  sidebarItems.value.map(x=>x.active=false);
  item.active =  true
}

const logout = ()=>{
  return router.push({name:"register"})
}

</script>

<style scoped>
.panel{
    padding: 1rem 0 1rem 1rem;
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
    background-color: #131A22;
    position: fixed;
    top:0;
    left:0;
    height:100vh;
}

.curve{
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
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
  position: fixed;
  left: 0;
  top: 0;
}

.panel{
    padding: 1rem 0 1rem 1rem;
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
    background-color: #131A22;
    /* position: fixed; */
    height:100vh;
}

.curve{
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
}

.sidebar-card{
  background-color: #191919;
  border-radius: 15px;
  padding :1rem .8rem;
  position: relative;
  margin:4rem 1rem 0 0;
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

.play-btn{
  margin-top:1rem;
  color: white !important;
}

.sidebar-img{
  margin-left:1.2rem;
  margin-bottom:1rem;
}

.logout{
  cursor: pointer;
}

</style>