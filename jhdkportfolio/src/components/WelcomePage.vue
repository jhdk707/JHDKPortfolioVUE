<!-- WelcomePage.vue -->

<script setup>
import WelcomeItem from './WelcomeItem.vue';
import WaveIcon from './icons/IconWave.vue';
import TechIcon from './icons/IconTech.vue';
import EcosystemIcon from './icons/IconEcosystem.vue';
import CommunityIcon from './icons/IconCommunity.vue';
import CameraIcon from './icons/IconCamera.vue';
import ContactModal from './ContactModal.vue';
import { ref } from 'vue';

// Define a ref to track the modal state
const isContactModalOpen = ref(false);

// Function to open the ContactModal
const openContactModal = () => {
  isContactModalOpen.value = true;
};

// Function to close the ContactModal
const closeContactModal = () => {
  isContactModalOpen.value = false;
};
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <WaveIcon />
    </template>
    <template #heading>Welcome!</template>

    This Portfolio is where I like to keep record of accomplishments, showcase my work, certificates, and anything else I wish to share! I will constantly keep updating this page as I learn more. It is built with  <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>, and migrated from my original portfolio built with <a href="https://create-react-app.dev/" target="_blank" rel="noopener">Create-React-App</a>. 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <TechIcon />
    </template>
    <template #heading>Technologies</template>

   I was part of a 6 month Cohort through UC Berkely Extenstion program. We focused on MERN Stack development with Javascript basis. I have since started learning other JS based frameworks, such as <a href="https://nextjs.org/" target="_blank" rel="noopener">Next.js</a>, and Vite/Vue. I am studying <a href="https://www.python.org/" target="_blank" rel="noopener">Python</a>, and intend to learn Java/C languages and learn more software development aswell. Visit the Technologies tab to see what else I've learned! 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>BlahBlah</template>

   blahblahblah
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Contact Me</template>

    
    <a href="https://github.com/jhdk707" target="_blank" rel="noopener">Github</a>
    <br>
    <a href="https://www.linkedin.com/in/jesse-h-085117272/" target="_blank" rel="noopener">LinkedIn</a>
    <br>
    <div>
        <!-- Button to open the ContactModal -->
        <button @click="openContactModal">Email Me</button>

        <!-- Include the ContactModal component -->
        <ContactModal :isOpen="isContactModalOpen" @close="closeContactModal" />
    </div>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CameraIcon />
    </template>
    <template #heading>Photography</template>

    In my sparetime, I also really like taking photos of food and life. You can view them 
    on the Photography tab.
  </WelcomeItem>
</template>

<style>

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>