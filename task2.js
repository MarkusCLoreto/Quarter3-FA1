const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
const birthYear = prompt("Enter your birth year:");
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
document.body.innerHTML = '<p id="userInfo"></p>';
document.getElementById("userInfo").textContent = `Hello ${firstName} ${lastName}! How does it feel to be ${age} years old?`;
