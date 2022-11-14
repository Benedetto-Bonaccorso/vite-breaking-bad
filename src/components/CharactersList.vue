<script>
    import CharacterTemplate from "./CharacterTemplate.vue"
    import {state} from "../state.js"

    export default{
        name: "CharactersList",
        components: {
            CharacterTemplate
        },
        data(){
            return{
                state
            }
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