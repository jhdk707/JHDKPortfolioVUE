<template>
  <div class="about">
    <div class="container py-4 text-left">
        <img class="portrait" src="@/assets/HeadshotCasual12142023.png" alt="jesse headshot"> 
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
        <li>Spending hours on Google Maps looking at everything </li>
      </ul>
      </div>

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

.portrait {
  height: auto;
  border: 2px solid #353535;
  box-shadow: 3px 3px 5px #272727;
  border-radius: 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
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

h4{
  margin-top: 5em;
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
