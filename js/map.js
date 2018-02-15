var myMap;

ymaps.ready(init);

//Инициализация карты
function init() {
    myMap = new ymaps.Map('map', {
      center: [53.902496, 27.561481], // Минск
      zoom: 6,
      controls: []
      //controls: ['zoomControl','typeSelector']

    }, {
      minZoom: 4,
      searchControlProvider: 'yandex#search'
    });
}
