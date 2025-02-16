<template>
  <div>
    <CharacterList />
  </div>
</template>

<script>
import CharacterList from "../components/CharacterList.vue";

export default {
  name: "CharacterListView",
  components: {
    CharacterList,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
