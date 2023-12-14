<!-- NavigationBar.vue
<template>
    <Navbar fluid rounded>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About Me</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/rescerts">Resume & Certs</RouterLink>
          <RouterLink to="/tech">Technologies</RouterLink>
          <RouterLink to="/photos">Photography</RouterLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </template>
  
  <script>
  import { Navbar, Nav } from 'your-navbar-library'; // Import the necessary components from your library
  import { RouterLink } from 'vue-router';
  
  export default {
    components: {
      Navbar,
      Nav,
      RouterLink,
    },
  };
  </script> -->
  


<!-- CustomNavbar.vue -->
<!-- <template>
          <Nav>
             <RouterLink to="/">Home</RouterLink>
             <RouterLink to="/about">About Me</RouterLink>
             <RouterLink to="/projects">Projects</RouterLink>
             <RouterLink to="/rescerts">Resume & Certs</RouterLink>
             <RouterLink to="/tech">Technologies</RouterLink>
             <RouterLink to="/photos">Photography</RouterLink>
           </Nav>
  </template>
  
  <script setup>

  import { RouterLink } from 'vue-router';
  </script>
   -->

   <!-- <template>
    <fwb-navbar solid>
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
          <RouterLink to="/rescerts" custom v-slot="{ navigate }">
            <fwb-navbar-link :is-active="isActive('/rescerts')" @click="navigate">
              Resume & Certificates
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
  </template> -->
  
  <template>
    
    <fwb-navbar solid>
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
          <RouterLink to="/rescerts" custom v-slot="{ navigate }">
            <fwb-navbar-link :is-active="isActive('/rescerts')" @click="navigate">
              Resume & Certificates
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
  import { RouterLink } from 'vue-router';
  import {
    FwbNavbar,
    FwbNavbarCollapse,
    FwbNavbarLink,
  } from 'flowbite-vue';
  
  const isActive = (route) => {
    return window.location.pathname === route;
  };
  </script>
  