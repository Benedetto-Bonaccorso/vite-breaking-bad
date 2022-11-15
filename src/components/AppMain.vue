<script>
    import CharactersList from './CharactersList.vue';
    import {state} from "../state.js"
    export default {
        name: "AppMain",
        components: {CharactersList},
        data(){
            return{
                state,
                category: ""
            }
        },
        methods:{
            searchCharacters(){
                console.log(state.searchText)
            },
            filterSeriesList(){
                this.state.category = this.category

                console.log(this.state.category)
                this.state.filteredCharacters = []
                this.state.characters.forEach(character => {
                    if(character.category.toLowerCase().includes(this.state.category.toLowerCase()) == true){
                    this.state.filteredCharacters.push(character)
                    }
                });
                console.log(this.state.filteredCharacters)
            }
                
        }
    }
</script>

<template>

    <main>

        <div class="input-wrapper text-center w-100">
            <input type="text" v-model="state.searchText" class="w-50">
            <select v-model="category" @change="filterSeriesList()">
                <option disabled value="">Select a Category to Show Results</option>
                <option value="breaking bad" v-on:click="category = 'breaking bad'">Breaking Bad</option>
                <option value="better call saul" v-on:click="category = 'better call saul'">Better Call Saul</option>
            </select>
        </div>

        <div class="container">
            <CharactersList />
        </div>
    </main>
</template>