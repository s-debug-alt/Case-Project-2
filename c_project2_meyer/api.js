
   
  
  
// get current position of user
navigator.geolocation.getCurrentPosition(getPos, handleError);
// function to get position
function getPos(pos) {
	// create a object to store location
    let myPosition = {
		//get latitude coordinates
        lat: pos.coords.latitude,
		// get Longitude coordinates
        lng: pos.coords.longitude,
		//get altitude coordinates
        alt: pos.coords.altitude

        
    };
	//log position to console
    console.log(myPosition);
	//log latitude to console
    console.log("latitude = " + pos.coords.latitude);
	// log Longitude to console
   console.log("Longitude = " + pos.coords.longitude);
   // log Altitude to console
   console.log("altitude = " + pos.coords.altitude);
   
   // display lat postion on page
   document.getElementById("lat").innerText = "latitude: " + myPosition.lat;
   // display lng position on page
   document.getElementById("lng").innerText = "longitude: " + myPosition.lng;
   //display alt position on page
   document.getElementById("alt").innerText = "Altitude: " + myPosition.alt;
//get Element to diplay map
 let displayMap = document.getElementById("displayMap");
 // declare a varible to hold map
   let myMap = new google.maps.Map(displayMap, {
      zoom: 11, // set zoom for map
      center: myPosition, // center map on users location
      fullscreenControl: false // disable fullscreenControl
    }); 
	
	   // Add a marker for users location
   new google.maps.Marker({
	   // set marker position to users location
      position: myPosition,
	  // set the map for marker
      map: myMap,
	  // set title of marker
      title: "you are here"
   });
}
// function to handle errors
function handleError(err) {
	// log error message to console
    console.log("geolocation error:" +err.message)
    
}
