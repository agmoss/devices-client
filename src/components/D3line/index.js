import React, { Component } from 'react'

import * as d3 from "d3";

class D3line extends Component {
   constructor(props){
      super(props)
      this.createLineChart = this.createLineChart.bind(this)
   }

   componentDidMount() {
      this.createLineChart()
   }

   componentDidUpdate() {
      //this.createLineChart()
   }

   createLineChart() {

        const data = this.props.data;

        // set the dimensions and margins of the graph
        var margin = {top: 10, right: 100, bottom: 30, left: 100},
            width = 1500 - margin.left - margin.right,
            height = 600 - margin.top - margin.bottom;

        // APPEND THE SVG TO !!!!lineDiv!!!!
        var svg = d3.select("#lineDiv")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0" + width + " " + height)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        // In correct order
        data.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        });

        // List of groups 
        var allGroup = ["Active","Engaged","Override","Load","Unplug"]

        // add the options to the button
        d3.select("#selectStatus")
            .selectAll('myOptions')
            .data(allGroup)
            .enter()
            .append('option')
            .text(function (d) { return d; }) // text showed in the menu
            .attr("value", function (d) { return d; }) // corresponding value returned by the button


        // A color scale: one color for each group
        var myColor = d3.scaleOrdinal()
            .domain(allGroup)
            .range(d3.schemeSet2);

        var x = d3.scaleTime()
            .domain(d3.extent(data, function(d) {return d.date;}))
            .range([0, width]);

        var y = d3.scaleLinear()
            .domain( [d3.min(data, function(d) { return d.status['Active']; }) - 5, d3.max(data, function(d) { return d.status['Active']; })+5])
            .range([ height, 0 ]);

        // Axis
        var xAxis = d3.axisBottom(x)
            .scale(x)
            .tickPadding(10)

        var yAxis = d3.axisLeft(y)
            .scale(y)


        // Add x and y axis
        var gX = svg.append("g")
        .attr("class", "axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)

        var gY = svg.append("g")
        .attr("class", "axis--y")
        .call(yAxis)


        // Axis style
        gY.select('.domain').attr('stroke-width', '3px');

        gY.selectAll('.tick line')  // '.tick' is the <g> element of ticks, and <line> and <text> are in it
            .attr('stroke-width', '3px');

        gY.selectAll('.tick text')
            .attr('font-size', 15)
            .attr('font-family', 'serif')
            .attr('fill', 'black');


        gX.select('.domain').attr('stroke-width', '3px');

        gX.selectAll('.tick line')  // '.tick' is the <g> element of ticks, and <line> and <text> are in it
            .attr('stroke-width', '3px');

        gX.selectAll('.tick text')
            .attr('font-size', 15)
            .attr('font-family', 'serif')
            .attr('fill', 'black');


        // Initialize line with group a
        var line = svg
            .append('g')
            .append("path")
            .datum(data)
            .attr("d", d3.line()
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y(d.status['Active']);})
            )
            .attr("stroke", function(d){ return myColor("Active")})
            .style("stroke-width", 4)
            .style("fill", "none");

        // A function that update the chart
        function update(selectedGroup) {

            var dataFilter = [];
            data.forEach(element => {
                if( selectedGroup in element['status']){
                    dataFilter.push({date:element.date, value : element["status"][selectedGroup]})
                }
            });

            console.log(dataFilter);

            // Give these new data to update line
            line
                .datum(dataFilter)
                .transition()
                .duration(1000)
                .attr("d", d3.line()
                .x(function(d) { return x(+d.date)})
                .y(function(d) { return y(+d.value)})
                )
                .attr("stroke", function(d){ return myColor(selectedGroup)})

        }

        // Listner
        // When the ddl is changed, run the updateChart function
        d3.select("#selectStatus").on("change", function(d) {

            // recover the option that has been chosen
            var selectedOption = d3.select(this).property("value")
            // run the updateChart function with this selected option
            update(selectedOption)
        })

        // Responsive
        var aspect = width / height,
            chart = d3.select('#lineDiv');

        d3.select(window)
        .on("resize", function() {
            var targetWidth = chart.node().getBoundingClientRect().width;
            chart.attr("width", targetWidth);
            chart.attr("height", targetWidth / aspect);
        });

   }

render() {
    return <div id={"#" + this.props.id}></div>
   }
}
export default D3line