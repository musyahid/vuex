<template>
    <div class="w-full p-3">
        <!--Table Card-->
        <div class="bg-white border rounded shadow">
            <div class="border-b p-3">
                <h5 class="font-bold uppercase text-gray-600"> Detail Table product</h5>
            </div>
            <div class="p-5">
                <table class="py-5 text-gray-700">
                    <thead v-if="detailProduct">
                        <tr>
                            <th class="text-left my-6 text-blue-900">NAME</th>
                            <th> : </th>
                            <th class="text-left text-blue-900">{{detailProduct.name}}</th>
                        </tr>
                        <tr>
                            <th class="text-left my-6 text-blue-900">STOCK</th>
                            <th> : </th>
                            <th class="text-left text-blue-900">{{detailProduct.stock}}</th>
                        </tr>
                        <tr>
                            <th class="text-left my-6 text-blue-900">PRICE</th>
                            <th> : </th>
                            <th class="text-left text-blue-900">{{detailProduct.price}}</th>
                        </tr>
                        <tr>
                            <th class="text-left my-6 text-blue-900">SUPPLIER NAME</th>
                            <th> : </th>
                            <th class="text-left text-blue-900">{{detailProduct.supplier['full_name']}}</th>
                        </tr>
                        <tr>
                            <th class="text-left my-6 text-blue-900">PHONE NUMBER</th>
                            <th> : </th>
                            <th class="text-left text-blue-900">{{detailProduct.supplier['phone_number']}}</th>
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
  name: "ProductDetail",
  props: ["id"],
  created() {
    console.log({ id: this.id });
    this.getDetailProduct(this.id);
  },
  computed: {
    ...mapState(["detailProduct"]),
  },
  methods: {
    ...mapActions(["getDetailProduct"]),
  },
};
</script>