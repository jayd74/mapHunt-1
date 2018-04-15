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
    $(".location-info").html(`
      <h1>Kings Landing</h1>
      <h2>Dubrovnik City Walls</h2>
      <blockquote cite="http://awoiaf.westeros.org/index.php/King%27s_Landing">
       King's Landing is the capital of the Seven Kingdoms, located in the crownlands on the east coast of Westeros. It is situated along the kingsroad at the mouth of the Blackwater Rush and overlooks Blackwater Bay. King's Landing is the site of the Iron Throne and the Red Keep, which is the seat of the king, Robert I from House Baratheon of King's Landing.
      </blockquote>

      <blockquote cite="https://en.wikipedia.org/wiki/Walls_of_Dubrovnik">
       The Walls of Dubrovnik (Croatian: Dubrovačke gradske zidine) are a series of defensive stone walls surrounding the city of Dubrovnik in southern Croatia. With numerous additions and modifications throughout their history, they have been considered to be amongst the great fortification systems of the Middle Ages, as they were never breached by a hostile army during this time period.In 1979, the old city of Dubrovnik, which includes a substantial portion of the old walls of Dubrovnik, joined the UNESCO list of World Heritage Sites.
      </blockquote>
      <a href="https://www.tripadvisor.ca/Attraction_Review-g295371-d522915-Reviews-Ancient_City_Walls-Dubrovnik_Dubrovnik_Neretva_County_Dalmatia.html" target="_blank">Explore</a>
    `);
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
      <h1>Winterfell</h1>
      <h2>Doune Castle</h2>
     <blockquote cite="http://awoiaf.westeros.org/index.php/Winterfell">
        Winterfell is the ancestral castle and seat of power of House Stark and is considered to be the capital of the north. It is located in the center of the northernmost province of the Seven Kingdoms, on the kingsroad that runs from Storm's End to the Wall. It is situated at the eastern edge of the wolfswood, north of the western branch of the White Knife and Castle Cerwyn. Winterfell is south of the northern mountains and southwest of Long Lake, one hundred leagues (three hundred miles) southeast of Deepwood Motte.
      </blockquote>
      <blockquote cite="https://en.wikipedia.org/wiki/Doune_Castle">
        Doune Castle is a medieval stronghold near the village of Doune, in the Stirling district of central Scotland. The castle is sited on a wooded bend where the Ardoch Burn flows into the River Teith. It lies 8 miles (13 km) north-west of Stirling, where the Teith flows into the River Forth. Upstream, 8 miles (13 km) further north-west, the town of Callander lies at the edge of the Trossachs, on the fringe of the Scottish Highlands
      </blockquote>
      <a href="https://www.tripadvisor.ca/Attraction_Review-g1010312-d286657-Reviews-Doune_Castle-Doune_Stirling_Scotland.html" target="_blank">Explore</a>
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
      <h1>Dragonstone</h1>
      <h2>Gaztelugatxe</h2>
      <blockquote cite="http://awoiaf.westeros.org/index.php/Dragonstone">
        Dragonstone is a castle located on the island of the same name at the entrance to Blackwater Bay. Located below the Dragonmont and shaped from stone to look like dragons, Dragonstone was the original seat of House Targaryen in Westeros, and had been colonized and fortified as the westernmost outpost of the Valyrian Freehold. The castle has a dark reputation.
      </blockquote>
      <blockquote cite="https://en.wikipedia.org/wiki/Gaztelugatxe">
        Gaztelugatxe is an islet on the coast of Biscay belonging to the municipality of Bermeo, Basque Country (Spain). It is connected to the mainland by a man-made bridge. On top of the island stands a hermitage, dedicated to John the Baptist, that dates from the 10th century, although discoveries indicate that the date might be the 9th century. With another small neighboring island, Aketx, they form a protected biotope that extends from the town of Bakio until Cape Matxitxako, on the Bay of Biscay.
      </blockquote>

      <a href="https://www.tripadvisor.ca/Attraction_Review-g1064174-d2307740-Reviews-San_Juan_de_Gaztelugatxe-Bermeo_Province_of_Vizcaya_Basque_Country.html" target="_blank">Explore</a>
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
      <h1>Sunspear and the Water Garden</h1>
      <h2>Alcázar of Seville</h2>
      <blockquote cite="http://awoiaf.westeros.org/index.php/Sunspear">
        Sunspear, also known as the Old Palace, is the seat of House Nymeros Martell and the capital of Dorne. The castle is located on the Broken Arm, north of the Greenblood on the far southeastern coast of Westeros and is surrounded on three sides by the sea, and by the shadow city on the fourth side. The palace of the Water Gardens lies three leagues away on the coastal road.
      </blockquote>      
      <blockquote cite="https://en.wikipedia.org/wiki/Alc%C3%A1zar_of_Seville">
        The Alcázar of Seville (pronounced [alˈkaθar]; Spanish: Reales Alcázares de Sevilla or "Royal Alcazars of Seville") is a royal palace in Seville, Spain, built for the Christian king Peter of Castile.[1] It was built by Castilian Christians on the site of an Abbadid Muslim residential fortress destroyed after the Christian conquest of Seville.[4] Although some elements of other civilizations remains. The palace, a preeminent example of Mudéjar architecture in the Iberian Peninsula, is renowned as one of the most beautiful  
      </blockquote>
      <a href="https://www.tripadvisor.ca/Attraction_Review-g187443-d191139-Reviews-Real_Alcazar-Seville_Province_of_Seville_Andalucia.html" target="_blank">Explore</a>
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
      <h1>Castle Black</h1>
      <h2>Magheramorne</h2>
      <blockquote cite="http://awoiaf.westeros.org/index.php/Castle_Black">
        Castle Black is the main stronghold of the Night's Watch and the seat of their Lord Commander. The castle is situated along the Wall between Queensgate to the west and Oakenshield to the east, near the center of the Wall, at the northern end of the kingsroad. The village of Mole's Town is located half a league to the south along the kingsroad.
      </blockquote>      
      <blockquote cite="https://en.wikipedia.org/wiki/Magheramorne">
        Magheramorne (from Irish: Machaire Morna) is a hamlet in County Antrim, Northern Ireland. It is about 5 miles south of Larne on the shores of Larne Lough. It had a population of 75 people in the 2001 Census. Following the reform of Northern Ireland's local government system on 1 April 2015, Magheramorne lies within the Mid and East Antrim Borough Council area.
      </blockquote>
      <a href="https://www.tripadvisor.ca/Attractions-g7340575-Activities-Magheramorne_County_Antrim_Northern_Ireland.html" target="_blank">Explore</a>
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
      <h1>Iron Islands</h1>
      <h2>Ballintoy harbour</h2>
      <blockquote cite="http://awoiaf.westeros.org/index.php/Iron_Islands">
        The Iron Islands are home to a fierce seafaring people who call themselves the ironborn. While some say the archipelago is named after the abundant iron ore on the islands, the ironmen claim it is instead named after their own unyielding nature. It is often said that every captain is a king aboard his own ship, so the islands are also called "the land of ten thousand kings".
      </blockquote>      
      <blockquote cite="https://en.wikipedia.org/wiki/Ballintoy">
        Ballintoy (from Irish Baile an Tuaigh, meaning 'the northern townland') is a small village, townland (of 274 acres) and civil parish in County Antrim, Northern Ireland. It is alongside the B15 coast road, 28 km (17 mi) north-east of Coleraine, 8 km (5.0 mi) west of Ballycastle and between it and Bushmills. It is in the historic barony of Cary.The village lies about one kilometre from Ballintoy Harbour, a small fishing harbour at the end of a very small, narrow, steep road down Knocksaughey hill which passes by the entrance to Larrybane and Carrick-a-Rede Rope Bridge.
      </blockquote>
      <a href="https://www.tripadvisor.ca/Attraction_Review-g551728-d3530433-Reviews-Ballintoy_Harbour-Ballintoy_County_Antrim_Northern_Ireland.html" target="_blank">Explore</a>
    `);    
  });
};

mapHunt.showMap = function() {
  $('button').on('click', function() {
    $('.location-container').show();
     $("html, body").animate({
       scrollTop: $(".displayed-location-info").offset().top
     },500);
  })
}

mapHunt.selectLocation = function() {
  $("#toTop").on("click", function() {
    $("html, body").animate({ 
      scrollTop: $("#top").offset().top 
    }, 500);
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
    mapHunt.showMap();
    mapHunt.selectLocation();
    mapHunt.findKingsLanding();
    mapHunt.findWinterfell();
    mapHunt.findDragonstone();
    mapHunt.findSunspear();
    mapHunt.findCastleBlack();
    mapHunt.findIronIslands();
    initMap();
});