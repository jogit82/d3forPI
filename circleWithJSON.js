var data = [{"date":"2016-08-24","users":138,"searches":5718},{"date":"2016-08-23","users":151,"searches":8061},{"date":"2016-08-22","users":805,"searches":6930},{"date":"2016-08-21","users":446,"searches":9271},{"date":"2016-08-20","users":223,"searches":7921},{"date":"2016-08-19","users":585,"searches":817},{"date":"2016-08-18","users":872,"searches":2382},{"date":"2016-08-17","users":563,"searches":1884},{"date":"2016-08-16","users":866,"searches":5707},{"date":"2016-08-15","users":669,"searches":297},{"date":"2016-08-14","users":50,"searches":3246},{"date":"2016-08-13","users":162,"searches":9921},{"date":"2016-08-12","users":365,"searches":7107},{"date":"2016-08-11","users":853,"searches":4250},{"date":"2016-08-10","users":715,"searches":7365},{"date":"2016-08-09","users":435,"searches":4781},{"date":"2016-08-08","users":773,"searches":2832}];
var svgContainer = d3.select("body").append("svg")
.attr("width", 1000)
.attr("height", 1000);

var circles = svgContainer.selectAll("circle")
.data(data)
.enter()
.append("circle");

var circleAttributes = circles
.attr("cx", function(d){ return d.users; })
.attr("cy", function(d){ return d.searches/10; })
.attr("r", function(d){ return d.users/10; })
.style("fill", "green");
