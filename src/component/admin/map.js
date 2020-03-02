import React from "react";
import mapboxgl from "mapbox-gl";
import mapdata from "../../map.geojson";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    mapboxgl.accessToken =
      "pk.eyJ1IjoicHJhZG5lc2gwOCIsImEiOiJjazc4bm1rMjUwaDJxM21ueXozeWxjaTl2In0.xneS2KANPf7rTW4lx2o4-g";
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [77.1025, 28.7041],
      zoom: 3
    });

    map.on("load", function() {
      // Add a new source from our GeoJSON data and
      // set the 'cluster' option to true. GL-JS will
      // add the point_count property to your source data.
      map.addSource("earthquakes", {
        type: "geojson",
        // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
        // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: { id: 1, disease: "Malaria", date: "1-3-2020" },
              geometry: {
                type: "Point",
                coordinates: [73.0393436551094, 19.018596666961614]
              }
            },
            {
              type: "Feature",
              properties: { id: 2, disease: "Malaria", date: "1-3-2020" },
              geometry: {
                type: "Point",
                coordinates: [73.03984522819519, 19.018226440496424]
              }
            },
            {
              type: "Feature",
              properties: { id: 3, disease: "Anaemia", date: "1-3-2020" },
              geometry: {
                type: "Point",
                coordinates: [73.03256034851074, 19.01587066511115]
              }
            },
            {
              type: "Feature",
              properties: { id: 4, disease: "Hepatitis-B", date: "1-3-2020" },
              geometry: {
                type: "Point",
                coordinates: [72.84759521484375, 19.010839489441842]
              }
            },
            {
              type: "Feature",
              properties: { id: 5, disease: "Herpes", date: "1-3-2020" },
              geometry: {
                type: "Point",
                coordinates: [73.04946899414062, 19.299478713495898]
              }
            },
            {
              type: "Feature",
              properties: { id: 6, disease: "Heart attack", date: "1-3-2020" },
              geometry: {
                type: "Point",
                coordinates: [74.1357421875, 18.531700307384043]
              }
            },
            {
              type: "Feature",
              properties: { id: 7, disease: "Asthama", date: "1-3-2020" },
              geometry: {
                type: "Point",
                coordinates: [70.86181640625, 21.022982546427425]
              }
            },
            {
              type: "Feature",
              properties: { id: 8, disease: "Dengue", date: "1-3-2020" },
              geometry: {
                type: "Point",
                coordinates: [71.905517578125, 23.11004929735674]
              }
            },
            {
              type: "Feature",
              properties: { id: 9, disease: "diarrhea", date: "1-3-2020" },
              geometry: {
                type: "Point",
                coordinates: [72.784423828125, 21.166483858206583]
              }
            },
            {
              type: "Feature",
              properties: { id: 10, disease: "Allergies", date: "1-3-2020" },
              geometry: {
                type: "Point",
                coordinates: [79.1455078125, 21.105000275382064]
              }
            }
          ]
        },
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
      });

      map.addLayer({
        id: "clusters",
        type: "circle",
        source: "earthquakes",
        filter: ["has", "point_count"],
        paint: {
          // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
          // with three steps to implement three types of circles:
          //   * Blue, 20px circles when point count is less than 100
          //   * Yellow, 30px circles when point count is between 100 and 750
          //   * Pink, 40px circles when point count is greater than or equal to 750
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#51bbd6",
            100,
            "#f1f075",
            750,
            "#f28cb1"
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            20,
            100,
            30,
            750,
            40
          ]
        }
      });

      map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "earthquakes",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 12
        }
      });

      map.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "earthquakes",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#11b4da",
          "circle-radius": 4,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#fff"
        }
      });

      // inspect a cluster on click
      map.on("click", "clusters", function(e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ["clusters"]
        });
        var clusterId = features[0].properties.cluster_id;
        map
          .getSource("earthquakes")
          .getClusterExpansionZoom(clusterId, function(err, zoom) {
            if (err) return;

            map.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom
            });
          });
      });

      // When a click event occurs on a feature in
      // the unclustered-point layer, open a popup at
      // the location of the feature, with
      // description HTML from its properties.
      map.on("click", "unclustered-point", function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        //var mag = e.features[0].properties.mag;
        var tsunami;

        if (e.features[0].properties.disease === "Malaria") {
          tsunami = "Malaria";
        } else if (e.features[0].properties.disease === "Allergies") {
          tsunami = "Allergies";
        } else if (e.features[0].properties.disease === "Anaemia") {
          tsunami = "Anaemia";
        } else if (e.features[0].properties.disease === "diarrhea") {
          tsunami = "diarrhea";
        } else if (e.features[0].properties.disease === "Dengue") {
          tsunami = "Dengue";
        } else if (e.features[0].properties.disease === "Asthama") {
          tsunami = "Asthama";
        } else if (e.features[0].properties.disease === "Heart attack") {
          tsunami = "Heart attack";
        } else if (e.features[0].properties.disease === "Herpes") {
          tsunami = "Herpes";
        } else if (e.features[0].properties.disease === "Hepatitis-B") {
          tsunami = "Hepatitis-B";
        } 

        // Ensure that if the map is zoomed out such that
        // multiple copies of the feature are visible, the
        // popup appears over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML("Disease Predictor : <br>disease name: " + tsunami)
          .addTo(map);
      });

      map.on("mouseenter", "clusters", function() {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "clusters", function() {
        map.getCanvas().style.cursor = "";
      });
    });
  }

  render() {
    return (
      <div className="map">
        <div ref={el => (this.mapContainer = el)} />
      </div>
    );
  }
}

export { Map };
