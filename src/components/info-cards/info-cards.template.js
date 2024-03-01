const template = document.createElement("template");
template.id = "info-cards-template";
template.innerHTML = `
  <div class="col-lg-6 container-card">
    <h1 class="mt-5">evan ryan</h1>
    <p>Software Engineer - Ruby/Rails, React/Redux, JavaScript, PostgreSQL</p>
  </div>
  <div id="contact" class="col-lg-6 container-card">
    <h2 class="mt-5">contact</h2>
    <div class="contact-items">
      <p>p: 908-671-1226</p>
      <p>e: evan at evanryan dot dev</p>
      <div class="social-links">
        <div class="github">
          <a
            href="http://www.github.com/evanhundred"
            target="_blank"
            rel="noreferrer"
            ><img src="./assets/github.png" alt="GitHub"
          /></a>
        </div>
        <div class="linkedin">
          <a
            href="http://www.linkedin.com/in/evan-ryan-dev"
            target="_blank"
            rel="noreferrer"
            ><img src="./assets/linkedin.png" alt="LinkedIn"
          /></a>
        </div>
      </div>
    </div>
  </div>
  <about class="col-lg-6 container-card">
    <h2 class="mt-5">about</h2>
  </about>
`;
