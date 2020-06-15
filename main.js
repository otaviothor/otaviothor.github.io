$.getJSON("data/repos.json", repos => {
  repos.forEach(repo => {
    if (!repo.fork) {
      console.log(`
        <a href="${repo.html_url}" target="_blank">
          <section>
            <div class="section_title">${repo.name}</div>
            <div class="about_section">
              <span class="dblock">${repo.description}</span>
            </div>
            <div class="bottom_section">
              <span class="dinblock"><i class="fas fa-code"></i> ${repo.language}</span>
              <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
              <span><i class="fas fa-code-branch"></i> ${repo.forks}</span>
            </div>
          </section>
        </a>
      `)
    } 
  })

}).fail(() => {
  return 
})

// setTimeout(function () {
//   document.getElementById("loading").classList.add("animated")
//   document.getElementById("loading").classList.add("fadeOut")
//   setTimeout(function () {
//     document.getElementById("loading").classList.remove("animated")
//     document.getElementById("loading").classList.remove("fadeOut")
//     document.getElementById("loading").style.display = "none"
//   }, 800)
// }, 500)
