import throttle from 'lodash.throttle';

const email = document.querySelector('input');
const message = document.querySelector('textarea');
email.addEventListener('input', onEmailInput);
message.addEventListener('input', onMessageInput);

function onEmailInput(evt) {
  const value = evt.currentTarget.value;
  console.log(value);
}
function onMessageInput(evt) {
  const value = evt.currentTarget.value;
  console.log(value);
}

// const form = document.querySelector('.feedback-form');
// const submit = document.querySelector('button');
// form.addEventListener('input', throttle(onFormChange, 500));
// textareaCheck();
// function onFormChange(evt) {
//   const email = form.querySelector('input').value;
//   const message = form.querySelector('textarea').value;

//   const formWritten = {
//     email: email,
//     message: message,
//   };
//   localStorage.setItem('feedback-form-state', JSON.stringify(formWritten));
//   console.log(localStorage.setItem);
// }
// submit.addEventListener('button', onFormSubmit);
// function onFormSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();

// }
// проверка на наличие текста в input
// function textareaCheck() {
//   const savedMessage = localStorage.getItem('feedback-form-state');
//   if (savedMessage) {
//     console.log(savedMessage);
//     form.value = JSON.stringify(savedMessage);
//   }
// }
