// Question 1

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

const generateTableHeader = (tableHeaderContent) => {
  const tableRow = document.createElement("tr");
  const tableHeaderArray = tableHeaderContent.map((tableHeaderItem) => {
    const tableHeader = document.createElement("th");
    tableHeader.textContent = tableHeaderItem;
    return tableHeader;
  });
  tableRow.append(...tableHeaderArray);
  return tableRow;
};

const generateTableData = (tableDataContent) => {
  const tableRowArray = tableDataContent.map((tableRowItem) => {
    const tableRow = document.createElement("tr");
    const tableDataArray = Object.values(tableRowItem).map((tableDataItem) => {
      const tableData = document.createElement("td");
      tableData.textContent = tableDataItem;
      return tableData;
    });
    tableRow.append(...tableDataArray);
    return tableRow;
  });
  return tableRowArray;
};

const generateTable = (tableInfo) => {
  const table = document.createElement("table");
  const tableHeader = generateTableHeader(tableInfo.tableHeader);
  const tableDataArray = generateTableData(tableInfo.tableContent);
  table.append(tableHeader, ...tableDataArray);
  document.body.appendChild(table);
};

const Question1 = document.createElement("h5");
Question1.textContent = "Question 1.";
document.body.appendChild(Question1);
generateTable(tableInfo);

// Question 2

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const generateOrderedList = (list) => {
  const orderedList = document.createElement("ol");
  const listArray = list.map((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    return listItem;
  });
  orderedList.append(...listArray);
  document.body.appendChild(orderedList);
};

const generateUnorderedList = (list) => {
  const unorderedList = document.createElement("ul");
  const listArray = list.map((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    return listItem;
  });
  unorderedList.append(...listArray);
  document.body.appendChild(unorderedList);
};

const Question2 = document.createElement("h5");
Question2.textContent = "Question 2.";
document.body.appendChild(Question2);
generateOrderedList(list);
generateUnorderedList(list);

// Question 3

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const generateDropDownList = (dropDownList) => {
  const select = document.createElement("select");
  const optionArray = dropDownList.map((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.content;
    return option;
  });
  select.append(...optionArray);
  document.body.appendChild(select);
};

const Question3 = document.createElement("h5");
Question3.textContent = "Question 3.";
document.body.appendChild(Question3);
generateDropDownList(dropDownList);
