let elements = document.querySelectorAll('div > p');

for (let i = 0; i < elements.length; i++) {
    let elem = elements[i];
    console.log( 'Selector text ' + i + ': ' + elem.innerHTML);
}