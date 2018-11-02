function initMap() {
  const etown = { lat: 10.8020047, lng: 106.6391917 };
  const hutech = { lat: 10.8020999, lng: 106.7124 };
  const lotteCongHoa = { lat: 10.806073, lng: 106.63872 };
  const map = new google.maps.Map(document.getElementById('map'), {
    center: etown,
    zoom: 14
  });
  const marker1 = new google.maps.Marker({ position: etown, map: map });
  const marker2 = new google.maps.Marker({ position: hutech, map: map });
  const marker3 = new google.maps.Marker({ position: lotteCongHoa, map: map });
}
