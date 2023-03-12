// "id", "email", "first_name", "last_name", "avatar"

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let pageNumbers = 7;
let userPerPageNumbers = 7;
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
  let cellTable = document.createElement("div");
  cellTable.className = "table-cell__cont";
  cellTable.id = `table-cell__cont ${Math.floor(num / columns.length) + 1}-${
    (num % columns.length) + 1
  }`;
  cellTable.appendChild(createText(num));
  return cellTable;
}

function createText(num) {
  let cellText = document.createElement("p");
  cellText.className = "table-cell__text";
  cellText.id = `table-cell__text ${Math.floor(num / columns.length) + 1}-${
    (num % columns.length) + 1
  }`;
  cellText.innerText = `${Math.floor(num / columns.length) + 1}-${
    (num % columns.length) + 1
  }`;
  return cellText;
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
  cell.className = `pagination_arrow__${name}-item`;
  
  let arrowLeft = document.createElement("a");
  arrowLeft.className = `pagination_arrow__${name}-link`;
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

function createList() {
  fillHeader();
  fillTable();
}

function fillHeader() {
  for (let c = 0; c < columns.length; c++) {
    const cellCont = document.getElementById(`table-cell__cont 1-${c + 1}`);
    cellCont.classList.add("header");

    const cellText = document.getElementById(`table-cell__text 1-${c + 1}`);
    cellText.innerText = columns[c];
  }
}

// {"data": {
//     "id": 1,
//     "email": "george.bluth@reqres.in",
//     "first_name": "George",
//     "last_name": "Bluth",
//     "avatar":"https://reqres.in/img/faces/1-image.jpg",
// }}

// https://dummyjson.com/users

async function getUser(r) {
  try {
    const response = await fetch(`https://reqres.in/api/users/${r}`);
    const responseData = await response.json();
    console.log(responseData);
    for (let c = 0; c < columns.length; c++) {
      const cellText = document.getElementById(
        `table-cell__text ${r + 1}-${c + 1}`
      );
      cellText.innerText = responseData["data"][columns[c]];
    }
  } catch (error) {
    console.error(error);
  }
}

function fillTable() {
  for (r = 1; r <= userPerPageNumbers; r++) {
    getUser(r);
  }
}
