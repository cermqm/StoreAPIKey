function writeinput() {

    // Adding input box
    var textInput = $("<h3>").text("Enter API Key").attr({ id: "textInput", float: "left", size: "30" }).addClass("textInput");
    var APIInput = $("<input>").attr({ id: "APIInputid", float: "left", size: "40" }).addClass("border border-secondary rounded-lg input");
    // Adding save button
    var StoreAPI = $("<button>").attr({ id: "storeAPI" }).addClass("border border-secondary rounded-lg button fa fa-floppy-o fa-2x StoreAPI");
    // // Creating a div container for these 3 items...
    var container = $("<div>").attr({ id: "container", style: "font-size: 2vw" });
    container.append(textInput, APIInput, StoreAPI);
    $("#startdiv").append(container);
}

// function to save APIKey to local storage...
function saveAPI(inputtext) {
    localStorage.setItem("APIKey", inputtext);
}

// function to save todo to local storage...
function retrieveAPI() {
    var inputtext = localStorage.getItem("APIKey");
    if (inputtext !== null) {
        $("#APIInputid").val(inputtext);
        console.log("inputtext = " + inputtext);
    }
}

writeinput();
retrieveAPI();

// event listener for search button
$("#storeAPI").on("click", function() {
    var inputtext = $("#APIInputid").val();
    saveAPI(inputtext);
});