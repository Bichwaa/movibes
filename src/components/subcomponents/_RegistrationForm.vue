<template>
<div class="form-wrapper">
        <p class="form-header">create an account</p>
        <span class="form-sub-header">Let's get started with your 30 day free trial</span>
        <form id="signupForm">
            <input type="text" class="custom-input" placeholder="Full name"/>
            <br><br>
            <input type="email" class="custom-input" placeholder="email"/>
            <br><br>
            <input type="password" class="custom-input" placeholder="Password"/>
            <br><br>
            <button class="mr-4 mb-2 bg-light weighted signup-button" @click.prevent="toLogin" >Create account</button>
            <br>
            <br>
            <button class="mr-4 mb-2  google-signup-button" @click.prevent="toLogin">
                <div class="btn-content">
                    <img :src="googleLogo" width="15" height="15" alt="">
                    <span>Signup with Google</span>
                </div>
            </button>
            
        </form>
        <span class="form-sub-header">already signed up? <router-link to="/login">Login</router-link></span>
    </div>
</template>

<script setup>
import {ref} from "vue";
import { useRouter, RouterLink } from "vue-router";

import googleLogo from '../../assets/Google.png';

const isPasswordVisible = ref(false)
const router = useRouter();

const toLogin = ()=>{
    router.push({name:"loginview"})
}
</script>

<style scoped>
    /* .form-wrapper{
        flex-basis: 40%;
        max-width: 400px;
    } */
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
    .signup-button{
        border-radius: 10px;
        padding:.5rem 4rem;
        border: none;
    }

    .google-signup-button{
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

    .custom-input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #BABABA;
    opacity: 1; /* Firefox */
}
</style>