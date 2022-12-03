// Question 1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const itemsObject2 = itemsObject.map((ele) => {
  return {
    quantity: ele.quantity * 2,
    price: ele.price * 2,
  };
});

console.log(itemsObject2);

const itemsObject3 = itemsObject.filter((ele) => {
  return ele.quantity > 2 && ele.price > 300;
});

console.log(itemsObject3);

const totalValue = itemsObject.reduce((acc, ele) => {
  return acc + ele.quantity * ele.price;
}, 0);

console.log(totalValue);

// Question 2
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

const expectedString = string.trim().split(/[ -]+/).join(" ").toLowerCase();

console.log(expectedReturnString == expectedString);

// Question 3
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

const mergeTwoArrays = (first, second) => {
  const map = {};
  [...first, ...second].forEach(({ uuid, role, name }) => {
    if (!map[uuid]) {
      map[uuid] = {
        uuid,
        ...{ role: role ? role : null },
        ...{ name: name ? name : null },
      };
    } else {
      map[uuid] = {
        ...map[uuid],
        ...(role && { role: role ? role : null }),
        ...(name && { name: name ? name : null }),
      };
    }
  });
  return Object.values(map).sort((left, right) => left - right);
};

const returnArray = mergeTwoArrays(first, second);
console.log(returnArray);
