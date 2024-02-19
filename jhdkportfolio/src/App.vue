
<script setup>
import { RouterView } from 'vue-router'
import MainPage from '@/components/MainPage.vue';
import CustomNavbar from './components/CustomNavbar.vue';
import CustomFooter from './components/CustomFooter.vue';
</script>


 <template>
   <header>
      <div class="wrapper fixed-top">
      <!-- Insert header components here, ROUTER LINKS are in /components/CustomNavBar.vue -->
        <MainPage  />
        <CustomNavbar />
      </div>
    </header>
      <div class="overflow-y-auto">
        <RouterView/>
      </div>
    <div class="footer">
        <CustomFooter/>
    </div>
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
