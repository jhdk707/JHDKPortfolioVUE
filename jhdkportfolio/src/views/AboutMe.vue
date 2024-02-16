<template>
  <div class="about">
    <div class="container">
        <fwb-carousel no-indicators :pictures="pictures" />
      <p class="bio">
        I am Jesse Hudak - A curious problem solver, rabbit hole spelunker, jack-of-all with a sharp wit and a penchant for conversation. 
        <br class="break">
        I am an avid learner, working into the world of tech. I have always
        enjoyed building and repairing computers, however that was not the career path I would have chosen for fulfilling work. I wanted something with a creative outlet, rewarding, fun, challenging and something that I could do anywhere.
        <br class="break">
        After joining the cohort through U.C Berkeley, I started to feel like this was the right path to get me to where I am going, albeit an arduous path. 
        <br class="break">
        I have taken on several personal projects and I am working with some team-mates that I stuck with after the cohort was over, to work and develop some projects together. I am constantly on the lookout for open-source projects that I can contribute to, and doing drills and challenges to get my skills up.
      </p>
      <div class="container py-4 text-left">
      <ul style="list-style-type:circle;">
        <h3 class="hobbyheader">Random hobbies and interests / Fun</h3>
        <li>Beach trips and tidepooling</li>
        <li>Body Surfing</li>
        <li>Working Out/ Hiking, have lost 40lbs since last April!</li>
        <li>Record Collecting/ Vintage Audio Gear</li>
        <li>Playing Guitar</li>
        <li>Succulents</li>
        <li>Fungus & Mycology</li>
        <li>Reading, currently on a Sci-Fi kick</li>
        <li>Spending hours on Google Maps looking at the world, finding interesting places to go or research </li>
      </ul>
      </div>

      <h4>
        <p>Copyright 2023 @ Jesse Hudak | Made with Vue.js/ Vite/ TailwindCSS & VSCode</p>
      </h4>
    </div>
  </div>
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  {src: 'src/assets/HeadshotCasual12142023.png', alt: 'Headshot'},
  {src: 'src/assets/Carweek.jpg', alt: 'Jesse at Carshow'},
  {src: 'src/assets/EscapeRoom.jpg', alt: 'Escape Room Team Photo'},
  {src: 'src/assets/BeneciaFriends.jpg', alt: 'Downtown Benecia on birthday'},
  {src: 'src/assets/BabyGoat.jpg', alt: 'Jesse with baby goat'},
  {src: 'src/assets/OaklandMetro.jpg', alt: 'Jesse with Aaron from Giant Squid'},
  {src: 'src/assets/OroBeach.jpg', alt: 'Oro Beach Portrait'},
  {src: 'src/assets/PossoStage.jpg', alt: 'Posso Stage band with Grandfather'},
  {src: 'src/assets/RuthGrange.jpg', alt: 'Rutherford battle of the bands'},
]
</script>

<style>
.bio{
  margin-top: 2em;
  font-size: medium;
  font-weight: 500;
  background: linear-gradient(125deg, rgba(16,16,16,1) 2%, rgba(23,23,23,1) 35%, rgba(24,24,24,1) 100%);
  padding: 1em;
  border-radius: 2%;
}

.container {
    margin-top: 2em;
  }

.break {
  margin-bottom: 1em;
}

.br{
  padding: 1em;
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
  margin-left: 2em;
}


.hobbyheader{
 font-size: medium;
 font-weight: 700;
 color: rgb(227, 160, 8);
 margin-left: -1.5em;
 border-bottom: solid rgb(227, 160, 8);

}

h4{
  margin-top: 5em;
}

@media (max-width: 1200px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }


  .container {
    margin-top: 2em;
  }
}
</style>
