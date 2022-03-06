'use strict';

const body = document.body;
const toggleTheme = document.querySelector('.toggle-theme__button');
let toggle;

toggleTheme.addEventListener('click', function (e) {
  [...this.children].forEach(child => child.classList.remove('active'));
  e.target.classList.add('active');
  toggle = e.target.dataset.toggle;
  console.log(toggle);
  body.className = '';
  body.classList.add(`theme-${toggle}`);
});

class Calculator {
  constructor() {}
}
const calculator = new Calculator();
