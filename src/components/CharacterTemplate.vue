<script>
    export default{
        name: "characterTemplate",
        props: {
            character: Object
        }
    }
</script>

<template>
    <div class="col">
        <div class="character">
          <img :src="character.img" alt="">
          <p class="character-name">{{character.name}}</p>
          <p class="character-series">{{character.category}}</p>
          <p class="character-status">{{character.status}}</p>
        </div>
    </div>
</template>