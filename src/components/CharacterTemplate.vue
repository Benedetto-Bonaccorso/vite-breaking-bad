<script>
    export default{
        name: "characterTemplate",
        props: {
            character: Object
        }
    }
</script>

<template>
        <div class="character-card">

          <img :src="character.img" alt="">
          <p class="character-name">{{character.name}}</p>
          <p class="character-series">{{character.category}}</p>
          <p class="character-status">{{character.status}}</p>

    </div>
</template>