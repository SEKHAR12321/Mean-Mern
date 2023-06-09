// Get the logout element
const logoutButton = document.getElementById("logout");

// Check if token exists in localStorage
const token = JSON.parse(localStorage.getItem("token"));
if (token) {
  logoutButton.innerText = "LogOut";
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.href = "./login.html";
  });
}

//Bookings table
const id=JSON.parse(localStorage.getItem("bookid"));
fetch(`http://localhost:8080/ticket-info/${id}`,{
    method:"GET"
}).then((res)=>res.json())
.then((data)=>appendData(data));

function appendData(data) {
    // Get the table element
    const table = document.querySelector("table");
  
    // Create a new table row
    const row = document.createElement("tr");
  
    // Create table data cells and set their content
    const boardingStationCell = document.createElement("td");
    boardingStationCell.innerText = data.boarding;
  
    const destinationStationCell = document.createElement("td");
    destinationStationCell.innerText = data.destination;
  
    const flightNameCell = document.createElement("td");
    flightNameCell.innerText = data.selectedFlight;

    const boardingTimeCell = document.createElement("td");
    // boardingTimeCell.innerText = getRandomBoardingTime();
    boardingTimeCell.innerText = "10:00 Am"

    const statusCell = document.createElement("td");
    statusCell.innerText = "Done";
  
  
    // Append the cells to the row
    row.appendChild(boardingStationCell);
    row.appendChild(destinationStationCell);
    row.appendChild(flightNameCell);
    row.appendChild(boardingTimeCell);
    row.appendChild(statusCell);
  
    // Append the row to the table
    table.appendChild(row);
  }

//   function getRandomBoardingTime() {
//     const boardingTimes = ["10:00am", "12:00am", "10:00pm"];
//     const randomIndex = Math.floor(Math.random() * boardingTimes.length);
//     return boardingTimes[randomIndex];
//   }
  
