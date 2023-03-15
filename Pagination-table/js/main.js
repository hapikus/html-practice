userExample = {
  id: 1,
  firstName: "Terry",
  lastName: "Medhurst",
  maidenName: "Smitham",
  age: 50,
  gender: "male",
  email: "atuny0@sohu.com",
  phone: "+63 791 675 8914",
  username: "atuny0",
  password: "9uQFF1Lh",
  birthDate: "2000-12-25",
  image: "https://robohash.org/hicveldicta.png",
  bloodGroup: "A−",
  height: 189,
  weight: 75.4,
  eyeColor: "Green",
  hair: { color: "Black", type: "Strands" },
  domain: "slashdot.org",
  ip: "117.29.86.254",
  address: {
    address: "1745 T Street Southeast",
    city: "Washington",
    coordinates: { lat: 38.867033, lng: -76.979235 },
    postalCode: "20020",
    state: "DC",
  },
  macAddress: "13:69:BA:56:A3:74",
  university: "Capitol University",
  bank: {
    cardExpire: "06/22",
    cardNumber: "50380955204220685",
    cardType: "maestro",
    currency: "Peso",
    iban: "NO17 0695 2754 967",
  },
  company: {
    address: {
      address: "629 Debbie Drive",
      city: "Nashville",
      coordinates: { lat: 36.208114, lng: -86.58621199999999 },
      postalCode: "37076",
      state: "TN",
    },
    department: "Marketing",
    name: "Blanda-O'Keefe",
    title: "Help Desk Operator",
  },
  ein: "20-9487066",
  ssn: "661-64-2976",
  userAgent:
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
};

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let pageNumbers = 10;
let userPerPageNumbers = 10;
let columns = [
  "id",
  "firstName",
  "lastName",
  "maidenName",
  "age",
  "gender",
  "email",
  "phone",
  "username",
  "birthDate",
  "height",
  "weight",
  "domain",
  "ip",
  "address.city",
  "address.postalCode",
];

let skip = 0;
let usersData = [];

let currentActivePage = 1;

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

  createTableList();

  document
    .querySelectorAll("div.pagination_item")
    .forEach((item) => document.addEventListener('click', changePage));
};

function changePage(e) {
  changeActiveButton(e.target.id);

  getUsers(userPerPageNumbers, (currentActivePage-1)*userPerPageNumbers);
}

function changeActiveButton(id) {
  let activeElement = document.getElementById(`pagination_link ${currentActivePage}`);
  activeElement.classList.remove('active');

  currentActivePage = +id.split(' ').at(-1);
  let newActiveElement = document.getElementById(`pagination_link ${currentActivePage}`);
  newActiveElement.classList.add('active');
}

function createTableList() {
  fillHeader();
  getUsers(userPerPageNumbers, skip);
}

function fillHeader() {
  for (let c = 0; c < columns.length; c++) {
    const cellCont = document.getElementById(`table-cell__cont 1-${c + 1}`);
    cellCont.classList.add("header");

    const cellText = document.getElementById(`table-cell__text 1-${c + 1}`);
    cellText.innerText = columns[c];
  }
}

// https://dummyjson.com/users

async function getUsers(limit, skip) {
  usersData = [];
  try {
    const response = await fetch(
      `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
    );
    const responseData = await response.json();
    for (let user of responseData.users) {
      usersData.push(user);
    }

    fillTable();

  } catch (error) {
    console.error(error);
  }
}

function getUser(r) {
  for (let c = 0; c < columns.length; c++) {
    const cellText = document.getElementById(
      `table-cell__text ${r + 1}-${c + 1}`
    );
    if (columns[c].includes(".")) {
      let prop = columns[c].split(".");
      cellText.innerText = usersData[r - 1][prop[0]][prop[1]];
    } else {
      cellText.innerText = usersData[r - 1][columns[c]];
    }
  }
}

function fillTable() {
  for (r = 1; r <= userPerPageNumbers; r++) {
    getUser(r);
  }
}
