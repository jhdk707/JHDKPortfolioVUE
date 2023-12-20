<template>
  <div class="about">
    <div class="container py-4 text-left">
      <h2 class="h2" id="About-Me">
        About Me
      </h2>
  <img class="h-auto max-w-xs mx-auto" src="@/assets/JesseHeadshot.jpg" alt="jesse headshot"> 
      <p>
        I am an avid learner, working into the world of tech. I have always
        enjoyed building and repairing computers; coding seems like a good
        logical step to use as a creative outlet. I also highly enjoy problem
        solving, so coding is a fun, yet frustrating way to get more of that into
        my day.
      </p>
      <div class="container py-4 text-left">
      <ul style="list-style-type:circle;">
        <h3>Random hobbies and interests / Fun</h3>
        <li>Beach trips and tidepooling</li>
        <li>Body Surfing </li>
        <li>Succulents </li>
        <li>Fungus </li>
        <li>Spending hours on Google Maps looking at eveything </li>
      </ul>
      </div>
      <br>
      <br>
      <h4>
        <p>Copyright 2023 @ Jesse Hudak | Made with Vue.js/Vite/TailwindCSS and VSCode</p>
      </h4>
    </div>
  </div>
</template>



<style>
p{
  margin-top: 1em;
  font-size: medium;
  font-weight: 500;
  margin-bottom: 1em;
}

ul{
  align-items: left;
}

h3{
 font-size: medium;
 font-weight: 700;
 color: rgb(227, 160, 8);
 margin-left: -1em;
}

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
