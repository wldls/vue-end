const Cookie = process.client ? require("js-cookie") : undefined;
const cookieparser = process.server ? require("cookieparser") : undefined;

export const state = () => ({
  logged: false,
  token: "",
  skeleton: null,
  pageLoading: false,
});

export const mutations = {
  login(state, token) {
    state.logged = true;
    state.token = token;
  },
  logout(state) {
    state.logged = false;
    state.token = "";
  },
  updateSkeleton(state, payload) {
    state.skeleton = payload;
  },
  updateLoading(state, payload) {
    state.pageLoading = payload;
  },
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      const auth = parsed.token;

      if (auth) {
        commit("login", auth);
        this.$api.setToken(auth);
      } else {
        commit("logout");
      }
    }
  },
  LOGOUT({ commit }) {
    commit("logout");
    Cookie.remove("token");
  },
};
