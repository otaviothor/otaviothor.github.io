Vue.component("repo-card", {
  props: ["repo"],
  template: `
    <a href="{{ repo.html_url }}">
      <section>
        <div class="section_title">{{ repo.name }}</div>
        <div class="about_section">
          <span>{{ repo.description }}</span>
        </div>
        <div class="bottom_section">
          <span><i class="fas fa-code"></i>{{ repo.language }}</span>
          <span><i class="fas fa-star"></i>{{ repo.stargazers_count }}</span>
        </div>
      </section>
    </a>
  `,
});

const app = new Vue({
  el: "#app",
  data: {
    repos: [],
  },
  methods: {
    getRepos() {
      fetch("https://api.github.com/users/otaviothor/repos")
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
