<template>
  <div class="about">
    <div class="container py-4 text-center">
      <h2 class="h2" id="About-Me">
        About Me
      </h2>
  <img class="h-auto max-w-xs mx-auto" src="@/assets/JesseHeadshot.jpg" alt="jesse headshot"> 
      <p>
        I am an avid learner, working into the world of tech. I have always
        enjoyed building and repairing computers; coding seems like a good
        logical step to use as a creative outlet. I also highly enjoy problem
        solving, so coding is a fun, yet frustrating way to get more of that into
        my day. For fun, I love to cook, read, play instruments, listen to music,
        listen to birds, go for long drives, swim in the ocean, or watch the
        skies at night.
      </p>
      <br>
      <br>
      <h4>
        <p>Copyright 2023 @ Jesse Hudak | Made with Vue.js/Vite/TailwindCSS and VSCode</p>
      </h4>
    </div>
  </div>
</template>



<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .container {
    margin: auto;
  }
}
</style>
