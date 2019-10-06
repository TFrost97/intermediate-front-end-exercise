const addElement = (e, node, txt, attr, value) => {
    e.preventDefault();
    console.log("submit");
    const element = document.createElement(node);
    const text = document.createTextNode(txt);
    if(txt) {
        element.appendChild(text);
        element.setAttribute(attr, value);
        document.querySelector('.content').appendChild(element);
    }

};


const searchElements = (event, nameElement) => {
    event.preventDefault();

    const infoElement = document.querySelector('.result');
    infoElement.textContent = '';

    const elements = [...document.querySelectorAll(nameElement)];
    console.log(elements);
    if(elements.length) {
        infoElement.innerHTML = `<p class="result__info"> w tym dokumencie znalazłem ${elements.length} elementów <strong>${nameElement}</strong></p>`
        showInfo(elements, infoElement);
    } else {
        infoElement.innerHTML = `<p class="result__info"> W tym dokumencie nie znalazłem elementów ${nameElement}</p>`
        return

    }
}

const showInfo = (elements, infoElements) => {
    console.log(elements);
    elements.forEach(element=> {
        const item = document.createElement('div');
        item.className = 'result__item';
        item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>Klasa/Klasy ${element.nodeName}</div>
        <div>Wysokość elementu (offsetHeight ${element.offsetHeight})</div>
        <div>Szerokość elementu (offsetWidth ${element.offsetWidth})</div>
        <div>Liczba elementów dzieci  (ChildElementCount ${element.childElementCount})</div>
        `

        infoElements.appendChild(item);
    })
 };

// listeners

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
    e, 
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value,




    ));

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements['searching-element'].value));