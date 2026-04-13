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
        showCodificationResults: function (oController)
        {
            if (!oController._oErrorDialog)
            {
                oController._oErrorDialog = new Dialog({
                    title: "Errors found during Codification",
                    titleAlignment: "Center",
                    alignItems: "Center",
                    justifyContent: "Center",
                    type: "Message",
                    contentWidth: "400px",
                    contentHeight: "200px",
                    content: [
                        new VBox({
                            alignItems: "Center",
                            justifyContent: "Center",
                            height: "100%",
                            items: [
                                new Title({
                                    text: "Fix errors to continue",
                                    level: "H3"
                                }).addStyleClass("sapUiSmallMarginBottom"),

                                new Icon({
                                    src: "sap-icon://error",
                                    size: "3rem",
                                    color: "#e74c3c"
                                }).addStyleClass("sapUiSmallMarginBottom"),
                                new Text({
                                    text: "Errors have been detected in the file. Please correct them and proceed again.",
                                    textAlign: "Center"
                                })
                            ]
                        })
                    ],
                    beginButton: new Button({
                        text: "Download",
                        type: "Emphasized",
                        press: function () {
                            oController.downloadCodificationErrors();
                            oController._oErrorDialog.close();
                        }
                    })
                });
            }
            oController._oErrorDialog.open();
        }
    };
});