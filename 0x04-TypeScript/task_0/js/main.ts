interface Student {
  firstname: string;
  lastname: string;
  age: number;
  location: string;
}

const student1: Student = { 
  firstname: "John",
  lastname: "Bosco",
  age: 10,
  location: "Lagos"
};

const student2: Student = {
  firstname: "Flo",
  lastname: "Rida",
  age: 11,
  location: "Agege"
};

const studentsList = [student1, student2];

function renderTable(data: Student[]) {
  //const container = document.getElementById("table-container");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const headerRow = document.createElement("tr");
  for (const key in data[0]) {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  data.forEach((item) => {
    const row = document.createElement("tr");
    for (const key in item) {
      const cell = document.createElement("td");
      cell.textContent = item[key];
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  return table;
}

const test1 = renderTable(studentsList);
console.log(test1);