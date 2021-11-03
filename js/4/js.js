let div = document.createElement('div')
div.style.height = '300px'
div.style.width = '400px'
div.style.margin= '10px 0px 0px 500px'
div.style.border='2px solid black'
let h1 = document.createElement('h1')
h1.style.color = 'red'
h1.style.marginLeft = '5px'
h1.appendChild(document.createTextNode('my Tasks'))
div.appendChild(h1)

let ul = document.createElement("ul");
ul.setAttribute("id", "my-list");
function createList(text) {
    var li = document.createElement("li");
    li.textContent = text;
    return li;
}

let list = [
    createList("user dashboard"),
    createList("admin dashboard"),
    createList("authentication"),
    createList("about page"),
    createList("content page"),
];

list.forEach(function (li) {
    ul.appendChild(li);
    li.style.listStyleType = "lower-roman";
});
ul.children[4].style.textDecoration = "line-through";
div.appendChild(ul);

let ol = document.createElement("ol");

let parent = ul.children[2].appendChild(ol);

let list2 = [createList("login"), createList("register"), createList("logout")];

list2.forEach(function (li) {
    if(li.textContent === 'register'){li.style.textDecoration = "line-through"}
    parent.appendChild(li);
    li.style.listStyleType = "circle";
});
let input = document.createElement("input");
let button = document.createElement("button");

div.appendChild(input);
div.appendChild(button);

button.textContent = "add task";
button.style.marginLeft = "5px";
input.style.marginLeft = "10px";

document.getElementsByTagName('body')[0].appendChild(div)