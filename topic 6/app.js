import { displayPrototypeChain } from './prototypeChain.js';

document.getElementById('showPrototypeChainBtn').addEventListener('click', function() {
  var className = document.getElementById('classNameInput').value.trim();
  displayPrototypeChain(className);
});