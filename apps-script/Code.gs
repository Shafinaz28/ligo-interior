function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  SpreadsheetApp.getActive().getSheetByName("Leads").appendRow([
    new Date(),
    data.name || "",
    data.phone || "",
    data.email || "",
    data.address || "",
    data.service || "",
    data.whatsapp || "",
    data.page || ""
  ]);
  return ContentService.createTextOutput("ok");
}
