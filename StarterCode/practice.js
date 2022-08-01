//Use the D3 library to read in `samples.json` from the provided url and create a horizontal bar chart
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
d3.json(url).then((sampleData) =>{
    let samples = sampleData.sample
    let metadata = sampleData.metadata
    let filteredMetadata = metadata.filter(bacteriaInfo => bacteriaInfo.id == patientID)[0]
    let filteredSampledata =  samples.filter(bacteriaInfo => bacteriaInfo.id == patientID)[0]
    let sampleInfo = filteredSampledata.sampleInfo

    let otu_ids = filteredSampledata.otu_ids
    let otu_labels = filteredSampledata.otu_labels

    // Create a horizontal bar chart with dropdown menu  to show the top ten OTUS in that individual
    var tracebar = [{
        x: sampleInfo.slice(0,10).reverse(),
        y: otu_ids.slice(0, 10).map(item => `OTU${item}`).reverse(),
        text: otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h",
        marker:{color: rgb(120, 205, 10)


    },
}]
    var layout = {
    title: "top 10 OTU"
}; Plotly.newPlot('barchartplot', bartracedata, bubblelayout)};

[{
          x: otu_ids,
          y: sample_values,
          text: otu_labels,
          mode: 'markers',
          marker: {
            color: otu_ids,
            size: sample_values,
            colorscale: 'Earth'
          }
  }];

        var layout = {
                    title: 'Marker Size',
                    showlegend: false,
                    height: 600,
                    width: 60


            //working codes barchart

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
      Plotly.newPlot('barchartplot', bartracedata, layout);}




  ))
}
buildCharts(940);