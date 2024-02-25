const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const container = document.querySelector('.container');


signUpBtn.addEventListener('click', function() {
  formBox.classList.add('active');
  container.classList.add('active');
});

signInBtn.addEventListener('click', function() {
  formBox.classList.remove('active');
  container.classList.remove('active');
});