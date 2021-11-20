<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="user.name"
          name="name"
          placeholder="your name"
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="user.password"
          name="password"
          required
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
          name="password_confirmation"
          placeholder="confirm password"
          data-vv-as="password"
        />
      </div>
      
      <div class="form-group">
        <label for="id_number">ID Number</label>
        <input
          type="textarea"
          class="form-control"
          id="id_number"
          required
          v-model="user.id_number"
          name="id_number"
          placeholder="your address"
        />
      </div>

      <div class="form-group">
        <label for="dob">Date of Birth</label>
        <input
          type="date"
          class="form-control"
          id="dob"
          required
          v-model="user.dob"
          name="dob"
          placeholder="your date of birth"
        />
      </div>

      <div class="form-group">
        <label for="address">Address</label>
        <input
          type="text"
          class="form-control"
          id="address"
          required
          v-model="user.address"
          name="address"
          placeholder="your id number"
        />
      </div>

      <button @click="submit_user" class="btn btn-success">Submit Data</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="new_user">Add New User</button>
    </div>
  </div>
</template>

<script>
import user_service from "../services/user_service";

export default {
  name: "user-add",
  data() {
    return {
      user: {
        id: null,
        name: "",
        password: "",
        id_number: "",
        address: "",
        dob: "",
      },
      submitted: false
    };
  },
  methods: {
    submit_user() {
      var data = {
        name: this.user.name,
        password: this.user.password,
        id_number: this.user.id_number,
        address: this.user.address,
        dob: this.user.dob
      };

      user_service.create(data)
        .then(response => {
          this.user.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    new_user() {
      this.submitted = false;
      this.user = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
