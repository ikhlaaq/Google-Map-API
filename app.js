//Google Map API

function initMap() {
    var uluru = { lat: 56.0381844, lng: 12.6963136 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
google.maps.event.addDomListener(window, 'load', initialize);