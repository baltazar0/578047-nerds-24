function init(ymaps) {
  var myMap = new ymaps.Map("map", {
    center: [59.939116, 30.323588],
    zoom: 17,

    controls: []
  });


  var myPlacemark = new ymaps.Placemark([59.939116, 30.323588], {}, {
    iconLayout: "default#image",
    iconImageHref: "../img/map-marker.png",
    iconImageSize: [231, 190],
    iconImageOffset: [-40, -90]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.controls.add("zoomControl");

  myMap.behaviors.disable([
    "rightMouseButtonMagnifier",
    "ruler",
    "routeEditor",
    "scrollZoom"
  ]);
}
