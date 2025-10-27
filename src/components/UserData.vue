<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>Username</label>
      <input v-model="username" />
    </div>
    <div>
      <label>Age</label>
      <input v-model="age" />
    </div>
    <div>
      <button>Add user</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      username: "",
      age: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("add-user", this.username, this.age);
    },
  },
};
</script>
