var myMap;

// Дождёмся загрузки API и готовности DOM.
yMaps.ready(init);

function init () {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map('map', {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center: [53.911817, 27.585836],
    zoom: 15
  }, {
    searchControlProvider: 'yandex#search'
  });

  myMap.geoObjects.add(new ymaps.Placemark([53.911817, 27.585836], {
    balloonContent: 'пер.Краснозвездный, 12, каб.301'
  }, {
    preset: 'islands#governmentCircleIcon',
    iconColor: '#3b5998'
  }))

}