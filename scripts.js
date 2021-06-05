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
