Vue.component("repo-item", {
  props: ["repo"],
  template: `
    <li class="list-item">
      <a href="{{ repo.html_url }}">{{ repo.name }}</a>
      <span>{{ repo.description }}</span>
      <div>
        <span><i class="fas fa-code"></i>{{ repo.language }}</span>
        <span><i class="fas fa-star"></i>{{ repo.stargazers_count }}</span>
      </div>
    </li>
  `,
});

const profile = new Vue({
  el: "#profile",
  data: {
    user: {},
    user: "otaviothor",
  },
  methods: {
    getUser() {
      fetch(`https://api.github.com/users/${this.user}`)
        .then((res) => res.json())
        .then((data) => (this.user = data));
    },
  },
  beforeMount() {
    this.getUser();
  },
});

const repos = new Vue({
  el: "#repos",
  data: {
    repos: [],
    user: "otaviothor",
  },
  methods: {
    getRepos() {
      fetch(
        `https://api.github.com/users/${this.user}/repos?per_page=100&sort=created`
      )
        .then((res) => res.json())
        .then((data) => (this.repos = data));
    },
  },
  beforeMount() {
    this.getRepos();
  },
});

setTimeout(function () {
  const loading = document.getElementById("loading");
  loading.classList.toggle("animated");
  loading.classList.toggle("fadeOut");
  setTimeout(function () {
    loading.classList.toggle("animated");
    loading.classList.toggle("fadeOut");
    loading.style.display = "none";
  }, 800);
}, 1500);
