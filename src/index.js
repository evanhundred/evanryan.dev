import _ from "lodash";
import ProjectsCard from "./scripts/ProjectsCard";
import AboutCard from "./scripts/AboutCard";
import Spacer from "./scripts/Spacer";

document.addEventListener("DOMContentLoaded", () => {
  const topSpacingContainer = document.createElement("div");
  const mainContentContainer = document.getElementById("main-page-container");
  mainContentContainer.prepend(topSpacingContainer);
  new Spacer(topSpacingContainer);

  const projectsContainer = document.querySelector("div.projects-container");
  // const projectsTitle = document.querySelector("h2.projects-title");
  const projectsCard = new ProjectsCard(projectsContainer);
  // projectsTitle.addEventListener("click", (e) =>
  //   projectsCard.expandProjects(e)
  // );
  // let expanded = false;

  const aboutDiv = document.querySelector(".about-container");
  new AboutCard(aboutDiv);
});

// -----
// next: create expandable projects cards
// -----

// document.addEventListener("DOMContentLoaded", () => {
//   const projectsContainer = document.querySelector("div.projects-container");
//   const projectsTitle = document.querySelector("h2.projects-title");
//   const projectItemsList = document.querySelector("div.project-items-list");
//   const projectsCard = new ProjectsCard(projectItemsList);
//   let expanded = false;
//   projectsTitle.addEventListener("click", (e) =>
//     projectsCard.expandProjects(e)
//   );
// // });

// ------------
// /* Template:
//  * Start Bootstrap - The Big Picture v5.0.5 (https://startbootstrap.com/template/the-big-picture)
//  * Copyright 2013-2022 Start Bootstrap
//  * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-the-big-picture/blob/master/LICENSE)
//  */
