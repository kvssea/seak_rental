const map = L.map('map').setView([47.6062, -122.3321], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'&copy; Stamen Design & OpenStreetMap contributors'})
    .addTo(map);

const listing = L
    .marker([47.6062, -122.3321])
    .addTo(map)
    .bindPopup("$1750")