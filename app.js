console.log("Hello DS10! 🐱‍🐉");
let viz;

// Create a variable to store the URL
const url =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";
// Create a variable to store the dashboard options
const options = {
  device: "desktop",
};
//Create a variable to store the vizContainer
const vizContainer = document.getElementById("vizContainer");
//Create a variable to showViZ butoon
const showVizButton = document.getElementById("showViz");
//Create a variable to hideViZ butoon
const hideVizButton = document.getElementById("hideViz");
// Create a function that shows the dashboard
function initViz() {
  console.log("Hello!");

  viz = new tableau.Viz(vizContainer, url, options);
}
function showViz() {
  viz.show();
}
function hideViz() {
  viz.hide();
}

showVizButton.addEventListener("click", showViz);
hideVizButton.addEventListener("click", hideViz);

//Create variables for PDF PPT Buttons
const exportPDFbutton = document.getElementById("exportPDF");
const exportPPTbutton = document.getElementById("exportPPT");

//
function exportPDFfunction() {
  viz.showExportPDFDialog();
}

function exportPPTfunction() {
  viz.showExportPowerPointDialog();
}

//create event listeners for the buttons PPT and PDF
exportPDFbutton.addEventListener("click", exportPDFfunction);
exportPPTbutton.addEventListener("click", exportPPTfunction);
document.addEventListener("DOMContentLoaded", initViz);
// function on getting the range values and applying them to sheets
function getRangeValues() {
  //get values from min and max
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  //get the workbook object
  const workbook = viz.getWorkbook();
  const activesheet = workbook.getActiveSheet();
  const sheets = activesheet.getWorksheets();
  const sheetToFilter = sheets[1];
  sheetToFilter.applyRangeFilterAsync("SUM(Sales)", {
    min: minValue,
    max: maxValue,
  });
  console.log("getrangevalues applied");
}

document
  .getElementById("applybutton")
  .addEventListener("click", getRangeValues);
