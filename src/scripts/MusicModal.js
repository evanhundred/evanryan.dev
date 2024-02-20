class MusicModal {
  constructor(ele) {
    this.parentEle = ele;

    const modalOverlay = document.createElement("div");
    modalOverlay.id = "modal-overlay";
    ele.append(modalOverlay);

    const modalBox = document.createElement("div");
    modalBox.id = "music-modal-box";
    ele.append(modalBox);

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalBox.append(modalContent);

    const handleClose = () => {
      this.closeModal();
    };

    const closeX = document.createElement("div");
    modalContent.append(closeX);
    closeX.classList.add("close-x");
    const xP = document.createElement("p");
    closeX.append(xP);
    xP.innerText = "X";
    xP.addEventListener("click", handleClose);

    const mainContent = document.createElement("div");
    modalContent.append(mainContent);
    mainContent.className = "main-content";

    let div = document.createElement("div");
    mainContent.append(div);
    div.className = "image-container";
    let a = document.createElement("a");
    div.append(a);
    a.href = "https://www.youtube.com/@evanryanbass";
    a.rel = "noopener noreferrer";
    a.target = "_blank";
    let p = document.createElement("p");
    a.append(p);
    p.innerText = "@evanryanbass";
    let img = document.createElement("img");
    a.append(img);
    img.src = "../../assets/yaotube.png";
    img.alt = "YouTube";

    div = document.createElement("div");
    mainContent.append(div);
    div.className = "image-container";
    a = document.createElement("a");
    div.append(a);
    a.href = "https://evanhundred.github.io/new-direction";
    a.rel = "noopener noreferrer";
    a.target = "_blank";
    img = document.createElement("img");
    a.append(img);
    img.src = "../../assets/nd-logo.jpg";
    img.alt = "New Direction Music";
  }

  closeModal() {
    this.parentEle.remove();
  }
}

export default MusicModal;
