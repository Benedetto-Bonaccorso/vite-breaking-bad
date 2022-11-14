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
        url: "https://www.breakingbadapi.com/api/characters"
      }
    },
  
}


</script>

<template>
  

  <!--

  <div class="prova">
    <p v-for="character in state.characters">
      {{character.name}}
    </p>
  </div>
  -->
  <AppMain />

  <footer id="site-footer">
    
  </footer>
</template>

<style lang="scss">
  
</style>