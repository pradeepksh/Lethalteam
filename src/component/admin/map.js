import React from "react";
import mapboxgl from "mapbox-gl";
import mapdata from "../../map.json";
import $ from "jquery";
import diseases from "../main/details.json";
var jsondata;
    $.ajax({
      type: "GET",
      url: "https://api.jsonbin.io/b/5e5f639a74ed8a66ce708432",
      headers:{
        "secret-key": "$2b$10$4Oyd.tdNstTqOgfK74Nn2OmD4XXl1cF0YhywD.cqSublDJ87WR/l6",
      },
      contentType: "application/json",
      dataType:"json",
      success: function(result) {
        jsondata=result;
        console.log(jsondata);
      },error: function(data){
        alert("Unable to add");
    }
    });
    function rainbow(numOfSteps, step) {
      // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
      // Adam Cole, 2011-Sept-14
      // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
      var r, g, b;
      var h = step / numOfSteps;
      var i = ~~(h * 6);
      var f = h * 6 - i;
      var q = 1 - f;
      switch(i % 6){
          case 0: r = 1; g = f; b = 0; break;
          case 1: r = q; g = 1; b = 0; break;
          case 2: r = 0; g = 1; b = f; break;
          case 3: r = 0; g = q; b = 1; break;
          case 4: r = f; g = 0; b = 1; break;
          case 5: r = 1; g = 0; b = q; break;
      }
      var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
      return (c);
    }
    function length(obj) {
      return Object.keys(obj).length;
    }
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
      console.log(jsondata);
      map.addSource("earthquakes", {
        type: "geojson",
        // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
        // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
        data: jsondata,
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
      var distinct=[];
      for (var i=0;i<length(jsondata.features);i++){
        if(distinct.includes(jsondata.features[i].properties.disease)){
          continue;
          //console.log("NOT ADDED");
        } else{
          distinct.push(jsondata.features[i].properties.disease);
          //console.log("ADDED");
        }
      }
      console.log(distinct);
      map.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "earthquakes",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": rainbow(length (jsondata.features),distinct.length ),
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

        if (diseases.hasOwnProperty(e.features[0].properties.disease)) {
          tsunami = e.features[0].properties.disease;
        } else{
          tsunami = "Disease Not found!";
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
