const addBookMark = () => {
  let inputElement = document.getElementById("bookmark");
  let url = inputElement.value.trim();
  // Check if the input is empty
  if (url === "") {
    alert("Please enter your bookmark URL!");
    return;
  }
  // Validate the URL
  try {
    new URL(url);
  } catch (error) {
    alert("Invalid URL. Please enter a valid URL.");
    return;
  }
  // Create li element
  let li = document.createElement("li");
  // Create text node for the URL
  let textNode = document.createTextNode(url);
  li.appendChild(textNode);
  
  // Create Remove button element
  let button1 = document.createElement("button");
  button1.innerText = "Remove";
  // Add click event to remove the li element
  button1.onclick = () => {
    li.remove();
  };
  // Append button to li
  li.appendChild(button1);

  // Create Edit button element 
  let Edit_button = document.createElement("button");
  Edit_button.innerText = "Edit";  
  // append edit button to li 
   li.appendChild(Edit_button);

  //Add edit button click event 
  Edit_button.onclick = () => {
  let editBtn = prompt("Edit URL :",li.firstChild.nodeValue);
  if(editBtn && editBtn.trim() != "") {
      new URL(editBtn.trim());
      li.firstChild.nodeValue = editBtn.trim();
    }
  }
  
  // Append li to the div
  let div = document.getElementById("bookMark");
  div.appendChild(li);
  // Clear the input field
  inputElement.value = "";
};
document.getElementById("bookmark").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addBookMark();
  }
});
const deletebookMark = () => {
  let div = document.getElementById("bookMark");
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};




