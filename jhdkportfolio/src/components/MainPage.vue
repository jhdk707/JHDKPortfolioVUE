<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
  <h1 class="text-5xl font-extrabold dark:text-white">Jesse Hudak</h1>
  <h2 class="text-3xl font-extrabold dark:text-gray">Full Stack Web Developer</h2>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  color: hsla(160, 100%, 37%, 1);
  text-shadow: 2px 3px 3px rgb(30, 30, 30);
}

h2 {
  font-size: 1.6rem;
  position: relative;
  text-shadow: 2px 3px 3px rgb(30, 30, 30);
}

.greetings h1,
.greetings h {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h2 {
    text-align: left;
  }
}
</style>
