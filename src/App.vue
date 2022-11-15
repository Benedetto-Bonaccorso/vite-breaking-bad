<script>
  import axios from 'axios';
  import TemporaryLoader from "./components/TemporaryLoader.vue"
  import AppMain from "./components/AppMain.vue"
  import { state } from "./state.js"
  import CharactersList from './components/CharactersList.vue';

  export default{
    name: "app",
    components:{
      TemporaryLoader,
      AppMain
    },
    data() {
      return {
        state,
      }
    },
  
}


</script>

<template>
  
  <div class="text-center">

    <h2>breaking bad API</h2>

  </div>
  <AppMain />

</template>

<style lang="scss">
  
</style>