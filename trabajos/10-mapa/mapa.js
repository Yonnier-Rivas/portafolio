// Crear una instancia del mapa
var mapa = L.map('mapa').setView([6.2276858,-75.6465603,9.61], 10);

// Añadir una capa de mosaicos
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(mapa);

// Crear un marcador y agregarlo al mapa
var marker = L.marker([6.2800038,-75.5833857]).addTo(mapa);

// Añadir un evento de clic al marcador
marker.on('click', function() {
  alert('Actualmente estudio en esta univarsidad: El Tecnologíco de Antioquia.');
});

// Crear otro marcador y agregarlo al mapa
var marker2 = L.marker([6.2299003,-75.5376593,20]).addTo(mapa);

// Añadir un evento de clic al segundo marcador
marker2.on('click', function() {
  alert('Vivo en Buenos Aires, cerca a la unidad Poblado De Veracruz.');
});
