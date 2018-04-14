"use strict";

var mapHunt = {};

var tokyoTower = { lat: 35.658938, lng: 139.745422 };

//embedding googlemaps
function initMap() {
  var prime = { lat: 0, lng: 0 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2.5,
    center: prime
  });
  var marker = new google.maps.Marker({
    position: prime,
    map: map
  });
  //   const tokyoTower = { lat: 35.658938, lng: 139.745422 };
}
mapHunt.findKingsLanding = function () {
  $("#kings-landing").on("click", function () {
    var kingsLanding = { lat: 42.641951, lng: 18.107203 };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: kingsLanding
    });
    var marker = new google.maps.Marker({
      position: kingsLanding,
      map: map,
      center: kingsLanding
    });
    $('.location-info').html("\n      <h1>TESTING SHIT</h1>\n      <p>EAT SHITS FERD</p>\n      <a>Maybe a Link to some stuff!</a>\n      <img alt='MAYBE SOME REAL NICES PHOTOS'></img>\n    ");
  });
};

mapHunt.findWinterfell = function () {
  $('#winterfell').on('click', function () {
    var winterfell = { lat: 56.185381, lng: -4.049884 };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: winterfell
    });
    var marker = new google.maps.Marker({
      position: winterfell,
      map: map,
      center: winterfell
    });
    $(".location-info").html("\n      <h1>TESTING SHIT</h1>\n      <p>EAT SHITS FERD</p>\n      <a>Maybe a Link to some stuff!</a>\n      <img alt='MAYBE SOME REAL NICES PHOTOS'></img>\n    ");
  });
};

mapHunt.findDragonstone = function () {
  $("#dragonstone").on("click", function () {
    var dragonstone = { lat: 55.167717, lng: -6.809537 };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: dragonstone
    });
    var marker = new google.maps.Marker({
      position: dragonstone,
      map: map,
      center: dragonstone
    });
    $(".location-info").html("\n      <h1>TESTING SHIT</h1>\n      <p>EAT SHITS FERD</p>\n      <a>Maybe a Link to some stuff!</a>\n      <img alt='MAYBE SOME REAL NICES PHOTOS'></img>\n    ");
  });
};

mapHunt.findSunspear = function () {
  $("#sunspear").on("click", function () {
    var sunspear = { lat: 37.383325, lng: -5.990172 };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: sunspear
    });
    var marker = new google.maps.Marker({
      position: sunspear,
      map: map,
      center: sunspear
    });
    $(".location-info").html("\n      <h1>TESTING SHIT</h1>\n      <p>EAT SHITS FERD</p>\n      <a>Maybe a Link to some stuff!</a>\n      <img alt='MAYBE SOME REAL NICES PHOTOS'></img>\n    ");
  });
};

mapHunt.findCastleBlack = function () {
  $("#castle-black").on("click", function () {
    var castleBlack = { lat: 54.815014, lng: -5.774517 };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: castleBlack
    });
    var marker = new google.maps.Marker({
      position: castleBlack,
      map: map,
      center: castleBlack
    });
    $(".location-info").html("\n      <h1>TESTING SHIT</h1>\n      <p>EAT SHITS FERD</p>\n      <a>Maybe a Link to some stuff!</a>\n      <img alt='MAYBE SOME REAL NICES PHOTOS'></img>\n    ");
  });
};

mapHunt.findIronIslands = function () {
  $("#iron-islands").on("click", function () {
    var ironIslands = { lat: 55.244497, lng: -6.368786 };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: ironIslands
    });
    var marker = new google.maps.Marker({
      position: ironIslands,
      map: map,
      center: ironIslands
    });
    $(".location-info").html("\n      <h1>TESTING SHIT</h1>\n      <p>EAT SHITS FERD</p>\n      <a>Maybe a Link to some stuff!</a>\n      <img alt='MAYBE SOME REAL NICES PHOTOS'></img>\n    ");
  });
};

mapHunt.showMap = function () {
  $('button').on('click', function () {
    $('.location-container').show();
    // $('.location-container').scrollTop(0);

    $("html, body").animate({
      scrollTop: $(".displayed-location-info").offset().top
    }, 500);
  });
};

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
mapHunt.init = function () {
  initMap();
};

$(function () {
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