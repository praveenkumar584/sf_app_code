// ✅ Load XLSX
importScripts("https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js");
self.onmessage = function (e) {
    try
    {
        var data = new Uint8Array(e.data);
        var workbook = XLSX.read(data, { type: "array" });
        var sheets = workbook.SheetNames.map(function (name) {
            return { sheetName: name };
        });
        var worksheets = {};
        workbook.SheetNames.forEach(function (sheetName) {
            worksheets[sheetName] = workbook.Sheets[sheetName];
        });
        self.postMessage({
            success: true,
            sheets: sheets,
            worksheets: worksheets
        });
    }
    catch (err)
    {
        self.postMessage({
            success: false,
            error: err.message
        });
    }
};