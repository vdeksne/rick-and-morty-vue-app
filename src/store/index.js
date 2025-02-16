import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    characters: [],
    isLoading: false,
    page: 1,
    selectedCharacter: null,
  },
  getters: {
    characters: (state) => state.characters,
    isLoading: (state) => state.isLoading,
    selectedCharacter: (state) => state.selectedCharacter,
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = [...state.characters, ...characters];
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    INCREMENT_PAGE(state) {
      state.page += 1;
    },
    RESET_CHARACTERS(state) {
      state.characters = [];
      state.page = 1;
    },
    SET_SELECTED_CHARACTER(state, character) {
      state.selectedCharacter = character;
    },
  },
  actions: {
    async fetchCharacters({ commit, state }) {
      if (state.isLoading) return;
      commit("SET_LOADING", true);
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${state.page}`
        );
        commit("SET_CHARACTERS", response.data.results);
        commit("INCREMENT_PAGE");
      } catch (error) {
        console.error(error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    selectCharacter({ commit }, character) {
      commit("SET_SELECTED_CHARACTER", character);
    },
  },
});
