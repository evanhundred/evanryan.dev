const template = document.createElement("template");
template.id = "app-template";
template.innerHTEML = `
  <section class="app">
    <menu-nav></menu-nav>
    <main class="main">
      <section id="main-page-container">
        <div class="container px-4 px-lg-5" id="content-container">
          <div class="row gx-4 gx-lg-5">
            <info-cards></info-cards>
            <projects></projects>
          </div>
        </div>
      </section>
    </main>
  </section>
`;
