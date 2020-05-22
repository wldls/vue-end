export default function ({ store, route }) {
  let skeleton = null;

  if (route.name.indexOf("index") === 0) {
    skeleton = "index";
  }

  store.commit("updateSkeleton", skeleton);
}
