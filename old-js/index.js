import ProjectsCard from "./projectsCard";

/*!
 * Start Bootstrap - The Big Picture v5.0.5 (https://startbootstrap.com/template/the-big-picture)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-the-big-picture/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.querySelector("div.projects-container");
  const projectsTitle = document.querySelector("h2.projects-title");
  const projectItemsContainer = document.querySelector(
    "div.project-items-container"
  );
  const projectsCard = new ProjectsCard(projectItemsContainer);
  projectsTitle.addEventListener("click", (e) =>
    projectsCard.expandProjects(e)
  );
  let expanded = false;
});
