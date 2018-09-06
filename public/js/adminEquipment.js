
// Get references to page elements
const deleteNodeList = document.querySelectorAll(".delete-equip");
const editNodeList = document.querySelectorAll(".edit-equip");

// The API object contains methods for each kind of request we will make.
  const API = {
    postAPI: function(id) {
      return fetch( `/delete/equip/${id}`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
      });
    }
};

// Create an array from the delete nodelists
Array.from(deleteNodeList).forEach(button => {
  button.addEventListener("click", () => {
    // Console Log the ID in the database
    const deleteID = {
      id: button.parentElement.parentElement.dataset.id
    };
    API.postAPI(deleteID).then(res => {
      window.location.href = "/admin";
    });
  });
});
// Create an array from the edit nodelists
Array.from(editNodeList).forEach(button => {
  button.addEventListener("click", () => {
    // Console Log the ID in the database
    const editID = button.parentElement.parentElement.dataset.id;
    window.location.href = `/edit/equip/${editID}`;
  });
});
