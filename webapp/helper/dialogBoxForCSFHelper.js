sap.ui.define([
    "sap/m/Dialog",
    "sap/m/Text",
    "sap/m/Button",
    "sap/m/VBox",
    "sap/ui/core/Icon",
    "sap/m/Title"
], function (Dialog, Text, Button, VBox, Icon,Title) {
    "use strict";
    return {
        showProcessDialogForCSF: function (oController)
        {
            if (!oController.oDialog)
            {
                oController.oDialog = new Dialog({
                    title: "Validation Successful for CSF Template",
                    type: "Message",
                    contentWidth: "350px",
                    contentHeight: "150px",
                    content: [
                        new VBox({
                            alignItems: "Center",
                            justifyContent: "Center",
                            height: "100%",
                            items: [
                                new Icon({
                                    src: "sap-icon://accept",
                                    size: "3rem",
                                    color: "#2ecc71"
                                }).addStyleClass("sapUiSmallMarginBottom"),
                                new Title({
                                    text: "No Errors Found During Validation",
                                    level: "H3"
                                }).addStyleClass("sapUiSmallMarginBottom")
                            ]
                        })
                    ],
                    endButton: new Button({
                        text: "Cancel",
                        press: function () {
                            oController.oDialog.close();
                        }
                    })
                });
            }
            oController.oDialog.open();
        }
    };
});