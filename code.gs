function onOpen() {
  SpreadsheetApp.getUi().createMenu("JSON").addItem("Show JSON","showJSON").addToUi();
}

function showJSON() {
  SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutputFromFile("JSON").setHeight(1000).setWidth(1200), "View")   
}

function getJSON() {
  var r = SpreadsheetApp.getActiveRange().getValue();
  return JSON.parse(r);
}
