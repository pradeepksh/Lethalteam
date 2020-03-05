import React from "react";
import mapboxgl from "mapbox-gl";
import $ from "jquery";
import diseases from "../main/details.json";
import * as d3 from "d3";
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
      zoom: 1.8
    });
    
    const malaria = ['==', ['get', 'disease'], 'Malaria'];
    const dengue = ['==', ['get', 'disease'], 'Dengue'];
    const angioedema = ['==', ['get', 'disease'], 'Angioedema'];
    const asthma = ['==', ['get', 'disease'], 'Asthma'];
    const colors = ['#8dd3c7','#ffffb3','#bebada','#fb8072'];

    // using d3 to create a consistent color scale
    const colorScale = d3.scaleOrdinal()
      .domain(["malaria", "dengue", "angioedema", "asthma"])
      .range(colors)
      
      map.on('load', () => {
        // add a clustered GeoJSON source for powerplant
        map.addSource('diseases', {
          'type': 'geojson',
          'data': jsondata,
          'cluster': true,
          'clusterRadius': 100,
          'clusterProperties': { // keep separate counts for each fuel category in a cluster
            'malaria': ['+', ['case', malaria, 1, 0]],
            'dengue': ['+', ['case', dengue, 1, 0]],
            'angioedema': ['+', ['case', angioedema, 1, 0]],
            'asthma': ['+', ['case', asthma, 1, 0]]
          }
        });
      
        map.addLayer({
          'id': 'disease_individual',
          'type': 'circle',
          'source': 'diseases',
          'filter': ['!=', ['get', 'cluster'], true],
          'paint': {
            'circle-color': ['case',
              malaria, colorScale('malaria'),
              dengue, colorScale('dengue'),
              angioedema, colorScale('angioedema'),
              asthma, colorScale('asthma'), '#ffed6f'],
            'circle-radius': 5
          }
        });
      
          map.addLayer({
            'id': 'disease_individual_outer',
            'type': 'circle',
            'source': 'diseases',
            'filter': ['!=', ['get', 'cluster'], true],
            'paint': {
              'circle-stroke-color': ['case',
              malaria, colorScale('malaria'),
              dengue, colorScale('dengue'),
              angioedema, colorScale('angioedema'),
              asthma, colorScale('asthma'), '#ffed6f'],
              'circle-stroke-width': 2,
              'circle-radius': 10,
              'circle-color': "rgba(0, 0, 0, 0)"
            }
          });
      
      
      
          let markers = {};
          let markersOnScreen = {};
          let point_counts = [];
          let totals;
      
          const getPointCount = (features) => {
            features.forEach(f => {
              if (f.properties.cluster) {
                point_counts.push(f.properties.point_count)
              }
            })
      
            return point_counts;
          };
      
          const updateMarkers = () => {
            document.getElementById('key').innerHTML = '';
            let newMarkers = {};
            const features = map.querySourceFeatures('diseases');
            totals = getPointCount(features);
            var id;
            features.forEach((feature) => {
              const coordinates = feature.geometry.coordinates;
              const props = feature.properties;
      
              if (!props.cluster) {
                return;
              };
      
      
              var id = props.cluster_id;
      
              let marker = markers[id];
              if (!marker) {
                const el = createDonutChart(props, totals);
                marker = markers[id] = new mapboxgl.Marker({
                  element: el
                })
                .setLngLat(coordinates)
              }
      
              newMarkers[id] = marker;
      
              if (!markersOnScreen[id]) {
                marker.addTo(map);
              }
            });
      
            for (id in markersOnScreen) {
              if (!newMarkers[id]) {
                markersOnScreen[id].remove();
              }
            }
              markersOnScreen = newMarkers;
          };
      
          const createDonutChart = (props, totals) => {
            const div = document.createElement('div');
            const data = [
              {type: 'malaria', count: props.malaria},
              {type: 'dengue', count: props.dengue},
              {type: 'asthma', count: props.asthma},
              {type: 'angioedema', count: props.angioedema},
            ];
      
            const thickness = 10;
            const scale = d3.scaleLinear()
              .domain([d3.min(totals), d3.max(totals)])
              .range([500, d3.max(totals)])
      
            const radius = Math.sqrt(scale(props.point_count));
            const circleRadius = radius - thickness;
      
            const svg = d3.select(div)
              .append('svg')
              .attr('class', 'pie')
              .attr('width', radius * 2)
              .attr('height', radius * 2);
      
            //center
            const g = svg.append('g')
              .attr('transform', `translate(${radius}, ${radius})`);
      
            const arc = d3.arc()
              .innerRadius(radius - thickness)
              .outerRadius(radius);
      
            const pie = d3.pie()
              .value(d => d.count)
              .sort(null);
      
            const path = g.selectAll('path')
              .data(pie(data.sort((x, y) => d3.ascending(y.count, x.count))))
              .enter()
              .append('path')
              .attr('d', arc)
              .attr('fill', (d) => colorScale(d.data.type))
      
            const circle = g.append('circle')
              .attr('r', circleRadius)
              .attr('fill', 'rgba(0, 0, 0, 0.7)')
              .attr('class', 'center-circle')
      
            const text = g
              .append("text")
              .attr("class", "total")
              .text(props.point_count_abbreviated)
              .attr('text-anchor', 'middle')
              .attr('dy', 5)
              .attr('fill', 'white')
      
              const infoEl = createTable(props);
      
              svg.on('click', () => {
                d3.selectAll('.center-circle').attr('fill', 'rgba(0, 0, 0, 0.7)')
                circle.attr('fill', 'rgb(71, 79, 102)')
                document.getElementById('key').innerHTML = '';
                document.getElementById('key').append(infoEl);
              })
      
            return div;
          }
      
          const createTable = (props) => {
            const getPerc = (count) => {
              return count/props.point_count;
            };
      
            const data = [
              {type: 'malaria', perc: getPerc(props.malaria)},
              {type: 'dengue', perc: getPerc(props.dengue)},
              {type: 'asthma', perc: getPerc(props.asthma)},
              {type: 'angioedema', perc: getPerc(props.angioedema)},
            ];
      
            const columns = ['type', 'perc']
            const div = document.createElement('div');
            const table = d3.select(div).append('table').attr('class', 'table')
            const thead = table.append('thead')
            const	tbody = table.append('tbody');
      
            thead.append('tr')
              .selectAll('th')
              .data(columns).enter()
              .append('th')
              .text((d) => {
                let colName = d === 'perc' ? '%' : 'Disease Type'
                return colName;
              })
      
            const rows = tbody.selectAll('tr')
              .data(data.filter(i => i.perc).sort((x, y) => d3.descending(x.perc, y.perc)))
              .enter()
              .append('tr')
              .style('border-left', (d) => `20px solid ${colorScale(d.type)}`);
      
            // create a cell in each row for each column
            const cells = rows.selectAll('td')
              .data((row) => {
                return columns.map((column) => {
                  let val = column === 'perc' ? d3.format(".2%")(row[column]) : row[column];
                  return {column: column, value: val};
                });
              })
              .enter()
              .append('td')
              .text((d) => d.value)
              .style('text-transform', 'capitalize')
      
            return div;
          }
      
          map.on('data', (e) => {
            if (e.sourceId !== 'diseases' || !e.isSourceLoaded) return;
      
            map.on('move', updateMarkers);
            map.on('moveend', updateMarkers);
            updateMarkers();
          });


          map.on("click", "disease_individual", function(e) {
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


      });
  }

  render() {
    return (
      <div className="map">
        <div ref={el => (this.mapContainer = el)} />
        <div id="key"></div>
      </div>
    );
  }
}

export { Map };
