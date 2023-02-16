// Get the pre element from the DOM with the ID 'matrix-text'
const matrixText = document.getElementById('matrix-text');

// Define the characters that will be used in the matrix effect
const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-+={}[]\\|<,>.?/ ";

// Calculate the number of characters that will fit on each row of the screen
const matrixLength = Math.floor(window.innerWidth / 10);

// Create an array to store the index of the character to be displayed for each column
const matrixArr = [];

// Fill the matrix array with random character indices
for (let i = 0; i < matrixLength; i++) {
  matrixArr[i] = Math.floor(Math.random() * matrixChars.length);
}

// Define a function to update the matrix effect
function updateMatrix() {

  // Clear the contents of the pre element
  matrixText.innerHTML = '';

  // Loop through each column of the matrix
  for (let i = 0; i < matrixLength; i++) {

    // Randomly replace the character index in this column with a new one
    if (i === 0 || Math.random() < 0.1) {
      matrixArr[i] = Math.floor(Math.random() * matrixChars.length);
    }

    // Add a span element with class 'green' around the character in this column
    // with a small probability, to give it a green color
    else if (i > 0 && Math.random() < 0.05) {
      matrixText.innerHTML += '<span class="green">' + matrixChars[matrixArr[i]] + '</span>';
    }

    // Add a span element with class 'red' around the character in this column
    // with a small probability, to give it a red color
    else if (i > 0 && Math.random() < 0.05) {
      matrixText.innerHTML += '<span class="red">' + matrixChars[matrixArr[i]] + '</span>';
    }

    // Add a span element with class 'yellow' around the character in this column
    // with a small probability, to give it a yellow color
    else if (i > 0 && Math.random() < 0.05) {
      matrixText.innerHTML += '<span class="yellow">' + matrixChars[matrixArr[i]] + '</span>';
    }

    // Just add the character in this column without any special effects
    else {
      matrixText.innerHTML += matrixChars[matrixArr[i]];
    }
  }

  // Add a newline character at the end of the row
  matrixText.innerHTML += '\n';

  // Scroll the pre element to the bottom to make sure the most recent row is visible
  matrixText.scrollTop = matrixText.scrollHeight;

  // Call this function again after a short delay to update the matrix effect
  setTimeout(updateMatrix, 50);
}

// Call the updateMatrix function to start the matrix effect
updateMatrix();
