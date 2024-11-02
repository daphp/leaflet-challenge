// Initialize the map with a starting view
const map = L.map("map", {
  center: [37.09, -95.71], // Centered over the U.S.
  zoom: 4,
});

// Define base layers
const satellite = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map);

// Define an overlay for earthquakes
const earthquakes = new L.LayerGroup();

// Define a function to determine color based on depth
function getColor(depth) {
  return depth > 90 ? "#ff5f65" :
         depth > 70 ? "#fca35d" :
         depth > 50 ? "#fdb72a" :
         depth > 30 ? "#f7db11" :
         depth > 10 ? "#dcf400" :
                      "#a3f600";
}

// Function to determine the marker size based on magnitude
function getRadius(magnitude) {
  return magnitude === 0 ? 1 : magnitude * 4;
}

// Fetch earthquake data and add markers to the earthquakes layer
const earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(earthquakeUrl).then(data => {
  L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },
    style: function (feature) {
      return {
        fillColor: getColor(feature.geometry.coordinates[2]), // Depth for color
        color: "#000000", // Border color of markers
        weight: 0.5,
        radius: getRadius(feature.properties.mag), // Magnitude for size
        fillOpacity: 0.7,
        opacity: 1,
      };
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`
        <h3>Location: ${feature.properties.place}</h3>
        <p>Magnitude: ${feature.properties.mag}</p>
        <p>Depth: ${feature.geometry.coordinates[2]} km</p>
        <p>Date: ${new Date(feature.properties.time).toLocaleString()}</p>
      `);
    },
  }).addTo(earthquakes);
});

// Add the earthquakes layer to the map
earthquakes.addTo(map);

// Add a legend to the map with a white background
const legend = L.control({ position: "bottomright" });

legend.onAdd = function () {
  const div = L.DomUtil.create("div", "info legend");
  const depths = [-10, 10, 30, 50, 70, 90];
  const colors = ["#a3f600", "#dcf400", "#f7db11", "#fdb72a", "#fca35d", "#ff5f65"];

  // Styling the legend background
  div.style.backgroundColor = "white";
  div.style.padding = "10px";
  div.style.border = "2px solid #333";
  div.style.borderRadius = "5px";

  // Add legend title
  div.innerHTML = "<h4>Depth (km)</h4>";
  
  // Loop through depth intervals to generate label with color box
  for (let i = 0; i < depths.length; i++) {
    div.innerHTML +=
      `<i style="background:${colors[i]}; width: 18px; height: 18px; display: inline-block; margin-right: 8px;"></i> ` +
      `${depths[i]}${depths[i + 1] ? "&ndash;" + depths[i + 1] : "+"}<br>`;
  }
  return div;
};

legend.addTo(map);
