navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    const infoWindow= new google.maps.InfoWindow({});

    const icon = {
        url:'assets/marker.png',
        scaledSize: new google.maps.Size(50,50)
    }

    const markers = [];
    let allLocations =[];

    
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

    fetch('/locations').then((res) => {
        return res.json();
    }).then((locations) => {
        console.log(locations);
        allLocations = locations;
        for (const [index,location] of locations.entries()){
            //console.log(location._id)
            loadMarkers(location._id,location.coordinates, gmap,location.name, location.description,location.cover);
            
        }
    })
    

    const loadMarkers= (location,coords,map,name,details,cover) =>{
     marker = new google.maps.Marker({
         position:coords,
         map : map,
         title:name,
         icon:icon
     })
     
     markers.push(marker);
     const contentString=`
       <div class="content">
         <div class="modal-header">
           <h5 class="modal-title">${name}</h5>
         </div>
         <div class="modal-body">
         <div id="imgDisplay" width=100px>
            <img src="${cover}" class="img-fluid" >
        </div>
            <p>${details}</p>
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-info" id="viewReview" onClick="viewReview()">View Reviews</button>
           <button type="button" class="btn btn-info" id="viewEvents" onClick="viewEvents()">See Events</button>
           <button type="button" class="btn btn-primary" id="addReview" onClick="showModal('#reviewAddModal')">Add Review</button>
           <button type="button" class="btn btn-primary" id="addEvent" onClick="showModal('#eventAddModal')">Add Event</button>
       </div>
     `;
     marker.addListener('click',()=>{
         infoWindow.close();
         infoWindow.setContent(contentString);
         infoWindow.setPosition(marker.getPosition());
         infoWindow.open(map,marker);
         const reviewAddForm=document.querySelector('#reviewAddForm');
        reviewAddForm.addEventListener('submit',(e)=> {
            e.preventDefault();
            const data = new FormData(e.target);
            data.append('location',location);
            const url = '/reviews';
            fetch(url,{
                method:'post',
                body:data,
            }).then(()=>{
                infoWindow.close();
                hideModel('#reviewAddModal', 'Added new Review');
            })
            
        })
        const eventAddForm=document.querySelector('#eventAddForm');
        console.log(eventAddForm);
        eventAddForm.addEventListener('submit',(e)=> {
            console.log(eventAddForm)
            e.preventDefault();
            console.log('here');
            const data = new FormData(e.target);
            data.append('location',location);
            const url = '/events';
            fetch(url,{
                method:'post',
                body:data,
            }).then(()=>{
                infoWindow.close();
                hideModel('#eventAddModal', 'Added new Event');
            })
            
        })
     })
    

    
    }


    let coords = {};
    const coordsData = document.createElement('input');
        coordsData.setAttribute('type', 'hidden');
        coordsData.setAttribute('name', 'coords');



    // Get the coordinates of the current position.
    

    
    let marker = 0;
    gmap.addListener('click', e => {
        placeMarker(e.latLng, gmap);
    });
   
    const placeMarker = (latLng, map) => {
        marker ? marker.setPosition(latLng) :
            marker = new google.maps.Marker({
                position: latLng,
                map: map,
                icon: icon
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
   
