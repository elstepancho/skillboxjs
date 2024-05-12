export function displayPrototypeChain(className) {
  var prototypeChainElement = document.getElementById('prototypeChain');
  prototypeChainElement.innerHTML = ''; // Очищаем предыдущий вывод

  if (className === '') {
    prototypeChainElement.innerHTML = '<p class="error">Введите название класса или функции</p>';
    return;
  }

  if (!window[className]) {
    prototypeChainElement.innerHTML = '<p class="error">Класс или функция не найдены</p>';
    return;
  }

  var currentPrototype = window[className].prototype;
  var chainList = document.createElement('ol');

  while (currentPrototype) {
    var listItem = document.createElement('li');
    var constructorName = currentPrototype.constructor ? currentPrototype.constructor.name : '[Без названия]';
    listItem.textContent = constructorName;

    var propertiesList = document.createElement('ul');
    for (var property in currentPrototype) {
      var type = typeof currentPrototype[property];
      var propertyItem = document.createElement('li');
      propertyItem.textContent = `${property}: ${type}`;
      propertiesList.appendChild(propertyItem);
    }

    listItem.appendChild(propertiesList);
    chainList.appendChild(listItem);
    currentPrototype = Object.getPrototypeOf(currentPrototype);
  }

  prototypeChainElement.appendChild(chainList);
}
