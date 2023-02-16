const matrixText = document.getElementById('matrix-text');
const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-+={}[]\\|<,>.?/ ";
const matrixLength = 200;
const matrixInterval = 50;
const matrixArr = [];

for (let i = 0; i < matrixLength; i++) {
  matrixArr[i] = Math.floor(Math.random() * matrixChars.length);
}

function updateMatrix() {
  matrixText.innerHTML = '';
  for (let i = 0; i < matrixLength; i++) {
    if (i === 0 || Math.random() < 0.1) {
      matrixArr[i] = Math.floor(Math.random() * matrixChars.length);
    }
    if (i > 0 && Math.random() < 0.1) {
      matrixText.innerHTML += '<span class="green">' + matrixChars[matrixArr[i]] + '</span>';
    } else if (i > 0 && Math.random() < 0.1) {
      matrixText.innerHTML += '<span class="red">' + matrixChars[matrixArr[i]] + '</span>';
    } else if (i > 0 && Math.random() < 0.1) {
      matrixText.innerHTML += '<span class="yellow">' + matrixChars[matrixArr[i]] + '</span>';
    } else {
      matrixText.innerHTML += matrixChars[matrixArr[i]];
    }
  }
  matrixText.innerHTML += '\n';
  matrixText.scrollTop = matrixText.scrollHeight;
  setTimeout(updateMatrix, matrixInterval);
}

updateMatrix();
