<!-- CUSTOM NAV BAR 12/17/2023  -->
  
  <template>
    <fwb-navbar class="custom-navbar">
      <template #logo>
      <fwb-navbar-logo alt="Flowbite logo" image-url="/images/logo.svg" link="#">
        Flowbite
      </fwb-navbar-logo>
    </template>
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
  
  <style scoped>
.custom-navbar {
  position: relative;
  font-weight: 800;
}

.a {
  color: #00a86b;
}
</style>