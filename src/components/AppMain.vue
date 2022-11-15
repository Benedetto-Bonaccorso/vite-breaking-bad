<script>
    import CharactersList from './CharactersList.vue';
    import {state} from "../state.js"
    export default {
        name: "AppMain",
        components: {CharactersList},
        data(){
            return{
                state
            }
        },
        methods:{
            searchCharacters(){
                console.log(state.searchText)
            }
        },
        mounted(){
            console.log(state.searchText)
        }
    }
</script>

<template>

    <main>


        <input type="text" v-model="state.searchText">

        <CharactersList />
    </main>
</template>