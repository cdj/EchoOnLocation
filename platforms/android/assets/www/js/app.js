var currentPosition = null;
var watchID = null;

// Submit message
function submitMessage() {
	// use whatever coords available
	// currentPosition
	// if (currentPosition!===null) {
	// 	// ajax
	// }
    // position.coords.latitude
    // position.coords.longitude
    // position.coords.altitude
    // position.coords.accuracy
}

// Get message
function getMessage() {
	// send coords, server sends matching messages
}

// wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);


// device APIs are available
//
function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    // Throw an error if no update is received every 30 seconds
    var options = { timeout: 30000 };
    watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
}

// Display `Position` properties from the geolocation
//
function onSuccess(position) {
    currentPosition = position;
    $("#leaveMessageButton").removeAttr("disabled");
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

// Button handlers

$("#LeaveMessageButton").click(function() {
	$(".uiView").addClass("hidden");
	$("#leaveMessageView").removeClass("hidden");
});

$("#ReadMessageButton").click(function() {
	if($("#ReadMessageButton").attr("disabled") !== "disabled") {
		$(".uiView").addClass("hidden");
		$("#retrieveMessageView").removeClass("hidden");
	}
});

$(".backButton").click(function() {
	$(".uiView").addClass("hidden");
	$("#mainView").removeClass("hidden");
});