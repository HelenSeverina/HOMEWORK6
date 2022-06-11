let main = document.createElement('main');
main.className = "mainClass check item";
document.body.prepend(main);

let div = document.createElement('div');
div.id = "myDiv";
main.append(div);

let p = document.createElement('p');
p.innerHTML = "First paragraph";
div.append(p);