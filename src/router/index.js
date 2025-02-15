import { createRouter, createWebHistory } from "vue-router";
import CharacterListView from "../views/CharacterListView.vue";
import CharacterDetailView from "../views/CharacterDetailView.vue";

const routes = [
  {
    path: "/",
    name: "CharacterList",
    component: CharacterListView,
  },
  {
    path: "/character/:id",
    name: "CharacterDetail",
    component: CharacterDetailView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
