let infoArray = [];

// Function to save user's name to local storage
function saveName() {
  const name = document.getElementById("name").value;
  localStorage.setItem("name", name);
}

// Function to save user's information to the infoArray
function saveInfo() {
  const info = document.getElementById("info").value;
  const date = new Date().toLocaleDateString();
  const infoObj = { info: info, date: date };
  infoArray.push(infoObj);
  displayInfo();
}

// Function to display the saved information in a table
function displayInfo() {
  const table = document.getElementById("infoTable");
  table.innerHTML = "";
  infoArray.forEach(function(infoObj) {
    const row = table.insertRow();
    const infoCell = row.insertCell(0);
    const dateCell = row.insertCell(1);
    infoCell.innerHTML = infoObj.info;
    dateCell.innerHTML = infoObj.date;
  });
}
