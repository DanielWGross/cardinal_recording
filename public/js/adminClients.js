
// Get references to page elements
const deleteNodeList = document.querySelectorAll(".delete-client");
const editNodeList = document.querySelectorAll(".edit-client");
// Create an array from the delete nodelists
Array.from(deleteNodeList).forEach(button => {
  button.addEventListener("click", () => {
    // Console Log the ID in the database
    const deleteID = button.parentElement.parentElement.dataset.id;
    window.location.href = `/delete/${deleteID}`;
  });
});
// Create an array from the edit nodelists
Array.from(editNodeList).forEach(button => {
  button.addEventListener("click", () => {
    // Console Log the ID in the database
    console.log(button.parentElement.parentElement.dataset.id);    
  });
});
