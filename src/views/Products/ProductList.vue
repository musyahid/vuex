<template>
     <div class="w-full p-3">
        <!--Table Card-->
        <div class="bg-white border rounded shadow">
            <div class="border-b p-3">
                <h5 class="font-bold uppercase text-gray-600">Table product</h5>
            </div>
            <div class="p-5">
                <table class="w-full p-5 text-gray-700">
                    <thead>
                        <tr>
                            <th class="text-left text-blue-900">PRODUCT NAME</th>
                            <th class="text-left text-blue-900">STOCK</th>
                            <th class="text-left text-blue-900">PRICE</th>
                            <th class="text-left text-blue-900">SUPPLIER</th>
                            <th class="text-left text-blue-900">ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(product, i) in products" :key="i">
                            <td>{{product.name}}</td>
                            <td>{{product.stock}}</td>
                            <td>{{product.price}}</td>
                            <td>{{product.supplier['full_name']}}</td>
                            <a href=""><router-link
                            :to="{name:'productDetail',params:{id:product.id}}"
                            class="hover:text-red-500"
                            >DETAIL |</router-link><router-link
                            :to="{name:'productDetail',params:{id:product.id}}"
                            class="hover:text-red-500"
                            >EDIT|</router-link><router-link
                            :to="{name:'productDetail',params:{id:product.id}}"
                            class="hover:text-red-500"
                            >DELETE </router-link></a>
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
  name: "ProductList",
  created() {
    this.getProduct();
  },

  methods: {
    ...mapActions(["getProduct"]),
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>