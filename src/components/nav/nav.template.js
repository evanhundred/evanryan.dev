const template = document.createElement("template");

template.id = "nav-template";
template.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="#main-page-container">evan</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#main-page-container">home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about-container">about</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects-container">projects</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;

export default template;
