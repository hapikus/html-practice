// "id", "email", "first_name", "last_name", "avatar"

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let pageNumbers = 7;
let userPerPageNumbers = 10;
let columns = ["id", "email", "first_name", "last_name"];

function createTable({ rows, cols }) {
  const mainCont = document.getElementById("main-cont__table");

  mainCont.style.setProperty("--grid-rows", rows);
  mainCont.style.setProperty("--grid-cols", cols);

  for (c = 0; c < rows * cols; c++) {
    mainCont.appendChild(createGrid(c));
  }
}

function createGrid(num) {
  let cell = document.createElement("div");

  cell.id = `${Math.floor(num / userPerPageNumbers) + 1} ${
    (num % columns.length) + 1
  }`;

  cell.innerText = `${Math.floor(num / columns.length) + 1} ${
    (num % columns.length) + 1
  }`;

  cell.className = "grid-item";

  return cell;
}

function createPagination() {
  const paginCont = document.getElementById("pagination_items");

  paginCont.appendChild(createArrow("«", "left"));

  for (let pageNum = 1; pageNum <= pageNumbers; pageNum++) {
    paginCont.appendChild(createNumber(pageNum));
  }

  paginCont.appendChild(createArrow("»", "right"));
}

function createArrow(symb, name) {
  let cell = document.createElement("div");
  let arrowLeft = document.createElement("a");

  cell.className = `pagination_arrow__${name}`;
  arrowLeft.className = `pagination_arrow__${name}`;
  arrowLeft.innerText = symb;

  cell.appendChild(arrowLeft);

  return cell;
}

function createNumber(pageNum) {
  let cell = document.createElement("div");
  cell.id = `pagination_item ${pageNum}`;
  cell.className = `pagination_item ${pageNum}`;

  let link = document.createElement("a");
  link.id = `pagination_link ${pageNum}`;
  link.className = "pagination_link";
  link.innerText = pageNum;

  if (pageNum === 1) link.classList.add("active");

  cell.appendChild(link);

  return cell;
}

window.onload = function () {
  createTable({
    rows: userPerPageNumbers + 1,
    cols: columns.length,
  });
  createPagination(pageNumbers);

  createList();
};

function createList() {}

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users/1", true);
xhr.onload = function () {
  console.log(xhr.responseText);
};

xhr.send();
