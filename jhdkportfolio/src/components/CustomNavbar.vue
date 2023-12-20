<!-- CUSTOM NAV BAR 12/17/2023  -->
  
  <!-- <template>
    <fwb-navbar class="custom-navbar">
      <template #default="{ isShowMenu }">
        <fwb-navbar-collapse :is-show-menu="isShowMenu">
          <RouterLink to="/" custom v-slot="{ navigate }">
            <fwb-navbar-link :is-active="isActive('/')" @click="navigate">
              Home
            </fwb-navbar-link>
          </RouterLink>
          <RouterLink to="/about" custom v-slot="{ navigate }">
            <fwb-navbar-link :is-active="isActive('/abouts')" @click="navigate">
              About
            </fwb-navbar-link>
          </RouterLink>
          <RouterLink to="/projects" custom v-slot="{ navigate }">
            <fwb-navbar-link :is-active="isActive('/projects')" @click="navigate">
              Projects
            </fwb-navbar-link>
          </RouterLink>
          <RouterLink to="/tech" custom v-slot="{ navigate }">
            <fwb-navbar-link :is-active="isActive('/tech')" @click="navigate">
              Technologies
            </fwb-navbar-link>
          </RouterLink>
          <RouterLink to="/photos" custom v-slot="{ navigate }">
            <fwb-navbar-link :is-active="isActive('/photos')" @click="navigate">
              Photography 
            </fwb-navbar-link>
          </RouterLink>
        </fwb-navbar-collapse>
      </template>
    </fwb-navbar>
  </template>

  <script setup>
  import { useRoute } from 'vue-router';
  import {
    FwbNavbar,
    FwbNavbarCollapse,
    FwbNavbarLink,
  } from 'flowbite-vue';
  
  const route = useRoute();

  const isActive = (routePath) => {
    return route.path.startsWith(routePath);
  };
  </script>
  
  <style scoped>
.custom-navbar {
  position: relative;
  font-weight: 800;
  background-color: #181818;
  border: #00a86b;
  border-style: solid;
  color: yellow;
}

#fwb-navbar-link {
  color: #00a86b;
}

/* Style for the collapsed state of the navbar */
.custom-navbar.fwb-navbar-collapsed {
  background-color: #181818; /* Change the background color */
}

/* Style for the links in the collapsed state */
.custom-navbar.fwb-navbar-collapsed #fwb-navbar-link {
  color: #00a86b; /* Change the text color */
}
</style>
 -->

<!-- CustomNavbar.vue -->

<!-- CustomNavbar.vue -->

<template>
  <nav>
    <router-link to="/">
      <a :class="{ 'router-link-exact-active': isActive('/') }">Home</a>
    </router-link>
    <router-link to="/about">
      <a :class="{ 'router-link-exact-active': isActive('/about') }">About</a>
    </router-link>
    <router-link to="/projects">
      <a :class="{ 'router-link-exact-active': isActive('/projects') }">Projects</a>
    </router-link>
    <router-link to="/tech">
      <a :class="{ 'router-link-exact-active': isActive('/tech') }">Technologies</a>
    </router-link>
    <router-link to="/photos">
      <a :class="{ 'router-link-exact-active': isActive('/photos') }">Photography</a>
    </router-link>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (routePath) => {
  return route.path === routePath;
};
</script>

<style scoped>
/* Add your styling for the navbar links here */
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #00a86b;
  text-shadow: 1px 1px 3px black;
  background: radial-gradient( #353535 10px, #272727 25%, #181818 75%  );
  margin-top: 2em;
  border-radius: 10px;
}  

/* nav {
   display: flex;
  justify-content: space-around;
  align-items: center;
  color: #00a86b;
  text-shadow: 1px 1px 3px black;
  background:
  radial-gradient(circle at 100% 50%, transparent 20%, #353535 21%,
  #181818 34%, transparent 35%, transparent),
  radial-gradient(circle at 0% 50%, transparent 20%, #181818 21%, #353535 34%, transparent 35%, transparent) 0 -50px;
background-color: #353535;
background-size: 60px 55px;
  margin-top: 2em;
  border-radius: 10px; 
} */

a.router-link-exact-active {
  /* Example styling for the active link */
  color: rgb(227, 160, 8);
}

a {
  padding: .20em;

}
a.router-link-exact-active:hover {
  /* Example styling for the active link on hover */
  background-color: transparent;
}
</style>
