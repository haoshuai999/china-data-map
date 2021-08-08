import define1 from "./a33468b95d0b15b0@703.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["China@5.geojson",require("./files/3267422dcabe6c8764b6d0563a53623c2beb3110eef3a0c26cabce860f82cd888988ca7b43f8e1e90cb49c38f7d1372e0afbfe7ec10c03f2be7277311892ff86").default],["population@3.csv",require("./files/023f2e516d30f7483d2feb8ec2216b9af7fb5a2d3ff0ff615cfbfab3331a610a36ea2eb5a096ab59013e080c0e8db70c055f18b8c2a898e0ebe67742aaae6bfb").default]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# China Province Population Map`
)});
  main.variable(observer("viewof year")).define("viewof year", ["Inputs","data"], function(Inputs,data){return(
Inputs.select(data.columns.slice(1,-2), {value: "2020", label: "Year"})
)});
  main.variable(observer("year")).define("year", ["Generators", "viewof year"], (G, _) => G.input(_));
  main.variable(observer("viewof metrics")).define("viewof metrics", ["Inputs"], function(Inputs){return(
Inputs.radio(["Population", "Deputies"], {value: "Population"})
)});
  main.variable(observer("metrics")).define("metrics", ["Generators", "viewof metrics"], (G, _) => G.input(_));
  main.variable(observer("chart")).define("chart", ["d3","width","height","legend","color","china","population","year","metrics","x","year_list","y","xAxis","yAxis","margin","deputy","x2","gender_list","y2","xAxis2","yAxis2","callout","format"], function(d3,width,height,legend,color,china,population,year,metrics,x,year_list,y,xAxis,yAxis,margin,deputy,x2,gender_list,y2,xAxis2,yAxis2,callout,format)
{

  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, width, height]);
  //.style("overflow", "visible");

  svg
    .append("g")
    .attr("transform", "translate(10,20)")
    .append(() => legend({ color, title: "Population", width: 260, tickFormat: ".2s" }));
  
  let projection = d3.geoMercator() 
    .center([width > 500 ? 111.8 : 105, width > 500 ? 46.9 : 42])
    .translate([width > 500 ? width / 3 : width / 2 , height / 3])
    .scale(width > 500 ? width / 2.5 : width / 1.2);

  let path = d3.geoPath()
    .projection(projection);


  svg
    .append('g')
    .selectAll('path')
  	.data(china.features)
  	.enter()
    .append('path')
    .attr("class", "province")
    .attr('d', path)
    .attr("stroke", "white")
    .attr("fill", d => {
      if(d.properties.name !== "Taiwan"){
        return color(population.get(d.properties.name)[year-2011]);
      } else {
        return "#000000";
      }
    })
  	
  
  if (metrics == "Population") {
    svg.append("g")
        .attr("class","bar")
      .selectAll("rect")
      .data(population.get("Guangdong"))
      .join("rect")
        .attr("x", (d, i) => x(year_list[i]))
        .attr("y", d => y(d))
        .attr("height", d => y(0) - y(d))
        .attr("width", x.bandwidth())
        .attr("fill", "red");

    svg.append("g")
        .call(xAxis);

    svg.append("g")
        .call(yAxis);

    svg
      .append("text")
      .attr("class", "bartitle")
      .attr("x", width > 500 ? width *  0.75 + margin.left : width / 2)
      .attr("y", width > 500 ? margin.top : height * 0.6 + margin.top)
      .attr("text-anchor", "middle")
      .style("font-size", 16)
      .style("font-weight", "bold")
      .text(`${metrics} of Guangdong`);

  } else {
    svg.append("g")
        .attr("class","bar")
      .selectAll("rect")
      .data(deputy.get("Guangxi"))
      .join("rect")
        .attr("x", (d, i) => x2(gender_list[i]) + x2.bandwidth()/4)
        .attr("y", d => y2(d))
        .attr("height", d => y2(0) - y2(d))
        .attr("width", x2.bandwidth() / 2)
        .attr("fill", "blue");

    svg.append("g")
        .call(xAxis2);

    svg.append("g")
        .call(yAxis2);

    svg
      .append("text")
      .attr("class", "bartitle")
      .attr("x", width > 500 ? width *  0.75 + margin.left : width / 2)
      .attr("y", width > 500 ? margin.top : height * 0.6 + margin.top)
      .attr("text-anchor", "middle")
      .style("font-size", 16)
      .style("font-weight", "bold")
      .text(`${metrics} of Guangxi`);
  }

  const tooltip = svg.append("g");

  svg
    .selectAll(".province")
    .on("touchmove click", function(event, d) {
      tooltip.call(
        callout,
        `${d.properties.name}
Male NPC deputies；${deputy.get(d.properties.name)[0]}
Female NPC deputies: ${deputy.get(d.properties.name)[1]}
${year} Population: ${d.properties.name === "Taiwan" ? "N/A" : format(population.get(d.properties.name)[year-2011])}`
      );
      tooltip.attr("transform", `translate(${d3.pointer(event, this)})`);
      d3.select(this)
        .attr("stroke", "red")
        .raise();
      
      if (metrics == "Population") {           
        d3.selectAll(".bar").remove();
        d3.selectAll(".bartitle").remove();
        
        svg.append("g")
            .attr("class","bar")
          .selectAll("rect")
          .data(population.get(d.properties.name))
          .join("rect")
            .attr("x", (d, i) => x(year_list[i]))
            .attr("width", x.bandwidth())
            .attr("y", height - margin.top)
            .attr("height", 0)
            .transition()
        		.duration(200)
            .ease(d3.easeLinear)
            .attr("y", d => y(d))
            .attr("height", d => y(0) - y(d))
            .attr("fill", "red");
  
        svg.append("g")
            .call(xAxis);
  
        svg.append("g")
            .call(yAxis);

        svg
          .append("text")
          .attr("class", "bartitle")
          .attr("x", width > 500 ? width *  0.75 + margin.left : width / 2)
          .attr("y", width > 500 ? margin.top : height * 0.6 + margin.top)
          .attr("text-anchor", "middle")
          .style("font-size", 16)
          .style("font-weight", "bold")
          .text(`${metrics} of ${d.properties.name}`);
        
      } else {
        d3.selectAll(".bar").remove();
        d3.selectAll(".bartitle").remove();
        
        svg.append("g")
            .attr("class","bar")
            .attr("fill", "blue")
          .selectAll("rect")
          .data(deputy.get(d.properties.name))
          .join("rect")
            .attr("x", (d, i) => x2(gender_list[i]) + x2.bandwidth()/4)
            .attr("width", x2.bandwidth() / 2)
            .attr("y", height - margin.top)
            .attr("height", 0)
            .transition()
        		.duration(200)
            .ease(d3.easeLinear)
            .attr("y", d => y2(d))
            .attr("height", d => y2(0) - y2(d));
  
        svg.append("g")
            .call(xAxis2);
  
        svg.append("g")
            .call(yAxis2);

        svg
          .append("text")
          .attr("class", "bartitle")
          .attr("x", width > 500 ? width *  0.75 + margin.left : width / 2)
          .attr("y", width > 500 ? margin.top : height * 0.6 + margin.top)
          .attr("text-anchor", "middle")
          .style("font-size", 16)
          .style("font-weight", "bold")
          .text(`${metrics} of ${d.properties.name}`);
      }
    })
    .on("touchend mouseleave", function() {
      tooltip.call(callout, null);
      d3.select(this)
        .attr("stroke", "white")
        .lower();
    });

  return svg.node();
}
);
  main.variable(observer("x")).define("x", ["d3","year_list","width","margin"], function(d3,year_list,width,margin){return(
d3.scaleBand()
    .domain(year_list)
    .range([(width > 500 ? width / 2 + margin.left : margin.left), width - margin.right])
    .padding(0.1)
)});
  main.variable(observer("x2")).define("x2", ["d3","gender_list","width","margin"], function(d3,gender_list,width,margin){return(
d3.scaleBand()
    .domain(gender_list)
    .range([(width > 500 ? width / 2 + margin.left : margin.left), width - margin.right])
    .padding(0.1)
)});
  main.variable(observer("y")).define("y", ["d3","population","height","margin","width"], function(d3,population,height,margin,width){return(
d3.scaleLinear()
    .domain([0, d3.max(population.get("Guangdong"))]).nice()
    .range([height - margin.bottom, width > 500 ? margin.top : margin.top + height * 0.6])
)});
  main.variable(observer("y2")).define("y2", ["d3","deputy","height","margin","width"], function(d3,deputy,height,margin,width){return(
d3.scaleLinear()
    .domain([0, d3.max(deputy.get("Guangxi"))]).nice()
    .range([height - margin.bottom, width > 500 ? margin.top : margin.top + height * 0.6])
)});
  main.variable(observer("xAxis")).define("xAxis", ["height","margin","d3","x"], function(height,margin,d3,x){return(
g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .attr("class", "bar")
    .call(d3.axisBottom(x).tickSizeOuter(0))
)});
  main.variable(observer("xAxis2")).define("xAxis2", ["height","margin","d3","x2"], function(height,margin,d3,x2){return(
g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .attr("class", "bar")
    .call(d3.axisBottom(x2).tickSizeOuter(0))
)});
  main.variable(observer("yAxis")).define("yAxis", ["width","margin","d3","y","y_format","height"], function(width,margin,d3,y,y_format,height){return(
g => g
    .attr("transform", `translate(${width > 500 ? width/2 + margin.left : margin.left},0)`)
    .attr("class", "bar")
    .call(d3.axisLeft(y).ticks(null, y_format))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
        .attr("x", -margin.left)
        .attr("y", width > 500 ? 10 : height * 0.62)
        .attr("fill", "black")
        .attr("text-anchor", "start")
        .text("Population"))
)});
  main.variable(observer("yAxis2")).define("yAxis2", ["width","margin","d3","y2","y_format","height"], function(width,margin,d3,y2,y_format,height){return(
g => g
    .attr("transform", `translate(${width > 500 ? width/2 + margin.left : margin.left},0)`)
    .attr("class", "bar")
    .call(d3.axisLeft(y2).ticks(null, y_format))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
        .attr("x", -margin.left)
        .attr("y", width > 500 ? 10 : height * 0.62)
        .attr("fill", "black")
        .attr("text-anchor", "start")
        .text("Number of Deputies"))
)});
  main.variable(observer("year_list")).define("year_list", ["data"], function(data){return(
data.columns.slice(1,-2).reverse()
)});
  main.variable(observer("gender_list")).define("gender_list", ["data"], function(data){return(
data.columns.slice(-2)
)});
  main.variable(observer("population")).define("population", ["data"], function(data){return(
new Map(data.map(d => [d.Delegation, [d["2011"],d["2012"],d["2013"],d["2014"],d["2015"],d["2016"],d["2017"],d["2018"],d["2019"],d["2020"]]])).set("Taiwan",["N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A"])
)});
  main.variable(observer("deputy")).define("deputy", ["data"], function(data){return(
new Map(data.map(d => [d.Delegation, [d.Men, d.Women]])).set("Taiwan",["N/A","N/A"])
)});
  main.variable(observer("height")).define("height", ["width"], function(width){return(
  width > 500 ? 400 : 550
)});
  main.variable(observer("data")).define("data", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("population@3.csv").text(), d3.autoType)
)});
  main.variable(observer("callout")).define("callout", function(){return(
(g, value) => {
  if (!value) return g.style("display", "none");

  g
      .style("display", null)
      .style("pointer-events", "none")
      .style("font", "10px sans-serif");

  const path = g.selectAll("path")
    .data([null])
    .join("path")
      .attr("fill", "white")
      .attr("stroke", "black");

  const text = g.selectAll("text")
    .data([null])
    .join("text")
    .call(text => text
      .selectAll("tspan")
      .data((value + "").split(/\n/))
      .join("tspan")
        .attr("x", 0)
        .attr("y", (d, i) => `${i * 1.1}em`)
        .style("font-weight", (_, i) => i ? null : "bold")
        .text(d => d));

  const {x, y, width: w, height: h} = text.node().getBBox();

  text.attr("transform", `translate(${-w / 2},${15 - y})`);
  path.attr("d", `M${-w / 2 - 10},5H-5l5,-5l5,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`);
}
)});
  main.variable(observer("color")).define("color", ["d3"], function(d3){return(
d3.scaleQuantize([0, 120000000], d3.schemeBlues[7])
)});
  main.variable(observer("path")).define("path", ["d3"], function(d3){return(
d3.geoPath()
)});
  main.variable(observer("format")).define("format", ["d3"], function(d3){return(
d3.format(",")
)});
  main.variable(observer("y_format")).define("y_format", ["d3"], function(d3){return(
d3.format("s")
)});
  main.variable(observer("states")).define("states", ["china"], function(china){return(
new Map(china.features.map(d => [d.id, d.properties]))
)});
  main.variable(observer("china")).define("china", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("China@5.geojson").json()
)});
  main.variable(observer("margin")).define("margin", function(){return(
{top: 30, right: 0, bottom: 30, left: 40}
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@6")
)});
  const child1 = runtime.module(define1);
  main.import("legend", child1);
  return main;
}
