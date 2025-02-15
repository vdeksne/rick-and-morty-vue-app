<template>
  <div class="character-detail-container p-4">
    <div class="character-detail text-center">
      <h1 class="text-2xl font-bold mb-4">{{ character.name }}</h1>
      <p><strong>Status:</strong> {{ character.status }}</p>
      <p><strong>Species:</strong> {{ character.species }}</p>
      <p><strong>Gender:</strong> {{ character.gender }}</p>
      <p><strong>Origin:</strong> {{ character.origin.name }}</p>
      <p><strong>Location:</strong> {{ character.location.name }}</p>
      <img
        :src="character.image"
        alt="Character Image"
        v-if="character.image"
        class="max-w-full h-auto mt-4"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterDetail",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.character-detail {
  padding: 20px;
  text-align: center;
}
.character-detail img {
  max-width: 100%;
  height: auto;
}
</style>
