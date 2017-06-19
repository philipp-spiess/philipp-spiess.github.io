const HOURS_PER_WEEK = 32;
const dropzone = document.getElementById("dropzone");

dropzone.addEventListener("dragover", e => {
  e.preventDefault();
});

dropzone.addEventListener("drop", e => {
  e.preventDefault();

  const dt = e.dataTransfer;
  for (let i = 0; i < dt.items.length; i++) {
    if (dt.items[i].kind == "file") {
      const file = dt.items[i].getAsFile();

      const reader = new FileReader();
      reader.onload = e => visualize(reader.result);
      reader.onerror = e => console.error(e);
      reader.readAsText(file);
    }
  }
});

function visualize(data) {
  dropzone.classList.remove("not-loaded");

  const svg = d3.select("svg"),
    margin = { top: 20, right: 20, bottom: 30, left: 50 },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;


  const x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
  const y = d3.scaleLinear().rangeRound([height, 0]);

  const g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // const line = d3.line()
  //   .x(d => x(d.key))
  //   .y(d => y( secondsToDuration(d.duration)));

  const parser = d3.dsvFormat(",");

  data = parser
    .parse(data, row => ({
      duration: durationToSeconds(row.duration) / 60 / 60,
      start: new Date(row.start),
      end: new Date(row.start)
    }))
    .sort((a, b) => a.start - b.start);

  const week = d3.timeFormat("%Y-%U");
  data = d3
    .nest()
    .key(d => week(d.start))
    .entries(data)
    .map(({ key, values }) => ({
      key,
      values,
      duration: values
        .map(v => v.duration)
        .reduce((prev, curr) => prev + curr, 0)
        - HOURS_PER_WEEK
    }));

  const totalExtraHours = data.map(d => d.duration).reduce((prev, curr) => prev + curr, 0)

  console.log(totalExtraHours);

  x.domain(data.map(d => d.key));
  y.domain([d3.min(data, d => d.duration), d3.max(data, d => d.duration)]);

  g
    .append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  g
    .append("g")
    .attr("class", "axis axis--y")
    .call(d3.axisLeft(y).ticks(10))
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end")
    .text("Frequency");

  g
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.key))
    .attr("y", d => y(d.duration))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.duration));
}

// eg. `""`, `"00"`, `"58:10"`, `"8:00:00"`
function durationToSeconds(duration) {
  const [seconds, minutes, hours] = duration.split(":").reverse();
  let durationInSeconds = 0;
  if (seconds) {
    durationInSeconds += Number(seconds);
  }
  if (minutes) {
    durationInSeconds += Number(minutes) * 60;
  }
  if (hours) {
    durationInSeconds += Number(hours) * 60 * 60;
  }
  return durationInSeconds;
}

function secondsToDuration(seconds) {
  const date = new Date(null);
  date.setSeconds(seconds);
  const result = date.toISOString().substr(11, 8);
  console.log(result)
  if (seconds < 0) {
    return '-' + result
  } else {
    return result
  }
}
