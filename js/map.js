var map;
function initialize() {
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(30.2669,-97.7428),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('serpMap'),
      mapOptions);

  /*var image = 'img/pin 20 dot.png';*/


  var icon = new google.maps.MarkerImage(
      "../../img/pindot20.png", //url
      null,
      null,
      new google.maps.Point(0, 0), 
      new google.maps.Size(25, 33) //size
  );

  position1 = new google.maps.LatLng(30.2669,-97.7428);
  position2 = new google.maps.LatLng(30.290614,-97.719793);
  position3 = new google.maps.LatLng(30.293682,-97.745388);
  position4 = new google.maps.LatLng(30.235006,-97.718868);
  position5 = new google.maps.LatLng(30.270345,-97.731468);
  position6 = new google.maps.LatLng(30.261940,-97.726817);
  position7 = new google.maps.LatLng(30.314099,-97.741984);
  position8 = new google.maps.LatLng(30.251606,-97.766487);
  position9 = new google.maps.LatLng(30.275621,-97.765106);
    


  var marker = new google.maps.Marker({
      position: position1,
      map: map,
      title: 'Center of Map (Based on the search, will delete node when map is finished)',
      icon: icon
  });
  var marker = new google.maps.Marker({
      position: position2,
      map: map,
      title: '3309 HollyWood Ave, Austin, TX',
      icon: icon
  });
  var marker = new google.maps.Marker({
      position: position3,
      map: map,
      title: '2800 Salado, Austin, TX',
      icon: icon
  });
  var marker = new google.maps.Marker({
      position: position4,
      map: map,
      title: '1515 Wickersham Lane, Austin, TX 78741',
      icon: icon
  });
  var marker = new google.maps.Marker({
      position: position5,
      map: map,
      title: '900 E 11th St. Austin, TX 78702',
      icon: icon
  });
  var marker = new google.maps.Marker({
      position: position6,
      map: map,
      title: '1601 E 5th St Austin, TX 78702',
      icon: icon
  });
  var marker = new google.maps.Marker({
      position: position7,
      map: map,
      title: '4406 Medical Pkwy Austin, TX 78756',
      icon: icon
  });
  var marker = new google.maps.Marker({
      position: position8,
      map: map,
      title: '1700 S Lamar Blvd Austin, TX 78704',
      icon: icon
  });
  var marker = new google.maps.Marker({
      position: position8,
      map: map,
      title: '1717 W 6th St Austin, TX 78703',
      icon: icon
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
