<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainPage from './components/MainPage.vue'
</script> -->

<script setup>
import MainPage from '@/components/MainPage.vue';
// import CustomNavbar from '@/components/CustomNavbar.vue';
import { RouterView } from 'vue-router'
</script>


 <template>
   <header>
     <img alt="Jesse Portrait" class="portrait" src="@/assets/JesseHeadshot.jpg"  />

      <div class="wrapper">
       <MainPage msg="Jesse Hudak" />
           <Nav>
             <RouterLink to="/">Home</RouterLink>
             <RouterLink to="/about">About Me</RouterLink>
             <RouterLink to="/projects">Projects</RouterLink>
             <RouterLink to="/rescerts">Resume & Certs</RouterLink>
             <RouterLink to="/tech">Technologies</RouterLink>
             <RouterLink to="/photos">Photography</RouterLink>
           </Nav>
     </div>
   </header>
   <RouterView />
</template> 


<!-- App.vue
<template>
  <div id="app">
    <header>
      <img alt="Jesse Portrait" class="portrait" src="@/assets/JesseHeadshot.jpg" />
      <div class="wrapper">
        <MainPage msg="Jesse Hudak" />
        <CustomNavbar />
      </div>
    </header>
    <RouterView />
  </div>
</template> -->



<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.portrait {
  display: block;
  margin: 5 auto 2rem;
  border-style: solid;
  border-color: antiquewhite;
  justify-self: center;
  width: 20%;
  height: auto;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .portrait {
    margin: 0 2rem 0 0;
    
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
