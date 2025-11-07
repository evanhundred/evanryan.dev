import _ from 'lodash';
import ProjectsCard from './scripts/ProjectsCard';
import AboutCard from './scripts/AboutCard';
import Spacer from './scripts/Spacer';

document.addEventListener('DOMContentLoaded', () => {
  const topSpacingContainer = document.createElement('div');
  const mainContentContainer = document.getElementById('main-page-container');
  mainContentContainer.prepend(topSpacingContainer);
  const topSpacingInstance = new Spacer(topSpacingContainer);

  const projectsContainer = document.querySelector('div.projects-container');
  const projectsCard = new ProjectsCard(projectsContainer);
  const aboutDiv = document.querySelector('.about-container');
  new AboutCard(aboutDiv);
});
