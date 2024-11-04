# Earthquake and Tectonic Plates Visualization Map

This project visualizes earthquake data and tectonic plate boundaries on an interactive map using Leaflet.js. The visualization includes dynamic earthquake markers that represent magnitude and depth, as well as tectonic plate boundaries for better geological context. Users can switch between different map layers and toggle visibility for both earthquake data and tectonic plate boundaries.

## Table of Contents

- [Features](#features)
- [Data Sources](#data-sources)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)

## Features

- **Interactive Earthquake Markers**: Displays recent earthquakes with markers sized by magnitude and colored by depth.
- **Tectonic Plate Boundaries**: Shows tectonic plate boundaries for geological reference.
- **Layer Controls**: Users can toggle between different map styles (Satellite, Grayscale, Outdoors) and control the visibility of earthquake markers and tectonic plates.
- **Legend**: A color-coded legend for earthquake depth, helping users interpret the data more easily.

## Data Sources

- **Earthquake Data**: Sourced from the [USGS Earthquake API](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson), providing real-time earthquake data.
- **Tectonic Plate Boundaries**: Sourced from the [Fraxen Tectonic Plates GeoJSON repository](https://github.com/fraxen/tectonicplates).

## Technologies Used

- **Leaflet.js**: For creating interactive maps and adding custom layers.
- **D3.js**: For fetching and handling GeoJSON data.
- **JavaScript & HTML**: Front-end technologies for implementing the map functionality and layout.

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/earthquake-tectonic-map.git
   cd earthquake-tectonic-map
   ```
2. **Install Dependencies**: Ensure that you have a web server to serve the HTML files. This is necessary because Leaflet requires files to be served from a web server.

## Usage

1. **Start the Web Server**:

If you have http-server installed, you can start a local server using:
	```bash
	Open index.html with a web server or a tool like Live Server in VS Code.
	```

2. Explore the Map:

- The map should open in your browser, displaying earthquake markers and tectonic plate boundaries.
- Use the layer control in the top right to switch between Satellite, Grayscale, and Outdoors base layers.
- Toggle the visibility of Tectonic Plates and Earthquakes using the checkboxes.

## File Structure
- index.html: Main HTML file containing the structure of the webpage.
- logic.js: JavaScript code handling map initialization, earthquake data fetching, tectonic plate boundary display, and layer control.
- styles.css: Optional CSS for additional styling.

## Additional Files
- README.md: Project documentation.

## License
This project is licensed under the MIT License - see the LICENSE file for details.