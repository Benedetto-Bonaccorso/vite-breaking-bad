<script>
  import axios from 'axios';
  import TemporaryLoader from "./components/TemporaryLoader.vue"
  import AppMain from "./components/AppMain.vue"
  import {state} from "./state.js"

  export default{
    name: "app",
    characters: [],
    components:{
      TemporaryLoader,
      AppMain
    },
    data() {
      return {
        state,
      }
  },
  methods: {
    callApi(url){

      axios.get(url)

        .then(response => {
          console.log(response)
          this.state.characters = response.data.results
          this.state.info = response.data.info
        })
    }
  }
}

</script>

<template>
  

  <!--main-->

  <AppMain />

  <footer id="site-footer">
    
  </footer>
</template>

<style lang="scss">
  
</style>