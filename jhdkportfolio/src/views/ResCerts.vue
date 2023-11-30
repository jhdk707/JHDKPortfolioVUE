<!-- RESUMES AND CERTIFICATIONS PAGE 11/29/2023-->


<template>
  <div class="container py-4">
    <h2 class="h2 text-center" id="Resume">My Resume and Learned Technologies</h2>

    <h3>Areas of Knowledge</h3>
    <ul>
      <li>HTML</li>
      <li>CSS & Frameworks (Bulma, Bootstrap) </li>
      <li>API & MySql, Insomnia</li>
      <li>MERN (MongoDB, Express, React, Node)</li>
      <li>JavaScript & React JS</li>
    </ul>

    <button class="download-btn" @click="downloadResume">Download Resume</button>
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
