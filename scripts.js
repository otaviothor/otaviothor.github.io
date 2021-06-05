const profile = new Vue({
  el: "#profile",
  data: {
    user: {},
    repos: [],
    user: "otaviothor",
  },
  methods: {
    getUser() {
      fetch(`https://api.github.com/users/${this.user}`)
        .then((res) => res.json())
        .then((data) => (this.user = data));
    },
    getRepos() {
      fetch(
        `https://api.github.com/users/${this.user}/repos?per_page=100&sort=created`
      )
        .then((res) => res.json())
        .then((data) => (this.repos = data));
    },
  },
  beforeMount() {
    this.getUser();
    this.getRepos();
  },
});
