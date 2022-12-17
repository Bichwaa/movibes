<template>
     <div class="form-wrapper">
            <p class="form-header">Welcome.</p>
            <span class="form-sub-header">Welcome back, please enter your details.</span>
            <form id="signupForm">
                <button class="mr-4 mb-2  google-login-button" @click.prevent="toHome">
                    <div class="btn-content">
                        <img :src="googleLogo" width="15" height="15" alt="">
                        <span>Login with Google</span>
                    </div>
                </button>
                <div class="or-wrapper">
                    <h6 class="or"> or </h6> 
                </div>
                <input type="email" class="custom-input" placeholder="email"/>
                <br><br>
                <input type="password" class="custom-input" placeholder="Password"/>
                <br><br>
                <button class="mr-4 mb-2 bg-light weighted login-button" @click.prevent="toHome">Login</button>
                
            </form>
            <span class="form-sub-header">Don't have an account? <router-link to="/">Sign up for free</router-link></span>
        </div>
    </template>
    
    <script setup>
    import {ref} from "vue";
    import { useRouter,RouterLink } from "vue-router";

    import googleLogo from '../../assets/Google.png';

    const router = useRouter()

    const toHome = ()=>{
    router.push({name:"homeview"})
    }
    
    const isPasswordVisible = ref(false)
    </script>
    
    <style scoped>
        .form-header{
            font-size:1.8rem;
            font-weight:600;
        }
    
        .form-sub-header{
            display: block;
            font-size:.9rem;
            margin:.5rem 0 1rem 0;
            color:#BABABAB2;
        }
    
        .form-sub-header a{
            color:white;
        }
    
        .weighted{
            font-weight: 600 !important;
        }
    
        .bg-light{
            background-color: aliceblue !important;
        }
        .login-button{
            border-radius: 10px;
            padding:.5rem 6rem;
            border: none;
        }
    
        .google-login-button{
            border-radius: 10px;
            padding:7.5px 2.3rem;
            color:white;
            border:solid 1px #BABABAB2;
            background-color: transparent!important;
        }
    
        .btn-content{
            display: flex;
            align-items: center;
        }
    
        .btn-content img{
            margin-right:.5rem;
        }
    
        .custom-input{
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: solid 1px #4D4B4B;
            background-color: transparent;
            outline: none;
            width:85%;
            color:white;
            padding:.5rem 0;
        }
    
        .custom-input::placeholder {
            color: #BABABA;
            opacity: 1;
        }

        .or{
            /* position: relative;
            margin:1rem 1rem;
            max-width: 230px;
            text-align: center; */
            position: relative;
            max-width: 200px;
            margin: .5rem auto;
            text-align: center;
            padding-right: 2rem;
            
        }

        .or:before {
        content: "";
        display: block;
        width: 100px;
        height: 2px;
        background: #4D4B4B;
        top: 50%;
        position: absolute;
        left: -20%;
      }
      .or:after {
        content: "";
        display: block;
        width: 90px;
        height: 2px;
        background: #4D4B4B;
        top: 50%;
        position: absolute;
        right: 0;
      }
    </style>