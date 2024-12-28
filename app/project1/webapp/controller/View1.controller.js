sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "./Formatter",
    "sap/m/MessageToast",
    "sap/ui/core/BusyIndicator",
], (Controller,Formatter,MessageToast,BusyIndicator) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {

        formatter: Formatter,

        onInit() {
            console.log("setting up app")
        },
        onBookPress: function (oEvent) {
            const selectedID = oEvent.getSource().getBindingContext().getObject().ID;

			// Define the action and parameters
            const sAction =  `/odata/v4/catalog/getExternalHash(productID=${selectedID})`; // Action name
            BusyIndicator.show();
            $.ajax({
                url: sAction,
                method: "GET",
                async: true,
                success: function (data) {
                    BusyIndicator.hide();
                    MessageToast.show(`Book Public Encrypted Data: ${data.value.encryptedData}\nIV: ${data.value.iv}`);
                },
                error: function (error) {
                    BusyIndicator.hide();
                    MessageToast.show("Error: " + error.message);
                    //alert(error);
                }
            });
      
		}
    });
});