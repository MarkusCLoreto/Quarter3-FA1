const nickname = "Marky"; 
const heightInInches = 64;
const weightInKg = 56;
const feet = Math.floor(heightInInches / 12);
const inches = heightInInches % 12;
const weightInLbs = (weightInKg * 2.20462).toFixed(3);
alert(
  `Name: ${nickname}\nHeight: ${feet}'${inches}"\nWeight: ${weightInLbs} lbs`
);
