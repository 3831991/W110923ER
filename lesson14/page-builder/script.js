const page = document.querySelector("#page");

function bgChange(elem) {
    page.style.backgroundColor = elem.value;
}

function paddingChange(elem) {
    page.style.padding = elem.value + 'px';
}