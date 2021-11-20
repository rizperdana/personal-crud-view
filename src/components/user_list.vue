<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>User List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == current_index }"
          v-for="(user, index) in users"
          :key="index"
          @click="set_active_user(user, index)"
        >
          {{ user.name }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="truncate_user">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="current_user">
        <h4>User</h4>
        <div>
          <label><strong>Name:</strong></label> {{ current_user.name }}
        </div>
        <div>
          <label><strong>ID Number:</strong></label> {{ current_user.id_number }}
        </div>
        <div>
          <label><strong>Address:</strong></label> {{ current_user.address }}
        </div>
        <div>
          <label><strong>Date of Birth:</strong></label> {{ current_user.dob }}
        </div>

        <a class="btn btn-warning"
          :href="'/user/' + current_user.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a User...</p>
      </div>
    </div>
  </div>
</template>

<script>
import user_service from "../services/user_service";

export default {
  name: "users-list",
  data() {
    return {
      users: [],
      current_user: null,
      current_index: -1,
    };
  },
  methods: {
    fetch_user() {
      user_service.fetch()
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refresh_list() {
      this.fetch_user();
      this.current_user = null;
      this.current_index = -1;
    },

    set_active_user(user, index) {
      this.current_user = user;
      this.current_index = index;
    },

    truncate_user() {
      user_service.truncate()
        .then(response => {
          console.log(response.data);
          this.refresh_list();
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.fetch_user();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
