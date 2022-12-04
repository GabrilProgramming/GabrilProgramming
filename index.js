import { nodes } from "./data.js";
import { links } from "./data.js";

const svg = d3.select("#container");
const width = +svg.attr("width");
const height = +svg.attr("height");
const centerX = width / 2;
const centerY = height / 2;

const simulation = d3
  .forceSimulation(nodes)
  .force("charge", d3.forceManyBody().strength(-1000))
  .force("link", d3.forceLink(links))
  .force("center", d3.forceCenter(centerX, centerY));

const circles = svg
  .selectAll("circle")
  .data(nodes)
  .enter()
  .append("circle")
  .attr("fill", "gray")
  .attr("r", (node) => node.size);

const text = svg
  .selectAll("text")
  .data(nodes)
  .enter()
  .append("text")
  .attr("text-anchor", "middle")
  .attr("alignment-baseline", "middle")
  .text((node) => node.id);

const lines = svg
  .selectAll("line")
  .data(links)
  .enter()
  .append("line")
  .attr("stroke", "black");

simulation.on("tick", () => {
  console.log("tick");
  circles.attr("cx", (node) => node.x).attr("cy", (node) => node.y);
  text.attr("x", (node) => node.x).attr("y", (node) => node.y);
  lines
    .attr("x1", (link) => link.source.x)
    .attr("y1", (link) => link.source.y)
    .attr("x2", (link) => link.target.x)
    .attr("y2", (link) => link.target.y);
});
