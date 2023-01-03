import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input');
const message = form.querySelector('textarea');

setFormData();

form.addEventListener('input', throttle(onFormChange, 500));
function onFormChange(evt) {
  const emailValue = email.value;
  const messageValue = message.value;

  const formWritten = {
    email: emailValue,
    message: messageValue,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formWritten));
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function setFormData() {
  const dataFromLocalStorage = localStorage.getItem('feedback-form-state');
  const savedMessage = JSON.parse(dataFromLocalStorage);
  if (savedMessage) {
    email.value = savedMessage.email;
    message.value = savedMessage.message;
  }
}
