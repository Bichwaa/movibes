<template>
    <div class="panel">
        <ul class="sidenav">
            <li class="nav-item"><va-icon name="home" /><span>Home</span></li>
            <li class="nav-item">Movies</li>
            <li class="nav-item">Tv Series</li>
            <li class="nav-item">Upcoming</li>
        </ul>
    </div>
</template>

<script setup></script>

<style scoped>
.panel{
    padding: 2rem 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #212121;
    height:90vh;
}

li{
    /* margin:1rem 0; */
    padding: 1.5rem 2rem;
    border-right:solid 5px transparent;
    border-style: inset;
    transition: background-color .5s;
}

li:hover{
    background-color: lightslategrey;
    border-right:solid 5px #3DD2CCBF;
}

</style>