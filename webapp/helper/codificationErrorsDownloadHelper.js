sap.ui.define([], function () {
    "use strict";
    return {
        downloadExcelErrors: async function (aData,that)
        {
            try
            {
                sap.ui.core.BusyIndicator.show(0);
                if (!aData || !aData.length)
                {
                    sap.m.MessageToast.show("No Data Available to Download.");
                    sap.ui.core.BusyIndicator.hide();
                    return;
                }
                var workbook = XLSX.utils.book_new();
                const reorderedList = aData.map(function (item)
                {
                    var copy = Object.assign({}, item);
                    delete copy.__metadata;
                    delete copy.RuleFieldID;
                    return copy
                });
                var worksheet=XLSX.utils.json_to_sheet(reorderedList);
                XLSX.utils.book_append_sheet(workbook, worksheet, "Error Log");
                const excelBinary = XLSX.write(workbook, {
                    bookType: "xlsx",
                    type: "array",
                    cellStyles: true 
                });
                const blob = new Blob([excelBinary], {
                    type: "application/octet-stream"
                });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "CodificationErrors.xlsx";
                a.click();
                URL.revokeObjectURL(url);
                sap.ui.core.BusyIndicator.hide();
                sap.m.MessageToast.show("Error log for codification downloaded successfully.");
                //that.byId("_IDGenButton8").setVisible(false);  
            }
            catch (error)
            {
                console.error(error);
                sap.ui.core.BusyIndicator.hide();
                sap.m.MessageBox.error("Error generating Excel file");
            }
        }
    };
});