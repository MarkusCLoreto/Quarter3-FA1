const e = confirm("Do you agree to share your personal information with this site?");

if (e) {
  console.log(`Name: ${nickname}`);
  console.log(`Height: ${feet}'${inches}"`);
  console.log(`Weight: ${weightInLbs} lbs`);
} else {
  console.log("User does not wish to share his/her information.");
}