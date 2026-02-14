// DOM -- Document Object Model
// All Website Code --> DOM
// Website Output --> DOM
// DOM -- HTML body

// DOM Tree Structure:
// Node --> Element (ex. h1, p, b, i), text (ex. lorem)
//comment , tags

// DOM Manipulation - change body or website using
// select element from html
// chage text
// change html
// change css
// change attribute
//event listeners

// Selecting Elements

// getElementById
let a = document.getElementById("abc");
console.log(a);
// console.dir(a);

// getElementsByClassName
let b = document.getElementsByClassName("abc");
console.dir(b);

// getElementsByTagName
let temp_c = document.getElementsByTagName("h1");
console.dir(temp_c);

// querySelector and querySelectorAll
// most used in project and used by company
let c = document.querySelector("h1") // -- only 
// select first element that find in your html
console.dir(c);

let d = document.querySelectorAll("h1")  // select all elements in your html
console.log(d);


// Text/Content access: innerText, textContent, innerHTML
let e = document.querySelector("h1")
console.dir(e);

e.innerText = "first h1 tag";
// document.querySelector("h1").innerText = "first h1 tag"

e.textContent = "h1 tag"

e.innerHTML="<i>first h1 tag</i>"

// e.outerHTML = "<i>h1 with outertext</i>"
// e.outerHTML = "h1 with outertext"

// outer vs inner
// innerText -- show text between tag -- ignore tag
// outerText -- show text between tag -- remove tag

// innerHTML -- show text between too tag -- not tag
// outerHTML -- show text with tag
    
// ----------------------------------------------
// Attribute Manipulation
// getAttribute, setAttribute, removeAttribute
let link = document.querySelector('a')
console.dir(link)
// console.log("get Attribute", info) // -- give value of href attribute

// link.href = "https://www.google.com/"
// element.setAttribute("name", "change")
link.setAttribute("href", "www.google.com")
let info = link.getAttribute("target");
console.log("get Attribute", info) // -- give value of href attribute

// element.removeAttribute("name")
link.removeAttribute("target")



// Dynamic DOM manipulation
// createElement, appendChild, removeChild, prepend

// createElement
let pre_tag = document.createElement("pre");
console.log(pre_tag);
pre_tag.textContent = "Hello Pre tag"

// append / prepend
// document.querySelector("body").append(pre_tag); // add tag into last place in body
document.querySelector("body").prepend(pre_tag); // add tag into first place in body


// // remove
let remove_h1 = document.querySelector("#abc")
remove_h1.remove();

// appendChild
let div_h1 = document.createElement("div");
div_h1.textContent = "innder Div Tag create with JS";
document.querySelector(".box").appendChild(div_h1)

// --------------------------------------------------
// Style Updates via .style and classList (add, remove, toggle)
let h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.backgroundColor = "black";
h1.style.fontFamily = "sherif";
h1.style.textTransform = "capitalize";


// ClassList -- add
let box = document.querySelector(".box1");
console.dir(box);
box.classList.add("box-style");
console.dir(box);


// remove
box.classList.remove("box1");

// toggle -- class --> available --> remove it
//          class --> not available --> add it
box.classList.toggle("box1");




// ===============================
// DOM QUESTIONS – ALL ANSWERS
// ===============================

// 1. What is DOM?
// DOM (Document Object Model) is a programming interface for HTML.
// It represents HTML as a tree structure of nodes.

// 2. Types of DOM Nodes:
// - Document Node
// - Element Node
// - Text Node
// - Attribute Node
// - Comment Node

// 3. Element Node vs Text Node
// Element Node → Represents HTML tags (<p>, <div>)
// Text Node → Represents text inside elements

// 4. DOM Structure Example:
// <div>Hello<span>World</span></div>
// div → Element Node
// "Hello" → Text Node
// span → Element Node
// "World" → Text Node

// 5. getElementById vs querySelector
// getElementById → Select by ID only
// querySelector → Select any CSS selector

// 6. getElementsByClassName
// Returns HTMLCollection (not a real array)

// 7. Select all buttons with class "buy-now"
let buttons = document.querySelectorAll(".buy-now");

// 8. T1: Change heading text
let heading = document.getElementById("heading");
if (heading) {
  heading.textContent = "Welcome to JS DOM";
}

// 9. T2: Select all <li> and print text
let list = document.querySelectorAll("li");

list.forEach((val) => {
  console.log(val.textContent);
});

for (let i = 0; i < list.length; i++) {
  console.log(list[i].textContent);
}

// 10. innerText vs textContent vs innerHTML
// innerText → Visible text only
// textContent → All text
// innerHTML → HTML content

// 11. Use textContent when:
// - Changing only text
// - Avoiding security issues (XSS)

// 12. T3: Replace paragraph content
let para = document.querySelector("p");
if (para) {
  para.innerHTML = "<b> Updated </b> by JavaScript";
}

// 13. Get image src
let img = document.querySelector("img");
if (img) {
  console.log(img.src);
}

// 14. setAttribute()
// Adds or updates an attribute
// element.setAttribute("class", "box");

// 15. Add title attribute dynamically
let div = document.querySelector("div");
if (div) {
  div.setAttribute("title", "This is a tooltip");
}

// 16. Remove disabled attribute from button
let btn = document.querySelector("button");
if (btn) {
  btn.removeAttribute("disabled");
}

// 17. createElement()
// Creates new element and returns element node
let newDiv = document.createElement("div");

// 18. appendChild() vs prepend()
// appendChild() → Adds at end
// prepend() → Adds at beginning

// 19. Remove element using removeChild()
let parent = document.querySelector("ul");
if (parent && parent.firstElementChild) {
  parent.removeChild(parent.firstElementChild);
}

// Modern way:
// element.remove();

// 20. Create new <li> and add to <ul>
let li = document.createElement("li");
li.textContent = "New Task";

let ul = document.querySelector("ul");
if (ul) {
  ul.appendChild(li);
}

// 21. Create new image and add at top of div
let newImg = document.createElement("img");
newImg.src = "https://via.placeholder.com/150";

if (div) {
  div.prepend(newImg);
}

// 22. Select first item and delete
let firstItem = document.querySelector("ul li");
if (firstItem) {
  firstItem.remove();
}

// 23. Change background color
let boxx = document.querySelector(".box");
if (boxx) {
  box.style.backgroundColor = "yellow";
}

// 24. classList.add() vs classList.toggle()
// add() → Always adds class
// toggle() → Adds if not present, removes if present

if (box) {
  box.classList.add("active");
  box.classList.toggle("active");
}

// 25. Add highlight class to every even item
let evenItems = document.querySelectorAll("ul li:nth-child(2n)");
evenItems.forEach((elem) => {
  elem.classList.add("highlight");
});

// 26. Set font size of all <p> to 18px
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p) => {
  p.style.fontSize = "18px";
});
