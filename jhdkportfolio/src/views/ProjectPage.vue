<!-- PROJECTS PAGE 11/29/2023 -->

<template>
  <div class="project-container">
    <h2 class="h2 text-center" id="Portfolio">Projects</h2>
    <div class="projectsscrollcontainer">
      <div v-for="project in projects" :key="project.id" class="row">
        <div class="card">
          <h5 class="card-title text-center">{{ project.title }}</h5>
          <img class="card-img-top" :src="project.image" alt="screenshot of webpage" />
          <div class="card-body">
            <p class="card-text">{{ project.description }}</p>
            <div class="btn-group">
              <button @click="openLink(project.deployedLink)" class="btn">Deployed Project</button>
              <button @click="openLink(project.githubLink)" class="btn">Github Repo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
//IMAGE IMPORTS FOR PROJECT CARDS - 11/29/2023
import NationalParksimg from '@/assets/NTLPRKSSCREENCAP.png';
import NoteTakerimg from '@/assets/Notetaker5000sc.png';
import NeedleJunkeezimg from '@/assets/needlejunkeez.png';
import WorkdaySchimg from '@/assets/workdayscheduler.png';
import WeatherDashimg from '@/assets/weatherapp.png';
import PasswordGenimg from '@/assets/passwrdgensc.png';

export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'National Parks Reviewer 5000',
          image: NationalParksimg,
          description: 'A group project which included full-stack dev, client side, middleware, and back end. It was a lot of fun although we were met with some pretty big battles.',
          deployedLink: 'https://lit-eyrie-51719.herokuapp.com/',
          githubLink: 'https://github.com/jhdk707/NationalParksReviewer5000',
        },
        // Add more projects in a similar format
        {
          id: 2,
          title: 'Note Taker App',
          image: NoteTakerimg,
          description: 'A basic app that takes and stores notes. Planning to convert this into a PWA in the future',
          deployedLink: 'https://notetaker5000.herokuapp.com/',
          githubLink: 'https://github.com/jhdk707/NoteTaker5000',
        },
        {
          id: 3,
          title: 'Groovana Project',
          image: NeedleJunkeezimg,
          description: 'Originated as a final project in my Berkely Cohort, my team and I are continuing to develop this into a working Social Media Platform',
          deployedLink: 'https://needlejunkies.herokuapp.com/',
          githubLink: 'https://github.com/jhdk707/NeedleJunkies',
        },
        {
          id: 4,
          title: 'Workday Scheduler',
          image: WorkdaySchimg,
          description: 'A basic workday scheduler that you can use to stay on task. It will alert via change of colors if you are ahead/ behind schedule.',
          deployedLink: 'https://jhdk707.github.io/WorkDayScheduler/',
          githubLink: 'https://github.com/jhdk707/WorkDayScheduler',
        },
        {
          id: 5,
          title: 'Weather Dashboard',
          image: WeatherDashimg,
          description: 'A basic workday scheduler that you can use to stay on task. It will alert via change of colors if you are ahead/ behind schedule.',
          deployedLink: 'https://jhdk707.github.io/WeatherApp/',
          githubLink: 'https://github.com/jhdk707/WeatherApp',
        },
        {
          id: 6,
          title: 'Secure Password Generator',
          image: PasswordGenimg,
          description: 'A customizable Password Generator. Allows you to chose between 8-128 char, and decide on what type of characters you need.',
          deployedLink: 'https://jhdk707.github.io/Password-Generator-Assignment/',
          githubLink: 'https://github.com/jhdk707/Password-Generator-Assignment',
        },
      ],
    };
  },
  methods: {
    openLink(link) {
      window.open(link, '_blank').focus();
    },
  },
};
</script>
<style>


.project-container {
 color: white;
}

.project-container ::-webkit-scrollbar {
 display: none;
 overflow-y: scroll;
}

.card {
  padding-bottom: 2em;
}

.card-img-top {
  display: block;
  margin: 5 auto 2rem;
  border-style: groove;
  border-color: antiquewhite;
  width: 500px;
  height: auto;
}

.card-title.text-center {
  color: aliceblue;
  font-size: large;
}

/* .btn {
  background-color: black;
  padding-right: 1em;
  border: .05em;
  border-style: solid;
} */



@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  
}

</style>


