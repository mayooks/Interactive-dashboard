//Use the D3 library to read in `samples.json` from the provided url and create a horizontal bar chart

function buildCharts(patientID) {
  const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
  d3.json(url).then((samplesData => {
       console.log(samplesData);
    let samples = samplesData.samples;
    let metadata = samplesData.metadata;
    let filmetadata = metadata.filter(bacteriaInfo => bacteriaInfo.id == patientID)[0];
    let filSample = samples.filter(bacteriaInfo => bacteriaInfo.id == patientID)[0];
    let sample_values = filSample.sample_values;
    let otu_ids = filSample.otu_ids;
    let otu_labels = filSample.otu_labels;


    //2) Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
      var bartracedata = [{
        x: sample_values.slice(0, 10).reverse(),
        y: otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse(),
        text: otu_labels.slice(0, 10).reverse(),
        type: 'bar',
        orientation: 'h',
        marker: {
          color: 'rgb(66, 203, 245)'
        },
      }]
      var layout = {
        title: "Top 10 OTU",
      };
      Plotly.newPlot('barchartplot', bartracedata, layout);

      //Bubble chart
       var bubblechart = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        color: otu_ids,
        size: sample_values,
        colorscale: 'jet'
      }
    }];
    var bubblechartlayout = {
      xaxis: { title: "OTU IDs" }
    };
    // gauge meter
            var washFreq = filmetadata.wfreq
            var gaugemeter = [
      {
        type: "indicator",
        mode: "gauge+number+delta",
        value: washFreq,
        title: { text: "Speed", font: { size: 24 } },
        delta: { reference: 0, increasing: { color: "RebeccaPurple" } },
        gauge: {
          axis: { range: [null, 10], tickwidth: 1, tickcolor: "darkblue" },
          bar: { color: "white" },
          bgcolor: "white",
          borderwidth: 2,
          bordercolor: "gray",
          steps: [
              {range: [0, 2], color: "#dcde9f" },
              {range: [2, 4], color: "#f3f4d3" },
              {range: [4, 6], color: "#92a65f" },
              { range: [6, 8], color: "#446129" },
              {range: [8, 10], color: "#183114" },
          ],
          threshold: {
            line: { color: "red", width: 4 },
            thickness: 0.75,
            value: 490
          }
        }
      }
    ];

var layout = {
  width: 500,
  height: 400,
  margin: { t: 25, r: 25, l: 25, b: 25 },
  paper_bgcolor: "lavender",
  font: { color: "darkblue", family: "Arial" }
};

Plotly.newPlot('gauge', gaugemeter, layout);




        Plotly.newPlot('bubble', bubblechart, bubblechartlayout);}



  ))
}

function optionChanged(patientID) {
  console.log(patientID);
  buildCharts(patientID);
  demography(patientID);
}
buildCharts(940);

function demography(patientID) {

  var demobox = d3.select("#sample-metadata");
    const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
  d3.json(url).then(samplesData => {
      var metadata = samplesData.metadata
      var filmetadata = metadata.filter(bacteriaInfo => bacteriaInfo.id == patientID)[0]

      console.log(filmetadata)
      Object.entries(filmetadata).forEach(([key, value]) => {
          demobox.append("p").text(`${key}: ${value}`)
      })
  })
}


function Dashboard() {
  var dropdown = d3.select("#selDataset")
    const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

  d3.json(url).then(samplesData => {
      var patientIDs = samplesData.names;
      patientIDs.forEach(patientID => {
          dropdown.append("option").text(patientID).property("value", patientID)
      })
      buildCharts(patientIDs[0]);
      demography(patientIDs[0]);
  });
};

Dashboard();

