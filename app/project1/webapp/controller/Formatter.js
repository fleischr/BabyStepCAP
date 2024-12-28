sap.ui.define([
	"sap/ui/core/library"
], function(coreLibrary) {
	"use strict";

	const {ValueState} = coreLibrary;

	const Formatter = {
		status(sStatus) {
				if (sStatus == 0) {
					return ValueState.Success;
				} else if (sStatus == 1) {
					return ValueState.Warning;
				} else if (sStatus == 2){
					return ValueState.Error;
				} else {
					return ValueState.None;
				}
		}
	};

	return Formatter;
});
