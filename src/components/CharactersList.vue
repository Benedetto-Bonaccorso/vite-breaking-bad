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
                characters: null
            }
        },
        methods: {
    
            callApi(){

                axios.get(state.url)

                .then(response => {
                    this.state.characters = response.data
                    this.state.info = response.data.info
          })
    },
  },
  mounted() {
    this.callApi(this.url)
  }

}

</script>

<template>

    <div class="row">
            <CharacterTemplate 
            :character="character" v-if="state.filteredCharacters == []" v-for="character in state.characters" 
            class="col-4 bg-gray text-white"
            />

            <CharacterTemplate 
            :character="character" v-else v-for="character in state.filteredCharacters" 
            class="col-4 bg-gray text-white"
            />
    </div>

</template>

<style>

</style>