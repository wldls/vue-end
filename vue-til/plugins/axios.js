export default function ({ $axios, store, redirect }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: "text/plain, */*",
      },
    },
  });

  api.onError((error) => {
    if (error.response.status === 401) {
      redirect("/login");
    }
  });

  api.setToken(store.state.token);

  // Set baseURL to something different
  api.setBaseURL("http://localhost:5000");

  // Inject to context as $api
  inject("api", api);
}
