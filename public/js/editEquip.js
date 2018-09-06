
// // Get references to page elements
const cancelButton = document.querySelector(".cancel");
const submitButton = document.querySelector(".submit");

// The API object contains methods for each kind of request we will make.
const API = {
  postAPI: function(id, data) {
    return fetch( `/edit/equip/${id}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
};

// Logic to handle the click event on submit button
const handleSubmit = (event => {
  event.preventDefault();
  // Create object for updated client information
  const equipID = document.querySelector("#id").value.trim();
  const updatedEquip = {
    name: document.querySelector("#name").value.trim(),
  };
  // Call the postAPI method to send updated client to DB
  API.postAPI(equipID, updatedEquip)
  .then(res => window.location.href = "/admin");
});

// Logic to handle the click event on cancel button
const handleCancel = (event => {
  event.preventDefault();
  window.location.href = "/admin";
});

// Event Handler
submitButton.addEventListener("click", handleSubmit);
cancelButton.addEventListener("click", handleCancel);