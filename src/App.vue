<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contract
        v-for="friend in friends"
        :id="friend.id"
        :key="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      ></friend-contract>
    </ul>
  </section>

  <section>
    <user-data @add-user="addUser"></user-data>
    <active-user :username="username" :age="age"></active-user>
    <!-- // Task 1: 
// Add two components to the app: 
// An ActiveUser component and an UserData component
// ActiveUser should output a username (h2) and age (h3)
// UserData should output two input fields => for name and age
// Optional: Add styling of your choice

// Task 2: Output both components side-by-side in your main App template

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component -->
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "doancd",
          phone: "0328118909",
          email: "doancd@gmail.com",
          isFavorite: true,
        },
        {
          id: "2",
          name: "doancd",
          phone: "0328118909",
          email: "doancd@gmail.com",
          isFavorite: false,
        },
      ],
      username: "",
      age: "",
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(
        (item) => item.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false,
      };
      this.friends.unshift(newFriendContact);
    },
    deleteContact(friendId) {
      this.friends = this.friends.filter((item) => item.id !== friendId);
    },
    addUser(username, age) {
      this.username = username;
      this.age = age;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app ul {
  list-style: none;
  padding: 0;
}

#app form,
#app ul > li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app form div {
  margin: 1rem 0;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
</style>
