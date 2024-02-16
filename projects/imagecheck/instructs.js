var instructs="For now... Please format the image urls to <b></b>use www </b> instead of translated \"frca\" etc. <br/> Separation by line, space, or comma is ok.<br/><br/><i>Sample Images</i>";
var codekey="USD: Korean, Japanese, Spanish Universal<br>EUR: Polish, German, Italian, Spanish Castilian, French Continental<br>CAD: French Canadian<br/>MXN: Spanish Universal";

var jumps = "<select id='jumpDropdown'>" +
                "<option value=''>Choose Market</option>" +
                "<option value='imagecheck3.html'>Check ALL markets</option>" +
                "<option value='imagecheck_EUR.html'>ONLY EUR</option>" +
                "<option value='imagecheck_USD.html'>ONLY USD</option>" +
                "<option value='imagecheck_CAD.html'>ONLY CAD</option>" +
                "<option value='imagecheck_MXN.html'>ONLY MXN</option>" +
             "</select>";
var market="";
function setupContentAndDropdown(contentId, jumpId, instructs, jumps) {
    // Create a new div element for content
    var contentContainer = document.getElementById(contentId);
   if (market !== "eur" && market !== "usd" && market !== "cad" && market !== "mxn") {
    contentContainer.innerHTML += instructs;
}

    // Create a new div element for the dropdown
    var jumpContainer = document.getElementById(jumpId);
    jumpContainer.innerHTML += jumps;

    // Add event listener to handle dropdown selection change
    document.getElementById('jumpDropdown').addEventListener('change', function() {
        // Get the selected value
        var selectedValue = this.value;
        
        // Redirect to the selected page
        window.location.href = selectedValue;
    });
}
