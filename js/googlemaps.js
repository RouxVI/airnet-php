function initMap() {
    var location = { lat: 46.3728626, lng: -72.6658291 };
    var map = new google.maps.Map(document.getElementById("map"), { zoom: 12, center: location });
    var marker = new google.maps.Marker({ position: location, map: map });
}