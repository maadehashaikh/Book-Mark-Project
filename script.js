const addBookMark = () => {
  let bookMark_Data = document.getElementById("bookmark").value;
  let div = document.getElementById("bookMark");
  let li = document.createElement("li");
  li.innerText = bookMark_Data;
  div.appendChild(li);
  bookMark_Data.innerText = "";
}



