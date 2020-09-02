import Vue from "vue";
import Vuex from "vuex";
// import Axios from "axios";
import Api from "./api";
import createPersistedState from "vuex-persistedstate";

import router from "../router/index";

Vue.use(Vuex);


const Auth = {
  namespaced: true,
  state: () => ({
    token: "",
    user: {
      id: "",
      fullName: "",
      phone: "",
      role: "",
      username: "",
    },
    isError: false,
    errorMessage: "",
  }),
  mutations: {
    saveLogin(state, payload) {
      state.token = payload.token;
      state.user = {
        id: payload.id,
        fullName: payload.full_name,
        phone: payload.phone_number,
        role: payload.role,
        username: payload.username,
      };
    },
  },
  actions: {
    async reqLogin({ commit }, payload) {
      // console.log({ reqLogin: true });
      Api.post("/auth/login", {
        data: payload,
      })
        .then((res) => {

          const {
            data: { data },
          } = res;
          commit("saveLogin", data);
          localStorage.setItem("token", data.token);
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: data.id,
              fullName: data.full_name,
              phone: data.phone_number,
              role: data.role,
              username: data.username,
            })
          );
          router.push("/dashboard");

          // console.log({ res });
        })
        .catch((error) => {
          console.log({ error });
        });
      // const { data } = await Api.post("/auth/login", { data: payload });
      console.log({ commit });
    },
  },
};

export default new Vuex.Store({
  state: {
    score: 0,
    name: "",
    users: [],
    products: [],
    productsIn: [],
    productsOut: [],
    detailUser: null,
    detailProduct: null,
    posts: [],
    postLoading: false,
    post: null,
  },
  mutations: {
    // harus syncronus
    // method(stae,value)
    inc(state) {
      state.score++;
    },
    dec(state) {
      state.score--;
    },
    showCount(state) {
      console.log("showCount store");
      console.log(state.score);
    },
    getUsersList(state, payload) {
      state.users = payload.data;
    },
    getProductsList(state, payload) {
      state.products = payload.data;
    },
    getProductsInList(state, payload) {
      state.productsIn = payload.data;
    },
    getProductsOutList(state, payload) {
      state.productsOut = payload.data;
    },
    setDetailUser(state, payload) {
      state.detailUser = payload.data;
    },
    setDetailProduct(state, payload) {
      state.detailProduct = payload.data;
    },
    setBoolean(state, payload) {
      console.log({ payload });
      state[payload.key] = payload.value;
    },
    setDataPost(state, payload) {
      console.log({ state, payload });
      state.posts = payload.data;
    },
    setPost(state, payload) {
      state.post = payload;
    },
  },
  actions: {
    //action untuk asyncronus
    async loadCities() {
      // const {data} = await Axios
    },
    async getUser({ commit }) {
      const { data } = await Api.get('/user')
      commit("getUsersList", data.data);
    },
    async getDetailUser({ commit }, id) {
      // console.log({ detailuser: id });
      try {
        const { data } = await Api.get(`/user/${id}`);
        // console.log(data);
        commit("setDetailUser", data);
      } catch (error) {
        console.log({ error: error.message });
      }
    },
    async getProduct({ commit }) {
      const { data } = await Api.get('/product')
      commit("getProductsList", data.data);
    },
    async getDetailProduct({ commit }, id) {
      // console.log({ detailuser: id });
      try {
        const { data } = await Api.get(`/product/${id}`);
        console.log(data.data);
        commit("setDetailProduct",  data);
      } catch (error) {
        console.log({ error: error.message });
      }
    },
    async getProductIn({ commit }) {
      const { data } = await Api.get('/in')
      commit("getProductsInList", data.data);
    },
    async getProductOut({ commit }) {
      const { data } = await Api.get('/out')
      commit("getProductsOutList", data.data);
    },

    async allPost({ commit }) {
      commit("setBoolean", { key: "postLoading", value: true });
      const { data } = await Api.get("/posts");
      console.log({ allpost: data });
      commit("setDataPost", { data });
      commit("setBoolean", { key: "postLoading", value: false });
    },
    async detailPost({ commit }, id) {
      commit("setBoolean", { key: "postLoading", value: true });
      const { data } = await Api.get(`/posts/${id}`);
      commit("setPost", data);
      // console.log({ data });
      commit("setBoolean", { key: "postLoading", value: false });
    },

    async registerAction({ commit }, payload) {
      commit("setBoolean", { key: "postLoading", value: true });
      Api.post("/auth/signup", JSON.stringify({ data: payload }))
        .then((res) => {
          console.log({ res });
        })
        .catch((errr) => {
          console.log({ errr: errr.message });
        });
      // console.log({ registerAction: data });
      commit("setBoolean", { key: "postLoading", value: false });
    },
    async productOutAction(payload) {

      Api.post("/in", JSON.stringify({ data: payload }))
        .then((res) => {
          console.log({ res });
        })
        .catch((errr) => {
          console.log({ errr: errr.message });
        });
      // console.log({ registerAction: data });
    },
  },
  getters: {
    // untuk memanipulasi data state
    // eventUser(state) {},
    // oddUser(state) {},
  },
  modules: {
    Auth,
  },
  plugins: [createPersistedState()],
});
