const mapHunt = {}

const tokyoTower = { lat: 35.658938, lng: 139.745422 };

//embedding googlemaps
function initMap() {
    const prime = { lat: 0, lng: 0 };
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2.5,
    center: prime
    });
  const marker = new google.maps.Marker({
    position: prime,
    map: map
  });
//   const tokyoTower = { lat: 35.658938, lng: 139.745422 };
  
}
mapHunt.findKingsLanding = function() {
  $("#kings-landing").on("click", function() {
    const kingsLanding = { lat: 42.641951, lng: 18.107203 }; 
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: kingsLanding
    });
    const marker = new google.maps.Marker({
      position: kingsLanding,
      map: map,
      center: kingsLanding,
    });
    $('.location-info').html(`
      <h1>TESTING SHIT</h1>
      <p>EAT SHITS FERD</p>
      <a>Maybe a Link to some stuff!</a>
      <img alt='MAYBE SOME REAL NICES PHOTOS'></img>
    `)
  });
};

mapHunt.findWinterfell = function(){
    $('#winterfell').on('click', function() {
        const winterfell = { lat: 56.185381, lng: -4.049884 };
        const map = new google.maps.Map(
          document.getElementById("map"),
          {
            zoom: 15,
            center: winterfell
          }
        );
        const marker = new google.maps.Marker({
          position: winterfell,
          map: map,
          center: winterfell
        });
    $(".location-info").html(`
      <h1>TESTING SHIT</h1>
      <p>EAT SHITS FERD</p>
      <a>Maybe a Link to some stuff!</a>
      <img alt='MAYBE SOME REAL NICES PHOTOS'></img>
    `);                
    }); 
};

mapHunt.findDragonstone = function() {
  $("#dragonstone").on("click", function() {
    const dragonstone = { lat: 55.167717, lng: -6.809537 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: dragonstone
    });
    const marker = new google.maps.Marker({
      position: dragonstone,
      map: map,
      center: dragonstone
    });
    $(".location-info").html(`
      <h1>TESTING SHIT</h1>
      <p>EAT SHITS FERD</p>
      <a>Maybe a Link to some stuff!</a>
      <img alt='MAYBE SOME REAL NICES PHOTOS'></img>
    `);    
  });
};

mapHunt.findSunspear = function() {
  $("#sunspear").on("click", function() {
    const sunspear = { lat: 37.383325, lng: -5.990172 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: sunspear
    });
    const marker = new google.maps.Marker({
      position: sunspear,
      map: map,
      center: sunspear
    });
    $(".location-info").html(`
      <h1>TESTING SHIT</h1>
      <p>EAT SHITS FERD</p>
      <a>Maybe a Link to some stuff!</a>
      <img alt='MAYBE SOME REAL NICES PHOTOS'></img>
    `);    
  });
};

mapHunt.findCastleBlack = function() {
  $("#castle-black").on("click", function() {
    const castleBlack = { lat: 54.815014, lng: -5.774517 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: castleBlack
    });
    const marker = new google.maps.Marker({
      position: castleBlack,
      map: map,
      center: castleBlack
    });
    $(".location-info").html(`
      <h1>TESTING SHIT</h1>
      <p>EAT SHITS FERD</p>
      <a>Maybe a Link to some stuff!</a>
      <img alt='MAYBE SOME REAL NICES PHOTOS'></img>
    `);    
  });
};

mapHunt.findIronIslands = function() {
  $("#iron-islands").on("click", function() {
    const ironIslands = { lat: 55.244497, lng: -6.368786 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: ironIslands
    });
    const marker = new google.maps.Marker({
      position: ironIslands,
      map: map,
      center: ironIslands
    });
    $(".location-info").html(`
      <h1>TESTING SHIT</h1>
      <p>EAT SHITS FERD</p>
      <a>Maybe a Link to some stuff!</a>
      <img alt='MAYBE SOME REAL NICES PHOTOS'></img>
    `);    
  });
};

mapHunt.showMap = function() {
  $('button').on('click', function() {
    $('.location-container').show();
    // $('.location-container').scrollTop(0);

     $("html, body").animate({
       scrollTop: $(".displayed-location-info").offset().top
     },500);
  })
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
    mapHunt.showMap();
    mapHunt.findKingsLanding();
    mapHunt.findWinterfell();
    mapHunt.findDragonstone();
    mapHunt.findSunspear();
    mapHunt.findCastleBlack();
    mapHunt.findIronIslands();
    initMap();
});