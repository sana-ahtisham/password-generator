// const passwordInput = document.querySelector('.passcode');
// const copyBtn = document.getElementById('copy');
// const lengthInput = document.getElementById('length');
// const rangeInput = document.getElementById('range');
// const rangeValue = document.getElementById('rangeValue');
// const symbolsInput = document.getElementById('symbols');
// const uppercaseInput = document.getElementById('uppercase');
// const lowercaseInput = document.getElementById('lowercase');
// const numbersInput = document.getElementById('numbers');
// const generateBtn = document.getElementById('generatebtn');

// rangeValue.textContent = rangeInput.value; rangeValue.textContent = rangeInput.value  = lengthInput.value;
// // Sync range and length values when range is changed
// rangeInput.addEventListener("input", function () {
//     lengthInput.value = rangeInput.value;
//     rangeValue.textContent = rangeInput.value;
//   });

// // Sync range and length values when length is manually changed
// lengthInput.addEventListener("input", function () {
//     rangeInput.value = lengthInput.value;
//     rangeValue.textContent = lengthInput.value;
//   });
  
// const uppercaseStr="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowercaseStr="abcdefghijklmnopqrstuvwxyz";
// const numbersStr="0123456789";
// const symbolsStr='!@#$%^&*(),.?":{}|<>'

//   generateBtn.addEventListener('click', function() {
//     let str = "";
//     let passwordInput= "";  // Reset password on each generation

//     if (uppercaseInput.checked) {
//         str += uppercaseStr;
//     }
//     if (lowercaseInput.checked) {
//         str += lowercaseStr;
//     }
//     if (numbersInput.checked) {
//         str += numbersStr;
//     }
//     if (symbolsInput.checked) {
//         str += symbolsStr;
//     }

//     // Generate the password with the correct length
//     for (let i = 0; i < lengthInput.value; i++) {
//         let index = Math.floor(Math.random() * str.length);
//         password += str[index];

//     }

//     passwordInput.value = password;
//     console.log(password);
//     password="";
//     return
//       // Display the generated password
// });
// copyBtn.addEventListener('click', () => {
//     if (passwordInput.value === "") {
//         alert('Please generate a password first');
//     } else {
//         const textareaCopy = document.createElement('textarea');
//         textareaCopy.value = passwordInput.value;
//         document.body.appendChild(textareaCopy); 
//         textareaCopy.select();
//         document.execCommand('copy');        
//         document.body.removeChild(textareaCopy); 
//         alert('Password copied to clipboard');
//         passwordInput.value="";

//     }
// });
// function togglePassword() {
//     var passwordField = document.getElementById("passwordField");
//     var button = document.querySelector("button");
  
//     if (passwordField.type === "password") {
//       passwordField.type = "text";
//       img.src = "eye.png ";
//     } else {
//       passwordField.type = "password";
//       button.src = "hidden.png"; 
//     }
//   }
// //ab ye use hota ha modern js mei execCommand ki jagha
// // copyBtn.addEventListener('click', () => {
// //     if (passwordInput.value === "") {
// //         alert('Please generate a password first');
// //     } else {
// //         // Use the Clipboard API to copy the password to the clipboard
// //         navigator.clipboard.writeText(passwordInput.value)
// //             .then(() => {
// //                 alert('Password copied to clipboard');
// //             })
// //             .catch(err => {
// //                 console.error('Failed to copy password: ', err);
// //             });
// //     }
// // });







const passwordInput = document.querySelector('.passcode');
const copyBtn = document.getElementById('copy');
const lengthInput = document.getElementById('length');
const rangeInput = document.getElementById('range');
const rangeValue = document.getElementById('rangeValue');
const symbolsInput = document.getElementById('symbols');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const numbersInput = document.getElementById('numbers');
const generateBtn = document.getElementById('generatebtn');

rangeValue.textContent = rangeInput.value; rangeValue.textContent = rangeInput.value  = lengthInput.value;
// Sync range and length values when range is changed
rangeInput.addEventListener("input", function () {
    lengthInput.value = rangeInput.value;
    rangeValue.textContent = rangeInput.value;
  });

// Sync range and length values when length is manually changed
lengthInput.addEventListener("input", function () {
    rangeInput.value = lengthInput.value;
    rangeValue.textContent = lengthInput.value;
  });
  
const uppercaseStr="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseStr="abcdefghijklmnopqrstuvwxyz";
const numbersStr="0123456789";
const symbolsStr='!@#$%^&*(),.?":{}|<>'
generateBtn.addEventListener('click', function() {
  let str = "";
  let password = "";  // Reset password on each generation

  if (uppercaseInput.checked) {
      str += uppercaseStr;
  }
  if (lowercaseInput.checked) {
      str += lowercaseStr;
  }
  if (numbersInput.checked) {
      str += numbersStr;
  }
  if (symbolsInput.checked) {
      str += symbolsStr;
  }

  // Generate the password with the correct length
  for (let i = 0; i < lengthInput.value; i++) {
      let index = Math.floor(Math.random() * str.length);
      password += str[index];
  }

  passwordInput.value = password;  // Display the generated password
});copyBtn.addEventListener('click', () => {
    if (passwordInput.value === "") {
        alert('Please generate a password first');
    } else {
        const textareaCopy = document.createElement('textarea');
        textareaCopy.value = passwordInput.value;
        document.body.appendChild(textareaCopy); 
        textareaCopy.select();
        document.execCommand('copy');        
        document.body.removeChild(textareaCopy); 
        alert('Password copied to clipboard');
        passwordInput.value="";

    }
});
function togglePassword() {
    var passwordField = document.getElementById("passwordField");
    var button = document.querySelector("button");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      img.src = "eye.png ";
    } else {
      passwordField.type = "password";
      button.src = "hidden.png"; 
    }
  }
//ab ye use hota ha modern js mei execCommand ki jagha
// copyBtn.addEventListener('click', () => {
//     if (passwordInput.value === "") {
//         alert('Please generate a password first');
//     } else {
//         // Use the Clipboard API to copy the password to the clipboard
//         navigator.clipboard.writeText(passwordInput.value)
//             .then(() => {
//                 alert('Password copied to clipboard');
//             })
//             .catch(err => {
//                 console.error('Failed to copy password: ', err);
//             });
//     }
// });
