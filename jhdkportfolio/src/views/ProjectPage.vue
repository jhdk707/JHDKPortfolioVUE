<template>
  <div class="project-container">
    <h2 class="h2 text-center" id="Portfolio">Projects</h2>
    <div class="projectsscrollcontainer">
      <div v-for="project in projects" :key="project.id" class="row">
        <div class="card col-11">
          <h5 class="card-title text-center">{{ project.title }}</h5>
          <img class="card-img-top" :src="project.image" alt="screenshot of webpage" />
          <div class="card-body">
            <p class="card-text">{{ project.description }}</p>
            <div class="btn-group mx-auto justify-content-center">
              <a :href="project.deployedLink" target="_blank" rel="noopener noreferrer" class="btn btn-light">Deployed Project</a>
              <a :href="project.githubLink" target="_blank" rel="noopener noreferrer" class="btn btn-dark">Github Repo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
//IMAGE IMPORTS FOR PROJECT CARDS 
import NationalParksimg from '@/assets/NTLPRKSSCREENCAP.png';
import NoteTakerimg from '@/assets/Notetaker5000sc.png';
import NeedleJunkeezimg from '@/assets/needlejunkeez.png';
import WorkdaySchimg from '@/assets/workdayscheduler.png';

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
          description: 'A group project which included full-stack dev, client side, middleware, and back end. It was a lot of fun although we were met with some pretty big battles.',
          deployedLink: 'https://notetaker5000.herokuapp.com/',
          githubLink: 'https://github.com/jhdk707/NoteTaker5000',
        },
        {
          id: 3,
          title: 'Groovana Project',
          image: NeedleJunkeezimg,
          description: 'A group project which included full-stack dev, client side, middleware, and back end. It was a lot of fun although we were met with some pretty big battles.',
          deployedLink: 'https://needlejunkies.herokuapp.com/',
          githubLink: 'https://github.com/jhdk707/NeedleJunkies',
        },
        {
          id: 3,
          title: 'Workday Scheduler',
          image: WorkdaySchimg,
          description: 'A group project which included full-stack dev, client side, middleware, and back end. It was a lot of fun although we were met with some pretty big battles.',
          deployedLink: 'https://jhdk707.github.io/WorkDayScheduler/',
          githubLink: 'https://github.com/jhdk707/WorkDayScheduler',
        },
      ],
    };
  },
};
</script>

<style>
.card-img-top {
  display: block;
  margin: 5 auto 2rem;
  border-style: groove;
  border-color: antiquewhite;
  width: 500px;
  height: auto;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  
}


</style>


