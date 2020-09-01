<template>
  <div>
    <h3>Register</h3>
    <!-- <form action method="post">
      full_name,
      username,
      password,
      email,
      phone_number,
    </form>-->

    <div role="alert" class="mb-4" v-if="alert.length>0">
      <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">Danger</div>
      <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>{{alert.join(",\r\n")}}</p>
      </div>
    </div>

    <form class="w-full max-w-sm" @submit="checkForm">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for>Full Name</label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id
            type="text"
            v-model="full_name"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for>Full Name</label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id
            type="text"
            v-model="username"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for>Full Name</label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id
            type="password"
            v-model="password"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for>Full Name</label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id
            type="email"
            v-model="email"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for>Full Name</label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id
            type="text"
            v-model="phone_number"
          />
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >Sign Up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      full_name: "full name",
      username: "user1",
      password: "123123",
      email: "mail@mail.com",
      phone_number: "9090909090",
      alert: [],
    };
  },
  methods: {
    checkForm(e) {
      let error = [];

      if (this.full_name === "") error.push("Full name Required");
      if (this.username === "") error.push("Username Required");
      if (this.password === "") error.push("Password name Required");
      if (this.email === "") error.push("email name Required");
      if (this.phone_number === "") error.push("Phone number Required");
      console.log({ error });
      if (error.length > 0) {
        this.alert = error;
      } else {
        const payload = {
          full_name: this.full_name,
          username: this.username,
          password: this.password,
          email: this.email,
          phone_number: this.phone_number,
        };

        this.registerAction(payload);
      }
      e.preventDefault();
      return false;
    },
    ...mapActions(["registerAction"]),
  },
  computed: {},
};
</script>