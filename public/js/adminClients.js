
// Get references to page elements
const nodeList = document.querySelectorAll(".delete-client");
Array.from(nodeList).forEach(button => {
  button.addEventListener("click", (event) => {
    // Console Log the ID in the database
    console.log(button.parentElement.parentElement.dataset.id);
  })
});