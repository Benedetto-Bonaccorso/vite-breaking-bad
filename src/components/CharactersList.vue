<script>
    import axios from 'axios';
    import CharacterTemplate from "./CharacterTemplate.vue"
    import {state} from "../state.js"

    export default{
        name: "CharactersList",
        components: {
            CharacterTemplate,
        },
        data(){
            return{
                state,
                url: "https://www.breakingbadapi.com/api/characters",
                characters: null
            }
        },
        methods: {
    
            callApi(url){

                axios.get(url)

                .then(response => {
                    console.log(response)
                    this.state.characters = response.data
                    this.state.info = response.data.info
                    console.log(this.state.characters)
                    console.log(response.data)
          })
    },
  },
  mounted() {
    this.callApi(this.url)
  }

}

</script>

<template>

    <div class="container">
        <h1>characters</h1>
        <div class="row">
            <CharacterTemplate :character="character" v-for="character in state.characters" />
        </div>
    </div>

</template>

<style>

</style>