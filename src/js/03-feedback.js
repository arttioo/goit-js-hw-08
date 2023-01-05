import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
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
  console.log(formWritten);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formWritten));
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
  const emailValue = email.value;
  const messageValue = message.value;
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  if (emailValue.length == 0 || messageValue.length == 0) {
    alert('all fields must be filled');
  }
}

function setFormData() {
  const dataFromLocalStorage = localStorage.getItem(STORAGE_KEY);
  const savedMessage = JSON.parse(dataFromLocalStorage);

  if (savedMessage) {
    email.value = savedMessage.email;
    message.value = savedMessage.message;
  }
}
