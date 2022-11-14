import {reactive} from "vue"

export const state = reactive ({
  API_URL: 'https://rickandmortyapi.com/api/character',
  /*
  characters: null,
  info: null,
  error: null
  */
  /*
    data() {
        return {
          characters: []
        }
      },
    mounted(){
      
      axios
          .get("https://www.breakingbadapi.com/api/characters")
          .then ( response => {
              console.log(response)
              this.characters = response.data
              console.log(this.characters)
          })
          .catch(err =>{
            console.error(err.message);
            this.error = err.message
          })
      }
      */
})