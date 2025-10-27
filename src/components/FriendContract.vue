<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailAreVisible ? "Hide" : "Show" }}
    </button>
    <ul v-if="detailAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li>
        <strong>Email: {{ emailAddress }}</strong>
      </li>
    </ul>

    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toggle-favorite", "delete"],
  data() {
    return {
      detailAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailAreVisible = !this.detailAreVisible;
    },
    toggleFavorite() {
      //   this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend() {
      this.$emit("delete", this.id);
    },
  },
};
</script>
