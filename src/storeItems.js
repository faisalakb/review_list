import { todoList, display } from './status.js';

const inputValue = document.getElementById('inpId');
let list = [];
let id = 0;

// Load todo items from local storage on page load
const storedList = JSON.parse(localStorage.getItem('listItems12'));
if (storedList && storedList.length > 0) {
  todoList.push(...storedList);
  id = todoList[todoList.length - 1].index;
}

inputValue.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (inputValue.value === '') {
      console.log('Please enter a todo');
    } else {
      todoList.push({ index: id += 1, title: inputValue.value, completed: false });
      list = JSON.stringify(todoList);
      localStorage.setItem('listItems12', list);
    }
  }
});

inputValue.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    inputValue.value = '';
    display();
  }
});

// Attach event listener for checkbox change event

export { todoList, display };
