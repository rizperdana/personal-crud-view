<template>
  <div v-if="current_user" class="edit-form">
    <h4>User</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name"
          v-model="current_user.name"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="current_user.password"
          name="password"
          v-validate="'required'"
          placeholder="your password"
          ref="password"
        />
      </div>

      <div class="form-group">
        <label for="confirmation">Password Confirmation</label>
        <input
          type="password"
          class="form-control"
          id="confirm_password"
          v-validate="'required|confirmed:password'"
          name="password_confirmation"
          placeholder="confirm password"
          data-vv-as="password"
        />
      </div>

      <div class="form-group">
        <label for="id_number">ID Number</label>
        <input type="text" class="form-control" id="id_number"
          v-model="current_user.id_number"
        />
      </div>

      <div class="form-group">
        <label for="address">Address</label>
        <input type="textarea" class="form-control" id="address"
          v-model="current_user.address"
        />
      </div>

      <div class="form-group">
        <label for="dob">Date of Birth</label>
        <input type="date" class="form-control" id="dob"
          v-model="current_user.dob"
        />
      </div>
    </form>

    <button class="btn btn-danger"
      @click="delete_user"
    >
      Delete
    </button>

    <button type="submit" class="btn btn-primary"
      @click="update_user"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a User...</p>
  </div>
</template>

<script>
import user_service from "../services/user_service";

export default {
  name: "user-detail",
  data() {
    return {
      current_user: null,
      message: ''
    };
  },
  methods: {
    get_user(id) {
      user_service.detail(id)
        .then(response => {
          this.current_user = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    update_user() {
      user_service.update(this.current_user.id, this.current_user)
        .then(response => {
          console.log(response.data);
          this.message = 'The user was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    delete_user() {
      user_service.delete(this.current_user.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "users" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.get_user(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
