class AboutCard {
  constructor(containerDiv) {
    this.containerDiv = containerDiv;

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
