'use strict';

//
// ──────────── SELECTORS ────────────────────────────────────────────────────────
//
const body = document.body;
const toggleTheme = document.querySelector('.toggle-theme__button');
const btnEls = document.querySelectorAll('button');
const btnNumber = document.querySelectorAll('.buttons__number');
const btnOperator = document.querySelectorAll(
  '.buttons__operator[data-operator]'
);
const btnEqual = document.querySelector('.buttons__operator[data-equal]');
const btnDelete = document.querySelector('.buttons__delete');
const btnReset = document.querySelector('.buttons__reset');

//
// ──────────── THEME AND GENERAL BUTTON FUNCTIONALITY ────────────────────────────────────────────────────────
//
let toggle;

btnEls.forEach(btn =>
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    btn.classList.add('pressed');
    btn.addEventListener('transitionend', () =>
      btn.classList.remove('pressed')
    );
  })
);

toggleTheme.addEventListener('click', function (e) {
  [...this.children].forEach(child => child.classList.remove('active'));
  e.target.classList.add('active');
  toggle = e.target.dataset.toggle;
  console.log(toggle);
  body.className = '';
  body.classList.add(`theme-${toggle}`);
});

//
// ──────────── CALCULATOR FUNCTION ────────────────────────────────────────────────────────
//

class Calculator {
  constructor() {}
}
const calculator = new Calculator();
