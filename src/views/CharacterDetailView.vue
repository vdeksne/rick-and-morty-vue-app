<template>
  <div class="character-detail">
    <CharacterDetail :character="selectedCharacter" v-if="selectedCharacter" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CharacterDetail from "../components/CharacterDetail.vue";

export default {
  components: {
    CharacterDetail,
  },
  computed: {
    ...mapState(["selectedCharacter"]),
  },
};
</script>

<style scoped>
.character-detail {
  padding: 20px;
}
</style>
