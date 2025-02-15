import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    characters: [],
    selectedCharacter: null,
    page: 1,
    loading: false,
    hasMore: true,
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = [...state.characters, ...characters];
    },
    SET_SELECTED_CHARACTER(state, character) {
      state.selectedCharacter = character;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_HAS_MORE(state, hasMore) {
      state.hasMore = hasMore;
    },
    INCREMENT_PAGE(state) {
      state.page++;
    },
    RESET_CHARACTERS(state) {
      state.characters = [];
      state.page = 1;
      state.hasMore = true;
    },
  },
  actions: {
    async fetchCharacters({ commit, state }) {
      if (state.loading || !state.hasMore) return;

      commit("SET_LOADING", true);
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${state.page}`
        );
        commit("SET_CHARACTERS", response.data.results);
        commit("SET_HAS_MORE", response.data.info.next !== null);
        commit("INCREMENT_PAGE");
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    selectCharacter({ commit }, character) {
      commit("SET_SELECTED_CHARACTER", character);
    },
    resetCharacters({ commit }) {
      commit("RESET_CHARACTERS");
    },
  },
  getters: {
    allCharacters: (state) => state.characters,
    selectedCharacter: (state) => state.selectedCharacter,
    isLoading: (state) => state.loading,
    hasMoreCharacters: (state) => state.hasMore,
  },
});

export default store;
