<template>
  <div class="about">
    <div class="container py-4 text-left">
        <img class="portrait" src="@/assets/HeadshotCasual12142023.png" alt="jesse headshot"> 
      <p>
        I am Jesse Hudak - A curious problem solver, rabbit hole spelunker, jack-of-all with a sharp wit and a penchant for conversation. 
        <br>
        I am an avid learner, working into the world of tech. I have always
        enjoyed building and repairing computers, however that was not the career path I would have chosen for fulfilling work. I wanted something with a creative outlet, rewarding, fun, challenging and something that I could do anywhere.
        <br>
        After joining the cohort through U.C Berkeley, I started to feel like this was the right path to get me to where I am going, albeit an arduous path. 
        <br>
        I have taken on several personal projects and I am working with some team-mates that I stuck with after the cohort was over, to work and develop some projects together. I am constantly on the lookout for open-source projects that I can contribute to, and doing drills and challenges to get my skills up.
      </p>
      <div class="container py-4 text-left">
      <ul style="list-style-type:circle;">
        <h3>Random hobbies and interests / Fun</h3>
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



<style>
p{
  margin-top: 1em;
  font-size: medium;
  font-weight: 500;
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
