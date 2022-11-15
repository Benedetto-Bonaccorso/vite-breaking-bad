import {reactive} from "vue"

export const state = reactive ({
  url: 'https://www.breakingbadapi.com/api/characters',
  characters: null,
  info: null,
  error: null,
  searchText: ""
})