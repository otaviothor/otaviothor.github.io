Vue.component("repo-card", {
  props: ["repo"],
  template: `
    <a href="{{ repo.html_url }}">
      <section>
        <div class="header">
          <h2>{{ repo.name }}</h2>
          <div class="info">
            <span><i class="fas fa-code"></i>{{ repo.language }}</span>
            <span><i class="fas fa-star"></i>{{ repo.stargazers_count }}</span>
          </div>
        </div>
        <div class="about_section">
          <span>{{ repo.description }}</span>
        </div>
      </section>
    </a>
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

const work = new Vue({
  el: "#work",
  data: {
    user: {},
    repos: [],
    user: "otaviothor",
  },
  methods: {
    getRepos() {
      fetch(`https://api.github.com/users/${this.user}/repos`)
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
