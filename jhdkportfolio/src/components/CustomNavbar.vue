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
<template>
    <fwb-navbar>
      <template #logo>
        <fwb-navbar-logo alt="Your Logo" image-url="/images/your-logo.svg" link="#">
          Your Logo Text
        </fwb-navbar-logo>
      </template>
      <template #default="{ isShowMenu }">
        <fwb-navbar-collapse :is-show-menu="isShowMenu">
          <RouterLink to="/" custom>
            <fwb-navbar-link is-active-class="active">Home</fwb-navbar-link>
          </RouterLink>
          <RouterLink to="/about" custom>
            <fwb-navbar-link>About Me</fwb-navbar-link>
          </RouterLink>
          <RouterLink to="/projects" custom>
            <fwb-navbar-link>Projects</fwb-navbar-link>
          </RouterLink>
          <RouterLink to="/rescerts" custom>
            <fwb-navbar-link>Resume & Certs</fwb-navbar-link>
          </RouterLink>
          <RouterLink to="/tech" custom>
            <fwb-navbar-link>Technologies</fwb-navbar-link>
          </RouterLink>
          <RouterLink to="/photos" custom>
            <fwb-navbar-link>Photography</fwb-navbar-link>
          </RouterLink>
        </fwb-navbar-collapse>
      </template>
    </fwb-navbar>
  </template>
  
  <script setup>
  import {
    FwbNavbar,
    FwbNavbarCollapse,
    FwbNavbarLink,
    FwbNavbarLogo,
  } from 'flowbite-vue';
  import { RouterLink } from 'vue-router';
  </script>
  