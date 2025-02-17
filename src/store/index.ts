import { createStore } from "vuex";
import axios from "axios";

interface Character {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  created: string;
}

interface State {
  characters: Character[];
  isLoading: boolean;
  page: number;
  selectedCharacter: Character | null;
}

const state: State = {
  characters: [],
  isLoading: false,
  page: 1,
  selectedCharacter: null,
};

export default createStore({
  state,
  getters: {
    characters: (state: State) => state.characters,
    isLoading: (state: State) => state.isLoading,
    selectedCharacter: (state: State) => state.selectedCharacter,
  },
  mutations: {
    SET_CHARACTERS(state: State, characters: Character[]) {
      state.characters = [...state.characters, ...characters];
    },
    SET_LOADING(state: State, isLoading: boolean) {
      state.isLoading = isLoading;
    },
    INCREMENT_PAGE(state: State) {
      state.page += 1;
    },
    RESET_CHARACTERS(state: State) {
      state.characters = [];
      state.page = 1;
    },
    SET_SELECTED_CHARACTER(state: State, character: Character) {
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
    async fetchCharacter({ commit }, id: number) {
      commit("SET_LOADING", true);
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        commit("SET_SELECTED_CHARACTER", response.data);
      } catch (error) {
        console.error(error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    selectCharacter({ commit }, character: Character) {
      commit("SET_SELECTED_CHARACTER", character);
    },
  },
});
