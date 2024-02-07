class ProjectsCard {
  constructor(containerDiv) {
    this.containerDiv = containerDiv;

    this.projects = {
      populationTracker: {
        title: "Population Tracker",
        gitHubUrl: "https://github.com/evanhundred/population-tracker",
        liveUrl: "https://evanhundred.github.io/population-tracker/",
        description:
          "Population Tracker is a data visualization tool, which fetches U.S. Census records to render a colorful map. Population is displayed by year, and broken down by state or territory."
      },
      yup: {
        title: "Yup",
        gitHubUrl: "https://github.com/evanhundred/yup",
        liveUrl: "https://yup.evanryan.dev",
        description:
          "Yup is a full stack Yelp clone, featuring User Auth and CRUD functionality."
      },
      nyght: {
        title: "NYGHT",
        gitHubUrl: "https://github.com/cathanderson/nyght",
        liveUrl: "https://nyght-40rn.onrender.com/",
        description:
          "NYGHT is an evening/date planning app, which presents users with an itinerary for the night based on neighborhood and preference. Logged in users can save, edit, and share itineraries with others via email."
      }
    };

    const projectsContainer = this.makeItems();
    containerDiv.appendChild(projectsContainer);
  }

  makeItems() {
    const container = document.createElement("div");
    container.classList.add("project-items-content");

    const cssIfyName = (string) => {
      let cssIfied = "";
      const symbolFilter = /[A-Za-z0-9]/;
      for (let i = 0; i < string.length; i++) {
        string[i].match(symbolFilter)
          ? (cssIfied += string[i].toLowerCase())
          : (cssIfied += "-");
      }
      return cssIfied;
    };

    Object.values(this.projects).forEach((project, idx) => {
      const projectItem = document.createElement("div");
      projectItem.classList.add(cssIfyName("project-item"));
      projectItem.classList.add(cssIfyName(project.title));

      const h4 = document.createElement("h4");
      h4.innerText = project.title;
      projectItem.appendChild(h4);

      const links = document.createElement("div");
      links.classList.add("project-links");
      projectItem.appendChild(links);

      let a = document.createElement("a");
      a.href = project.gitHubUrl;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.innerText = "GitHub";
      links.appendChild(a);

      let p = document.createElement("p");
      p.innerText = "|";
      links.appendChild(p);

      a = document.createElement("a");
      a.href = project.liveUrl;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.innerText = "Live";
      links.appendChild(a);

      const description = document.createElement("p");
      description.innerText = project.description;
      projectItem.appendChild(description);

      container.appendChild(projectItem);
    });

    return container;
  }

  expandProjects(e) {
    e.preventDefault();
    if (!expanded) {
      projectItemsContainer.appendChild(makeItems());

      expanded = true;
    } else {
      const projectItemsContent = document.querySelector(
        "div.project-items-content"
      );
      projectItemsContainer.removeChild(projectItemsContent);
      expanded = false;
    }
  }
}

export default ProjectsCard;
