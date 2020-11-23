const url = `https://api.github.com/users/otaviothor/repos`;

setTimeout(function () {
  $("#loading").addClass("animated");
  $("#loading").addClass("fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated");
    $("#loading").removeClass("fadeOut");
    $("#loading").css("display", "none");
  }, 800);
}, 500);

const getRepos = () => fetch(url).then((res) => res.json());

const generateHTML = (repos) => repos.reduce(
    (
      accumulator,
      { html_url, name, description, language, stargazers_count, forks }
    ) => {
      accumulator += `
        <a href="${html_url ?? ""}">
          <section>
            <div class="section_title">${name ?? ""}</div>
            <div class="about_section">
              <span>${description ?? ""}</span>
            </div>
            <div class="bottom_section">
              <span><i class="fas fa-code"></i>${language ?? ""}</span>
              <span><i class="fas fa-star"></i>${stargazers_count ?? ""}</span>
              <span><i class="fas fa-code-branch"></i>${forks ?? ""}</span>
            </div>
          </section>
        </a>
      `;

      return accumulator
    },
    ""
  )

const insertReposIntoPage = repos => {
  $("#work_section").html(repos);
  setTimeout(function () {
    $("#loading").addClass("animated");
    $("#loading").addClass("fadeOut");
    setTimeout(function () {
      $("#loading").removeClass("animated");
      $("#loading").removeClass("fadeOut");
      $("#loading").css("display", "none");
    }, 800);
  }, 500);
}

const reposPromise = getRepos();

reposPromise
  .then(generateHTML)
  .then(insertReposIntoPage);