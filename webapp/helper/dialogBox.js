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
        showProcessDialog: function (oController)
        {
            if (!oController.oDialog)
            {
                oController.oDialog = new Dialog({
                    title: "Confirmation for Codification",
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
                                    text: "No errors were found during validation.",
                                    level: "H3"
                                }).addStyleClass("sapUiSmallMarginBottom"),

                                new Icon({
                                    src: "sap-icon://accept",
                                    size: "3rem",
                                    color: "#2ecc71"
                                }).addStyleClass("sapUiSmallMarginBottom"),
                                new Text({
                                    text: "Do you want to proceed with codification?\n Please confirm to continue.",
                                    textAlign: "Center"
                                })
                            ]
                        })
                    ],
                    beginButton: new Button({
                        text: "Start Codification",
                        type: "Emphasized",
                        press: function () {
                            oController.startCodification();
                            oController.oDialog.close();
                        }
                    }),
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