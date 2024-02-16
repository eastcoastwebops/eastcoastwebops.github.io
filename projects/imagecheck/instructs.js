var instructs="Please format the image urls to <b></b>use www </b> instead of translated \"frca\" etc. <br/>This is partly to verifiy origin images are also valid.Like the translated servers.., all translated image urls below (and all Load balance variation) are then built from the origin URL<br/><br/><b>EXAMPLE FORMAT</b> - ( www not fr )  Separation by line, space, or comma is ok. Other characters not allowed at this time. <br/><br/><i>Sample Images</i><br/>Drop in your own list..., click Load images one time...  <br/>All Translated versions are automatically built across ALL languages. ... No need to re-load for each languages";
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