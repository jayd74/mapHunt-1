const mapHunt = {}

const tokyoTower = { lat: 35.658938, lng: 139.745422 };

//embedding googlemaps
function initMap() {
    //   const cntower = { lat: 43.64276, lng: -79.387068 };
    const cntower = { lat: 43.64276, lng: -79.387068 };
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: cntower
    });
  const marker = new google.maps.Marker({
    position: cntower,
    map: map
  });
//   const tokyoTower = { lat: 35.658938, lng: 139.745422 };
  
}
mapHunt.findMSG = function() {
  $("#msg").on("click", function() {
    const msg = { lat: 40.750748, lng: -73.993449 }; 
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: msg
    });
    const marker = new google.maps.Marker({
      position: msg,
      map: map,
      center: msg
    });
  });
};

mapHunt.findTokyoTower = function(){
    $('#tokyoTower').on('click', function() {
        const pokeStop = { lat: 35.658938, lng: 139.745422 };
        const map = new google.maps.Map(
          document.getElementById("map"),
          {
            zoom: 15,
            center: pokeStop
          }
        );
        const marker = new google.maps.Marker({
          position: pokeStop,
          map: map,
          center: pokeStop
        });
        }); 
}


// First ajax request will be pulling down information from google places through a text search that the user inputs.
// Returns long and lat when given name of a place
mapHunt.getCoordsFromTextSearch = function () {
  return $.ajax({
    url: "https://proxy.hackeryou.com",
    method: "GET",
    dataType: "json",
    data: {
      reqUrl: "https://maps.googleapis.com/maps/api/place/textsearch/json",
      params: {
        key: 'AIzaSyDuEh_E30IgltvnEqaR1kHSr1SXwPSlL0',
        query: 'cn tower'
      }
    }
  });
};
mapHunt.init = function(){
    initMap();
}

$(function() {
    mapHunt.getCoordsFromTextSearch();
    mapHunt.findTokyoTower();
    mapHunt.findMSG();
    initMap();
});