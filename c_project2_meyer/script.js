// Get the current hour 
const Hour = new Date().getHours();

// Get the greeting element by its ID
const greet = document.getElementById('greeting');

// Use if/else statements to determine the greeting by time
if ( Hour >= 5 && Hour < 12) { // code for Morning
  greet.textContent = 'Good Morning!';
} else if ( Hour >= 12 && Hour < 18) { // for Afternoon
  greet.textContent = 'Good Afternoon!';
} else if ( Hour >= 18 && Hour < 22) { // for Evening
  greet.textContent = 'Good Evening!';
} else { greet.textContent = 'Good Night!'; } // for Night

