<!-- RESUMES AND CERTIFICATIONS PAGE 11/29/2023-->


<template>
  <div class="container py-4">
    <h2 class="h2 text-center" id="Resume">My Resume and Learned Technologies</h2>
    <button class="download-btn" @click="downloadResume">Download Resume</button>
    <button class="download-btn" @click="downloadResume">Download Full-Stack Certificate</button>
    <!-- <button class="bg-gray-300 hover:bg-gray-400 text-gray- font-bold py-2 px-4 rounded inline-flex items-center" @click="downloadResume">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download Resume </span>
</button> -->
  </div>
</template>

<script>
export default {
  methods: {
    downloadResume() {
      const resumePath = import.meta.env.BASE_URL + 'src/assets/Resume.pdf';
      window.open(resumePath, '_blank');
    },
  },
};
</script>

<style>
.download-btn {
  background-color: black;
  padding-right: 1em;
  border: .05em;
  border-style: solid;
  color: hsla(160, 100%, 37%, 1);
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
