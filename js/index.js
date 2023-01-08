/*!
 * Start Bootstrap - The Big Picture v5.0.5 (https://startbootstrap.com/template/the-big-picture)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-the-big-picture/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener("DOMContentLoaded", () => {
  // const title = document.querySelector("h2.projects-title");
  // title.style = "color: red;";
  const projectsContainer = document.querySelector("div.projects-container");
  const projectsTitle = document.querySelector("h2.projects-title");
  const projectItems = document.querySelector("div.project-items");
  projectsTitle.addEventListener("click", (e) => expandProjects(e));
  const expandProjects = (e) => {
    e.preventDefault();
    const projectItem1 = document.createElement("div");
    projectItem1.classList.add("project-item", "pop-tracker");
    let projectTitle = "Population Tracker";
    let h4 = document.createElement("h4");
    h4.innerText = projectTitle;
    projectItem1.appendChild(h4);
    projectItems.appendChild(projectItem1);
  };
});
