//1) Use the D3 library to read in samples.json from the URL
function buildCharts(patientID) {
  const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
  d3.json(url).then((samplesData => {
    let samples = samplesData.samples;
    let metadata = samplesData.metadata;
    let filmetadata = metadata.filter(bacteriaInfo => bacteriaInfo.id == patientID)[0];
    let filSample = samples.filter(bacteriaInfo => bacteriaInfo.id == patientID)[0];
    let sample_values = filSample.sample_values;
    let otu_ids = filSample.otu_ids;
    let otu_labels = filSample.otu_labels;
    console.log("a");
  }
    //2) Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    //   var bartracedata = [{
    //     x: sample_values.slice(0, 10).reverse(),
    //     y: otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse(),
    //     text: otu_labels.slice(0, 10).reverse(),
    //     type: 'bar',
    //     orientation: 'h',
    //     marker: {
    //       color: 'rgb(120, 205, 10)'
    //     },
    //   }]
    //   var layout = {
    //     title: "Top 10 OTU",
    //   };
    //   Plotly.newPlot('barchartplot', bartracedata, layout);
  ))
}