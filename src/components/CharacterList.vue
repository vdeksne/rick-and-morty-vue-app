<!-- filepath: /Users/viktorijadeksne/Documents/Viktorija_2025/February/rickmorty/rick-and-morty-vue-app/src/components/CharacterList.vue -->
<template>
  <div class="character-list" @scroll="handleScroll">
    <div
      v-for="character in characters"
      :key="character.id"
      class="character-item"
      @click="selectCharacter(character)"
    >
      <img :src="character.image" :alt="character.name" />
      <h3>{{ character.name }}</h3>
      <p>Status: {{ character.status }}</p>
      <p>Species: {{ character.species }}</p>
    </div>
    <div v-if="isLoading" class="loading">Loading more characters...</div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "CharacterList",
  computed: {
    ...mapState(["characters"]),
    ...mapGetters(["isLoading"]),
  },
  methods: {
    ...mapActions(["fetchCharacters", "selectCharacter"]),
    handleScroll(event) {
      const bottom =
        event.target.scrollHeight ===
        event.target.scrollTop + event.target.clientHeight;
      if (bottom && !this.isLoading) {
        this.fetchCharacters();
      }
    },
    selectCharacter(character) {
      this.$store.dispatch("selectCharacter", character);
      this.$router.push({
        name: "CharacterDetail",
        params: { id: character.id },
      });
    },
  },
  mounted() {
    this.fetchCharacters();
  },
};
</script>

<style scoped>
.character-list {
  @apply grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 p-4;
}
.character-item {
  @apply flex flex-col items-center p-4 cursor-pointer;
}
.character-item img {
  @apply h-56 w-auto;
}
.loading {
  @apply text-center p-4;
}
</style>
