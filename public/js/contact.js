// Get references to page elements
const submitButton = document.querySelector('.main-btn');
// The API object contains methods for each kind of request we will make.
const API = {
  postAPI: function(data) {
    return fetch("/contact", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
};
// Logic to handle the click event on the submit button
const handleSubmit = (event => {
  event.preventDefault();

  const newContact = {
    name: document.querySelector('#name').value.trim(),
    email: document.querySelector('#email').value.trim(),
    subject: document.querySelector('#subject').value.trim(),
    message: document.querySelector('#message').value.trim(),
  };

  API.postAPI(newContact)
  .then(res => {
    document.querySelector('#name').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#subject').value = "";
    document.querySelector('#message').value = "";
  });
});
// Event handlers
submitButton.addEventListener("click", handleSubmit);