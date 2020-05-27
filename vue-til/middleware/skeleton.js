export default function ({ store, route }) {
  let skeleton = null;

  // console.log(process.server, store.state.postList);

  if (route.name.indexOf("index") === 0) {
    skeleton = "index";
  }

  store.commit("updateSkeleton", skeleton);
}
