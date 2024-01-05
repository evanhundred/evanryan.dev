// import headshot from "./assets/face-lo-res.jpeg";

class AboutCard {
  constructor(containerDiv) {
    this.containerDiv = containerDiv;

    const photoCard = document.createElement("div");
    photoCard.id = "photo-container";
    this.containerDiv.appendChild(photoCard);
    let photoImg = document.createElement("img");
    photoImg.src = "./assets/face-lo-res.jpeg";
    photoCard.appendChild(photoImg);

    const resume = document.createElement("div");
    // resume.classList.add("resume-container");
    resume.id = "resume-container";
    this.containerDiv.appendChild(resume);

    let h3 = document.createElement("h3");
    h3.innerText = "resume";
    resume.appendChild(h3);

    const bio = document.createElement("bio");
    bio.id = "bio-container";
    this.containerDiv.appendChild(bio);

    let p = document.createElement("p");
    p.innerText =
      "Full Stack software engineer, open to employment and collaboration.";
    bio.appendChild(p);
    let p2 = document.createElement("p");
    p2.innerText =
      "Based in Brooklyn, NYC. Developer and musician. I specialize in React, Rails and Express. Currently studying GraphQL and Prisma.";
    bio.appendChild(p2);
  }
}

export default AboutCard;

// const createSections = () => {
//   const sections = [
//     "resume",
//     "bio"
//   ]
//   for (let i = 0; i <=sections.length; i++) {

//   }
// }
