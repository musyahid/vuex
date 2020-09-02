<template>
    <div class="w-full p-3">
        <!--Table Card-->
        <div class="bg-white border rounded shadow">
            <div class="border-b p-3">
                <h5 class="font-bold uppercase text-gray-600"> Detail Table user</h5>
            </div>
            <div class="p-5">
                <table class="py-5 text-gray-700">
                    <thead v-if="detailUser">
                        <tr>
                            <th class="text-left my-6 text-blue-900">FULL NAME</th>
                            <th> : </th>
                            <th class="text-left text-blue-900">{{detailUser.full_name}}</th>
                        </tr>
                        <tr>
                            <th class="text-left my-6 text-blue-900">USERNAM</th>
                            <th> : </th>
                            <th class="text-left text-blue-900">{{detailUser.username}}</th>
                        </tr>
                        <tr>
                            <th class="text-left my-6 text-blue-900">EMAIL</th>
                            <th> : </th>
                            <th class="text-left text-blue-900">{{detailUser.email}}</th>
                        </tr>
                        <tr>
                            <th class="text-left my-6 text-blue-900">PHONE NUMBER</th>
                            <th> : </th>
                            <th class="text-left text-blue-900">{{detailUser.phone_number}}</th>
                        </tr>
                        <tr>
                            <th class="text-left my-6 text-blue-900">ROLE</th>
                            <th> : </th>
                            <th class="text-left text-blue-900">{{detailUser.role}}</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
        <!--/table Card-->
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "UserDetail",
  props: ["id"],
  created() {
    console.log({ id: this.id });
    this.getDetailUser(this.id);
  },
  computed: {
    ...mapState(["detailUser"]),
  },
  methods: {
    ...mapActions(["getDetailUser"]),
  },
};
</script>