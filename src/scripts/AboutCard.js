class AboutCard {
  constructor(containerDiv) {
    this.containerDiv = containerDiv;

    const photoCard = document.createElement('div');
    photoCard.id = 'photo-container';
    this.containerDiv.appendChild(photoCard);
    let photoImg = document.createElement('img');
    photoImg.src = './assets/face-lo-res.jpeg';
    photoImg.classList.add('img-fluid');
    photoImg.style.borderRadius = '5px';
    photoCard.appendChild(photoImg);

    const resume = document.createElement('div');
    resume.id = 'resume-container';
    this.containerDiv.appendChild(resume);

    const openResumeFile = () => {
      window.open('/assets/evan-resume.pdf', 'resumeTab');
    };

    let h3 = document.createElement('h3');
    h3.innerText = 'resume';
    h3.style.color = '#0d6efd';
    h3.addEventListener('click', openResumeFile);
    resume.appendChild(h3);

    const bio = document.createElement('div');
    bio.id = 'bio-container';
    this.containerDiv.appendChild(bio);

    let p = document.createElement('p');
    p.innerText = 'Full Stack software engineer, open to employment and collaboration.';
    bio.appendChild(p);
    let p2Container = document.createElement('div');
    p2Container.id = 'bio-p2-container';
    bio.appendChild(p2Container);
    let p2 = document.createElement('p');
    p2.innerText = 'Based in Brooklyn, NYC. Developer and ';
    p2Container.appendChild(p2);
    let a = document.createElement('a');
    a.href = 'https://www.youtube.com/@evanryanbass';
    a.rel = 'noopener noreferrer';
    a.target = '_blank';
    a.className = 'musician-link';
    let linkText = document.createTextNode('musician');
    a.appendChild(linkText);
    p2.appendChild(a);
    let span = document.createElement('span');
    span.innerText = '. JavaScript, React, Rails and PostgreSQL are the backbone of my current work. Django and GraphQL studies are in progress.';
    let langsCurrent = ['Javascript', 'React', 'Rails', 'PostgreSQL'];
    let langsInProgress = ['Django', 'GraphQL'];

    // span.innerText = '. I specialize in JavaScript, React, Rails and PostgreSQL. Currently studying Java and GraphQL.';
    p2.appendChild(span);

    const wakaChart = document.createElement('div');
    wakaChart.id = 'waka-chart';
    this.containerDiv.appendChild(wakaChart);

    let figure = document.createElement('figure');
    const embed = document.createElement('embed');
    embed.src = 'https://wakatime.com/share/@evan100/0ca8456d-fb4d-4630-a258-558c233f632e.svg';

    figure.appendChild(embed);
    wakaChart.appendChild(figure);
  }
}

export default AboutCard;

// 7 day:
// 'https://wakatime.com/share/@evan100/9db7ba49-755e-4850-9106-fb17dfc9c2ac.svg';
// prev 7 day:
// "https://wakatime.com/share/@evan100/cba552fa-2d56-4117-87a8-008ebc12f6af.svg";
