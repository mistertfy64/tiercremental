var decimalPlacesSlider = document.getElementById("decimal-places-slider");
var output = document.getElementById("decimal-places");
var numberFormattingMethod = "shortest";
var decimalPlaces = 3;
output.innerHTML = decimalPlacesSlider.value;
decimalPlacesSlider.oninput = function() {
    output.innerHTML = this.value;
    decimalPlaces = this.value;
}

function switchNumberFormattingMethod(currentNumberFormattingMethod){
    if (numberFormattingMethod == "shortest"){
            numberFormattingMethod = "short";
            document.getElementById("number-formatting-method").innerHTML = "Short";
    } else if (numberFormattingMethod == "short"){
            numberFormattingMethod = "long";
            document.getElementById("number-formatting-method").innerHTML = "Long";
    } else if (numberFormattingMethod == "long"){
            numberFormattingMethod = "si";
            document.getElementById("number-formatting-method").innerHTML = "SI";
    } else if (numberFormattingMethod == "si"){
            numberFormattingMethod = "none";
            document.getElementById("number-formatting-method").innerHTML = "None";
    } else if (numberFormattingMethod == "none"){
            numberFormattingMethod = "shortest";
            document.getElementById("number-formatting-method").innerHTML = "Shortest";
    }
}

function saveToFile1(){
        var saveFile1 = {
                cashBalance: cashBalance,
                tokenBalance: tokenBalance,
                tier1CashGenerator: tier1CashGenerator,
                tier2CashGenerator: tier2CashGenerator,
                tier3CashGenerator: tier3CashGenerator,
                tier1TokenGenerator: tier1TokenGenerator
        }
        localStorage.setItem("saveFile1",JSON.stringify(saveFile1));
}

function loadFromFile1(){
        var saveFile = JSON.parse(localStorage.getItem("saveFile1"));
        if (typeof saveFile.cashBalance !== "undefined") cashBalance = saveFile.cashBalance;
        if (typeof saveFile.tokenBalance !== "undefined") tokenBalance = saveFile.tokenBalance;
        if (typeof saveFile.tier1CashGenerator !== "undefined") tier1CashGenerator = saveFile.tier1CashGenerator;
        if (typeof saveFile.tier2CashGenerator !== "undefined") tier2CashGenerator = saveFile.tier2CashGenerator;
        if (typeof saveFile.tier3CashGenerator !== "undefined") tier3CashGenerator = saveFile.tier3CashGenerator;
        if (typeof saveFile.tier1TokenGenerator !== "undefined") tier1TokenGenerator = saveFile.tier1TokenGenerator;

}
