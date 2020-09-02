<template>
     <div class="w-full p-3">
          <div>
    <button
      class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      type="button"
      style="transition: all .15s ease"
      v-on:click="toggleModal()"
    >
      ADD PRODUCT OUT
    </button>

    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <!-- a -->
          <div class="mx-auto">
        <div class="w-full max-w-xs mx-auto mt-8">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="checkForm">
            <h1 class="text-gray-700 font-bold mt-4 mb-8 text-xl">
              Add Product IN
            </h1>

            <!-- Product Name -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="productname"
                >Product Name</label
              >
              <div class="relative">
                <select v-model="product_name" 
                  class="shadow appearance-none w-full bg-white border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state">
                  <option v-for="(product, i) in products" :key="i" :value="product.id" >{{product.id}} - {{product.name}}</option>
                </select>     
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Total -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="total"
                >Total</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="total"
                type="text" v-model="total"
              />
            </div>

            <div class="flex items-center justify-between">
              <router-link to="/" class="w-full">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Add
                </button>
              </router-link>
            </div>
            <div class="mt-4">
              <button
                class="text-blue-500 text-center font-bold"
                style="transition: all .15s ease"
                v-on:click="toggleModal()"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- b -->
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
        <!--Table Card-->
        <div class="bg-white border rounded shadow">
            <div class="border-b p-3">
                <h5 class="font-bold uppercase text-gray-600">Table product out</h5>
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
                        <tr v-for="(product, i) in productsOut" :key="i">
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
  name: "ProductOutList",
    data() {
      return {
        product_name: "",
        total: "",
        showModal: false,
      };
    },
  created() {
    this.getProduct();
    this.getProductOut();
  },

  methods: {
    toggleModal() {
        this.showModal = !this.showModal;
      },
      checkForm(e) {
      let error = [];
      if (this.product_name === "") error.push("Product name Required");
      if (this.total === "") error.push("total Required");
      console.log({ error });
      if (error.length > 0) {
        this.alert = error;
      } else {
        const payload = {
          product_name: this.product_name,
          total: this.total
        };
        this.productOutAction(payload);
      }
      e.preventDefault();
      return false;
    },
    ...mapActions(["getProductOut", "getProduct", "productOutAction"]),
  },
  computed: {
    ...mapState(["productsOut", "products"]),
  },
};
</script>