
function displayDateTime() {
    var now = new Date();
    var datetimeStr = now.toLocaleDateString() + " " + now.toLocaleTimeString();
    document.getElementById('datetime').textContent = datetimeStr;
}

setInterval(displayDateTime, 1000); 
