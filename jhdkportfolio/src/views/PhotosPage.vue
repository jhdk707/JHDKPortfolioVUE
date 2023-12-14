<!-- <template>
  <fwb-button gradient="purple-blue" outline>Purple to blue</fwb-button>
  <fwb-button gradient="cyan-blue" outline>Cyan to blue</fwb-button>
  <fwb-button gradient="green-blue" outline>Green to blue</fwb-button>
  <fwb-button gradient="purple-pink" outline>Purple to pink</fwb-button>
  <fwb-button gradient="pink-orange" outline>Pink to orange</fwb-button>
  <fwb-button gradient="teal-lime" outline>Teal to lime</fwb-button>
  <fwb-button gradient="red-yellow" outline>Red to yellow</fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>
  
<style scoped>

@media (min-width: 1024px) {
.about {
      min-height: 100vh;
      display: flex;
      align-items: center;
 }
}
</style> -->
<template>
  <fwb-button-group>
    <fwb-button>Button Default</fwb-button>
    <fwb-button color="purple">Button Purple</fwb-button>
    <fwb-button color="alternative">Button Alternative</fwb-button>
    <fwb-button color="red">Button Red</fwb-button>
  </fwb-button-group>
</template>

<script setup>
import { FwbButtonGroup, FwbButton } from 'flowbite-vue'
</script>