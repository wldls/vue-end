export default function ({ store, redirect }) {
  if (!store.state.logged) {
    return redirect("/login");
  }
}
