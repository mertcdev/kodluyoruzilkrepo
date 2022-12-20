// Get the elements we need
const inputText = document.getElementById('task');
const addButton = document.getElementById('liveToastBtn');
const todoList = document.getElementById('list');

// Get the to-do list from local storage
const items = JSON.parse(localStorage.getItem("items")) || [];

addButton.addEventListener('click', () => {
  // Check if the input field is empty
  if (inputText.value.trim() !== '') {
    $(".success").toast("show");

    // Create a new list item with the text from the input field
    const newItem = document.createElement('li');
    newItem.innerText = inputText.value;

    // Add the new item to the list
    todoList.appendChild(newItem);

    // Add the new item to the array
    items.push(newItem.innerText);

    // Save the updated list to local storage
    localStorage.setItem('items', JSON.stringify(items));

    // Create the delete button and add it to the div
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    deleteButton.classList.add("delete-button");
    newItem.appendChild(deleteButton);
    
    // Add a click event listener to the delete button
    deleteButton.addEventListener('click', () => {
    
    // Remove the parent div (and therefore the item and the button) from the list
    todoList.removeChild(newItem);

    // Find the index of the item in the array
    const index = items.indexOf(newItem.innerText);

    // Remove the item from the array
    items.splice(index, 1);

    // Save the updated list to local storage
    localStorage.setItem('items', JSON.stringify(items));
  });

    // Save the updated list to local storage
    localStorage.setItem('items', JSON.stringify(items));

    // Clear the input field
    inputText.value = '';
      
  } else {
    $(".error").toast("show");
  }
});

// Check for saved wishlist items
let saved = JSON.parse(localStorage.getItem('items'));

// If there are any saved items, update our list
if (saved) {
  saved.forEach((item) => {
    // Create a new list item with the text from the saved item
    const newItem = document.createElement('li');
    newItem.innerText = item;
    todoList.appendChild(newItem);

    // Create the delete button and add it to the div
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    deleteButton.classList.add("delete-button");
    newItem.appendChild(deleteButton);
    
    // Add a click event listener to the delete button
    deleteButton.addEventListener('click', () => {
    
    // Remove the parent div (and therefore the item and the button) from the list
    todoList.removeChild(newItem);

    // Find the index of the item in the array
    const index = items.indexOf(newItem.innerText);

    // Remove the item from the array
    items.splice(index, 1);

    // Save the updated list to local storage
    localStorage.setItem('items', JSON.stringify(items));
    });
  });
}