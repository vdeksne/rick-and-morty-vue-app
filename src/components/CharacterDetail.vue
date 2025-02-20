<template>
  <div class="main">
    <div class="character-detail">
      <img
        :src="character.image"
        alt="Character Image"
        v-if="character.image"
        class="image"
        loading="eager"
      />
      <div class="info text-left">
        <h1 class="heading">{{ character.name }}</h1>
        <p class="paragraph">
          Character Id: <strong class="par-color">{{ character.id }}</strong>
        </p>
        <p class="paragraph">
          Species: <strong class="par-color">{{ character.species }}</strong>
        </p>
        <p class="paragraph">
          Status: <strong class="par-color">{{ character.status }}</strong>
        </p>
        <p class="paragraph">
          Gender: <strong class="par-color">{{ character.gender }}</strong>
        </p>
        <p class="paragraph">
          Origin: <strong class="par-color">{{ character.origin.name }}</strong>
        </p>
        <p class="paragraph">
          Location:
          <strong class="par-color">{{ character.location.name }}</strong>
        </p>
        <p class="paragraph">
          Created Date:
          <strong class="par-color">{{ formattedCreatedDate }}</strong>
        </p>
      </div>
    </div>
    <button @click="goBack" class="back-button">Back</button>
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
  computed: {
    formattedCreatedDate() {
      if (!this.character || !this.character.created) return "";
      const date = new Date(this.character.created);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
  beforeRouteLeave(to, from, next) {
    from.meta.scrollPosition = window.scrollY;
    next();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (from.meta.scrollPosition) {
        window.scrollTo(0, from.meta.scrollPosition);
      }
    });
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/styles.scss";

.character-detail-container {
  position: relative;
  margin: 7.5rem 7.5rem 4rem;
}

.back-button {
  cursor: pointer;
  color: #282828;
  font-family: $font-family;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.625rem;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  display: flex;
  justify-content: flex-start;
  margin-top: 4rem;
}

.back-button:hover {
  color: #000000;
}

.character-detail {
  padding: 0;
  display: flex;
}

.character-detail img {
  max-width: 100%;
  height: auto;
}
.heading {
  color: #282828;
  font-family: $font-family;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.625rem; /* 130% */
}
.paragraph {
  color: #757575;
  font-family: $font-family;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.125rem; /* 128.571% */
  margin-top: 0.5rem;
}
.par-color {
  color: #282828;
}
.info {
  margin-left: 1.5rem;
}
.image {
  width: 25rem;
  height: 25rem;
}
.main {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 7.5rem;
}

@media screen and (max-width: 900px) {
  .main {
    margin: 3rem;
  }
}

@media screen and (max-width: 580px) {
  .character-detail {
    flex-direction: column;
  }
  .info {
    margin-top: 2rem;
    margin-left: 0;
  }
  .main {
    margin: 1rem;
  }
}
</style>
