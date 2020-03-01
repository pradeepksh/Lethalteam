import React from "react";
import mapboxgl from "mapbox-gl";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2lzYXBpNzkzOSIsImEiOiJjazYwbnFjM3QwOTdkM21wa3p3MGFoODBlIn0.X0_rZjn7eQ2jIOOhqPG1AA";
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [73.128411, 18.990649],
      zoom: 10
    });

    map.on("load", function() {
      map.addSource("earthquakes", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          crs: {
            type: "name",
            properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" }
          },
          features: [
            {
              type: "Disease",
              properties: {
                id: "ak16994521",
                disease: "Abdominal Pain",
                symptoms: ["asdas", "asdasd", "asas"],
                time: 454555414
              },
              geometry: {
                type: "Point",
                coordinates: [73.124957, 18.99982, 0.0]
              }
            },
            {
              type: "Disease",
              properties: {
                id: "ak16994519",
                disease: "Abdominal Pain",
                symptoms: ["asdas", "asdasd", "asas"],
                time: 454555414
              },
              geometry: {
                type: "Point",
                coordinates: [73.119228, 19.003809, 105.5]
              }
            },
            {
              type: "Disease",
              properties: {
                id: "ak16994517",
                disease: "Abdominal Pain",
                symptoms: ["asdas", "asdasd", "asas"],
                time: 454555414
              },
              geometry: {
                type: "Point",
                coordinates: [73.089724, 19.020345, 0.0]
              }
            },
            {
              type: "Disease",
              properties: {
                id: "ci38021336",
                disease: "Abdominal Pain",
                symptoms: ["asdas", "asdasd", "asas"],
                time: 454555414
              },
              geometry: {
                type: "Point",
                coordinates: [73.092739, 19.024037, 7.64]
              }
            },
            {
              type: "Disease",
              properties: {
                id: "us2000b2nn",
                disease: "Abdominal Pain",
                symptoms: ["asdas", "asdasd", "asas"],
                time: 454555414
              },
              geometry: {
                type: "Point",
                coordinates: [73.100957, 19.009474, 46.41]
              }
            },
            {
              type: "Disease",
              properties: {
                id: "ak16994510",
                disease: "Abdominal Pain",
                symptoms: ["asdas", "asdasd", "asas"],
                time: 454555414
              },
              geometry: {
                type: "Point",
                coordinates: [73.109132, 19.007506, 0.0]
              }
            },
            {
              type: "Disease",
              properties: {
                id: "us2000b2nb",
                disease: "Abdominal Pain",
                symptoms: ["asdas", "asdasd", "asas"],
                time: 454555414
              },
              geometry: {
                type: "Point",
                coordinates: [73.113735, 19.010732, 614.26]
              }
            }
          ]
        }
      });
      // add heatmap layer here
      // add circle layer here

      map.addLayer(
        {
          id: "trees-heat",
          type: "heatmap",
          source: "earthquakes",
          maxzoom: 23,
          paint: {
            // increase weight as diameter breast height increases
            "heatmap-weight": {
              property: "dbh",
              type: "exponential",
              stops: [
                [1, 0],
                [62, 1]
              ]
            },
            // increase intensity as zoom level increases
            "heatmap-intensity": {
              stops: [
                [11, 1],
                [15, 3]
              ]
            },
            // assign color values be applied to points depending on their density
            "heatmap-color": [
              "interpolate",
              ["linear"],
              ["heatmap-density"],
              0,
              "rgba(236,222,239,0)",
              0.2,
              "rgb(208,209,230)",
              0.4,
              "rgb(166,189,219)",
              0.6,
              "rgb(103,169,207)",
              0.8,
              "rgb(28,144,153)"
            ],
            // increase radius as zoom increases
            "heatmap-radius": {
              stops: [
                [11, 15],
                [15, 20]
              ]
            },
            // decrease opacity to transition into the circle layer
            "heatmap-opacity": {
              default: 1,
              stops: [
                [14, 1],
                [15, 0]
              ]
            }
          }
        },
        "waterway-label"
      );
    });
    map.addControl(new mapboxgl.NavigationControl());
  }

  render() {
    return (
      <div className="map">
        <div ref={(el) => (this.mapContainer = el)} />
      </div>
    );
  }
}

export { Map };
