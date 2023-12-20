
<script setup>
import { RouterView } from 'vue-router'
import MainPage from '@/components/MainPage.vue';
import CustomNavbar from './components/CustomNavbar.vue';
</script>


 <template>
   <header>
      <div class="wrapper">
        <MainPage  />
        <CustomNavbar />
       <!-- Insert header components here, ROUTER LINKS are in /components/CustomNavBar.vue -->
     </div>
    </header>
   <RouterView />
</template> 



<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    font-size: 1rem;
    padding: 1rem;
    margin-top: 1rem;
    margin-right: 1rem;
  }
}
</style>
