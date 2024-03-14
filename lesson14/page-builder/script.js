const page = document.querySelector("#page");

const elementSelect = {
    title: [
        'headerType',
        'color',
        'content',
    ],
    p: [
        'fontSize',
        'color',
        'content',
    ],
    input: [
        'inputType',
        'fontSize',
        'color',
        'content',
    ],
    button: [
        'fontSize',
        'color',
        'content',
    ],
};

function bgChange(elem) {
    page.style.backgroundColor = elem.value;
}

function paddingChange(elem) {
    page.style.padding = elem.value + 'px';
}

function pageToShow(id, elem) {
    document.querySelector('nav a.active').classList.remove('active');
    elem.classList.add('active');

    document.querySelector('#panelSide>div.show').classList.remove('show');
    document.getElementById(id).classList.add('show');
}

function typeSelect(selectElem) {
    const type = selectElem.value;
    const params = elementSelect[type];

    // הסתרת כל האלמנטים המוצגים
    const divs = document.querySelectorAll('#params>div');

    for (const div of divs) {
        div.classList.remove('show');
    }

    // הצגת האלמטים הנצרכים
    for (const p of params) {
        document.getElementById(p).classList.add('show');
    }
}