var input = document.getElementById("numip");
var button = document.getElementById("btn");
var enteredTicketNumber;
var flag = true;

//Base URL Configuration
var urlConfiguration = "https://thingworx.jira.com/browse/TW-";

// If the user presses the "Search" button
button.addEventListener("click", function () {
    var ticketNum = validateInput(input);
    var url = urlConfiguration.concat(ticketNum);

    if (flag && ticketNum != undefined) {
        window.open(url, '_blank');
    }
});

// If the user presses the "Enter" key on the keyboard
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn").click();
    }
});

// Checks for not null values and only numbers
function validateInput(ip) {

    var processedInput = ip.value.trim();
    clearWarning("warning");

    if (processedInput === "" || processedInput == null) {
        setError("warning", "Ticket Number should not be empty")
        flag = false; // Validation failed 
        return processedInput;
    }
    if (!(/^\d+$/.test(processedInput))) {
        setError("warning", "Ticket Number should only contain numbers")
        flag = false; // Validation failed
        return processedInput;
    }
    return processedInput;
}

// Sets the error message on UI
function setError(id, message) {
    document.getElementById(id).innerHTML += message;
}

// Clear the previous warnings at each validation check
function clearWarning(id) {
    flag = true;
    document.getElementById(id).innerHTML = "";
}

document.addEventListener('DOMContentLoaded', function () {
    input.focus();
});