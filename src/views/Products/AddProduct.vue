<template>
     <div class="w-full p-3">
        <!--Table Card-->
        <div class="bg-white border rounded shadow">
            <div class="border-b p-3">
                <h5 class="font-bold uppercase text-gray-600">Table product in</h5>
            </div>
            <div class="p-5">
                <table class="w-full p-5 text-gray-700">
                    <thead>
                        <tr>
                            <th class="text-left text-blue-900">DATE</th>
                            <th class="text-left text-blue-900">TOTAL</th>
                            <th class="text-left text-blue-900">PRODUCT NAME</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(product, i) in productsIn" :key="i">
                            <td>{{product.date}}</td>
                            <td>{{product.total}}</td>
                            <td>{{product.Product['name']}}</td>
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
  name: "ProductInList",
  created() {
    this.getProductIn();
  },

  methods: {
    ...mapActions(["getProductIn"]),
  },
  computed: {
    ...mapState(["productsIn"]),
  },
};
</script>