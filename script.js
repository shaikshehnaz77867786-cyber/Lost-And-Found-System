function addLost() {
  let item = document.getElementById("lostItem").value;
  let li = document.createElement("li");
  li.textContent = "Lost: " + item;
  document.getElementById("list").appendChild(li);
}

function addFound() {
  let item = document.getElementById("foundItem").value;
  let li = document.createElement("li");
  li.textContent = "Found: " + item;
  document.getElementById("list").appendChild(li);
}
