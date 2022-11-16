//  Targetting Inputs and Button
let input = document.querySelector(".desc input");
let add = document.querySelector('input[value = "Add"]');
let del = document.querySelector('input[value = "Delete"]');
let edit = document.querySelector('input[value = "Edit"]');
let update = document.querySelector('input[value = "Update"]');
let date = document.querySelector('input[type = "date"]');
let work = document.querySelector("#work").value;

//   Adding Tasks Block Starts Here

function addItem() {
  let date1 = document.createElement("p");
  date1.innerHTML = date.value;
  console.log(date1);
  let inp1 = document.createElement("input");
  inp1.value = input.value;
  inp1.readOnly = "readonly";
  inp1.name = "read";
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.id = "id";
  if (inp1.value == "") {
    input.style.border = "2px solid red";

  } else {
    input.style.border = "2px solid black";
    document.getElementById("todo").appendChild(checkbox);
    document.getElementById("todo").appendChild(inp1);
    document.getElementById("todo").appendChild(date1);
   
  }
  let select = document.getElementById("selectOption");
  let i = select.selectedIndex;
  
  if (select.options[i].text == "work") {
    let p = document.createElement("p");
    document.getElementById("h1").appendChild(p);
    p.innerHTML = select.options[i].text;
  } else if (select.options[i].text == "personal") {
    let p1 = document.createElement("p");
    document.getElementById("h1").appendChild(p1);
    p1.innerHTML = select.options[i].text;
  }
 

}

//   Adding Tasks Block Ends Here

//   Deleting Tasks Block Starts Here

function deleteItem() {
  let check = document.getElementsByName("name");

  check.forEach((checklist, index) => {
    if (checklist.checked == true) {
      document.querySelector("#todo").children[index].nextSibling.remove();
      document.querySelector("#todo").children[index].remove();
      document.querySelector("#todo").children.item(index).remove();
      document.querySelector("#h1").children[index].remove();
    } else {
      console.log(false);
    }
  });
}

//   Deleting Tasks Block Ends Here

//   Editing Tasks Block Starts Here

function editItem() {
  let read = document.getElementsByName("read");
  read.forEach((r1, i) => {
    r1.removeAttribute("readonly");
  });
}

//   Editing Tasks Block Ends Here

//   Updating Tasks Block Starts Here

function updateItem() {
  let read1 = document.getElementsByName("read");
  console.log(read1);
  read1.forEach((r1, i) => {
    r1.setAttribute("readonly", true);
  });
}

//   Updating Tasks Block Ends Here

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
edit.addEventListener("click", editItem);
update.addEventListener("click", updateItem);

