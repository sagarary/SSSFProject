navigator.geolocation.getCurrentPosition((position) => {
    let coords = {};


    // Get the coordinates of the current position.
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;


    const gmap = new google.maps.Map(document.querySelector('#map'), {
        zoom: 14,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        center: {
            lat: lat,
            lng: lng
        },
    });
    let marker = 0;
    gmap.addListener('click', e => {
        placeMarker(e.latLng, gmap);
    });
    const placeMarker = (latLng, map) => {
        marker ? marker.setPosition(latLng) :
            marker = new google.maps.Marker({
                position: latLng,
                map: map
            });
        coords = JSON.stringify({
            'lat': marker.getPosition().lat(),
            'lng': marker.getPosition().lng()
        });
        gmap.panTo(latLng);
        showModal('#locationAddModal');
    }
   
})