const addToDoButton = document.getElementById("addToDo");
const inputField = document.getElementById("inputField");
const toDoContainer = document.getElementById("toDoContainer");

addToDoButton.addEventListener("click", function () {
  const toDoText = inputField.value.trim();
  if (toDoText) {
    const listItem = document.createElement("li");
    listItem.textContent = toDoText;
    listItem.style.color = "#fff";
    toDoContainer.appendChild(listItem);
    inputField.value = "";

    listItem.addEventListener("dblclick", function () {
      toDoContainer.removeChild(listItem);
    });
  }
});
