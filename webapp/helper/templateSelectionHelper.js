sap.ui.define([], function () {
    "use strict";
    return {
        getSelectedRadioButton: function (oEvent)
        {
            var oGroup = oEvent.getSource();
            var iIndex = oEvent.getParameter("selectedIndex");
            if (iIndex === -1)
            {
                return null;
            }
            var oButton=oGroup.getButtons()[iIndex];
            if (!oButton)
            {
                return null;
            }
            return oButton.getId().split("--").pop();
        }
    };
});