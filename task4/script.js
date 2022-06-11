//1)
let elements = document.querySelectorAll('ul > li');
alert(elements[0].innerHTML);
alert(elements[4].innerHTML);
alert(elements[1].innerHTML);
alert(elements[3].innerHTML);
alert(elements[2].innerHTML);

//2)
function first() {
    let item = document.getElementById("list").firstElementChild.innerHTML;
    console.log(item);
}
first();

function last() {
    let item = document.getElementById("list").lastElementChild.innerHTML;
    console.log(item);
}
last();

let elements1 = document.querySelectorAll('ul > li');
for (let i = 0; i < elements1.length; i++) {
    let elem = elements1[i];
    if (i === 1) {
        console.log(elem.innerHTML);
    }
    if (i === 2) {
        console.log(elem.nextElementSibling.innerHTML);
    }
    if (i === 3) {
        console.log(elem.previousElementSibling.innerHTML);
    }
}

//3)
let child = document.body.firstElementChild.children;
    for (let i = 0; i < child.length; i++) {
        if (i === 0) {
            alert(child[i].innerHTML);
        }
        if (i === 1) {
            alert(child[child.length-1].innerHTML);
        }
        if (i === 2) {
            alert(child[i].previousElementSibling.innerHTML);
        }
        if (i === 3) {
            alert(child[i].innerHTML);
        }
        if (i === 4) {
            alert(child[child.length-3].innerHTML);
        }
    }