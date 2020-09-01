<template>
     <div class="w-full p-3">
        <!--Table Card-->
        <div class="bg-white border rounded shadow">
            <div class="border-b p-3">
                <h5 class="font-bold uppercase text-gray-600">Table user</h5>
            </div>
            <div class="p-5">
                <table class="w-full p-5 text-gray-700">
                    <thead>
                        <tr>
                            <th class="text-left text-blue-900">FULL NAME</th>
                            <th class="text-left text-blue-900">USERNAME</th>
                            <th class="text-left text-blue-900">EMAIL</th>
                            <th class="text-left text-blue-900">ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(user, i) in users" :key="i">
                            <td>{{user.full_name}}</td>
                            <td>{{user.username}}</td>
                            <td>{{user.email}}</td>
                            <td><a href=""><router-link
                            :to="{name:'userDetail',params:{id:user.id}}"
                            class="hover:text-red-500"
                            >DETAIL |</router-link></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!--/table Card-->
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "UserList",
  created() {
    this.getUser();
  },

  methods: {
    ...mapActions(["getUser"]),
  },
  computed: {
    ...mapState(["users"]),
  },
};
</script>