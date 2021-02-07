let arrow = document.getElementById("arrow");
let arrowBox = document.getElementById("arrow-box");
let leftPanel = document.querySelector("#left-menu");
let content = document.querySelector(".content");

const removeClass = (element,className) => {
    let selectedElement = document.getElementsByClassName(element);

    for(let i = 0; i < selectedElement.length; i++) {
        selectedElement[i].classList.remove(className);
    }
}

const addClass = (element,className) => {
    let selectedElement = document.getElementsByClassName(element);

    for(let i = 0; i < selectedElement.length; i++) {
        selectedElement[i].classList.add(className);
    }
}

arrowBox.onclick = () => {
    if(leftPanel.classList.contains("open")) {
        arrow.style.transform = 'rotate(0deg)';
        leftPanel.classList.remove("open");
        content.classList.remove("active-content");
        content.classList.remove("hide");

        removeClass("nav-element", "nav-open");
        removeClass("nav-elements", "nav-elements-close");
        addClass("nav-element-text","nav-element-text-close")
    } else {
        arrow.style.transform = 'rotate(180deg)';
        leftPanel.classList.add("open");
        content.classList.add("active-content");
        content.classList.add("hide");

        addClass("nav-element","nav-open");
        addClass("nav-elements","nav-elements-close");
        removeClass("nav-element-text","nav-element-text-close");
    }
}