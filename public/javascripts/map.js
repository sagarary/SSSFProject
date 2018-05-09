navigator.geolocation.getCurrentPosition((position) => {
    let coords = {};
    const coordsData = document.createElement('input');
        coordsData.setAttribute('type', 'hidden');
        coordsData.setAttribute('name', 'coords');

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
        coordsData.setAttribute('value', coords);
        const inputForm = document.querySelector('#locationAddForm');
        inputForm.appendChild(coordsData);
        
        inputForm.addEventListener('submit', (e)=> {
            e.preventDefault();
            const data = new FormData(e.target);
            const fileElement = e.target.querySelector('input[type=file]');
            const file = fileElement.files[0];
            data.append('file', file);
            console.log(data);
            
            const url = '/locations';
            fetch(url, {
                method:'post',
                body : data
            }).then(()=> {
                hideModel('#locationAddModal', "Added new Location", data.get('name')+ "Added to locations");
            })
        })
        
    }
    
});
   
