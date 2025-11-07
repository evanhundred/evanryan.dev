import _ from 'lodash';
import ProjectsCard from './scripts/ProjectsCard';
import AboutCard from './scripts/AboutCard';
import Spacer from './scripts/Spacer';

import printMe from './print.js';

document.addEventListener('DOMContentLoaded', () => {
  const topSpacingContainer = document.createElement('div');
  const mainContentContainer = document.getElementById('main-page-container');
  mainContentContainer.prepend(topSpacingContainer);
  const topSpacingInstance = new Spacer(topSpacingContainer);

  // const projectsContainer = document.querySelector('div.projects-container');
  // const projectsCard = new ProjectsCard(projectsContainer);
  // const projectsContainer = document.querySelector('div.projects-container');
  // const projectsCard = new ProjectsCard(projectsContainer);
  const aboutDiv = document.querySelector('.about-container');
  new AboutCard(aboutDiv);

  function component() {
    const element = document.createElemtn('div');
    element.innerHTML = _.join(['Hello', 'webpack'], '');
    const btn = document.createElement('button');
    btn.innerText = 'Click me and check the console!';
    btn.onclick = printMe;

    element.append(btn);

    return element;
  }
});
document.body.appendChild(component());
