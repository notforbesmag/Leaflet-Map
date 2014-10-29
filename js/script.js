var map = L.map('map').setView([44.0000, -100.0000], 5);

var Thunderforest_Transport = L.tileLayer('http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}).addTo(map);

var myIcon = L.icon({
    iconUrl: 'http://www.clipartbest.com/cliparts/9c4/e5k/9c4e5kqMi.png',
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [-3, -16]
});

var willoughby = L.marker([40.694491, -73.941721], {icon: myIcon}).addTo(map);
willoughby.bindPopup("Willoughby");

var flatbush = L.marker([40.640522, -73.950685], {icon: myIcon}).addTo(map);
flatbush.bindPopup("Flatbush");

var tibbetts = L.marker([45.500620, -122.646971], {icon: myIcon}).addTo(map);
flatbush.bindPopup("Tibbetts");

var ODB = L.marker([45.480800, -122.632205], {icon: myIcon}).addTo(map);
ODB.bindPopup("Olde Dorm Block Kanye Westport");

var chittick = L.marker([45.482260, -122.631148], {icon: myIcon}).addTo(map);
chittick.bindPopup("Chittick");

var macNaughton = L.marker([45.479924, -122.633138], {icon: myIcon}).addTo(map);
macNaughton.bindPopup("MacNaughton II");

var sally = L.marker([45.477554, -122.622356], {icon: myIcon}).addTo(map);
sally.bindPopup("Sally's House");

var OFCS = L.marker([45.493803, -122.630472], {icon: myIcon}).addTo(map);
OFCS.bindPopup("OFCS House");