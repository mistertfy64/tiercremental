//Generators
var decimalPlaces = 3;
var numberFormattingMethod = "shortest";
window.setInterval(function(){
    updateElementsAndVariables();
}, 1);

function updateElementsAndVariables(){
    tier1CashGenerator.production = tier1CashGenerator.totalOwned * tier1CashGenerator.productionMultiplier1;
    tier2CashGenerator.production = tier2CashGenerator.totalOwned * 500 * tier1CashGenerator.productionMultiplier1;
    tier3CashGenerator.production = tier3CashGenerator.totalOwned * 777777 * tier1CashGenerator.productionMultiplier1;
    //Buttons
    //tier 1 cash
    var tier1CashGeneratorCost = Math.round(Math.pow(tier1CashGenerator.totalPurchased, 2.725));
    if (cashBalance >= tier1CashGeneratorCost){
        $("#tier-1-cash-generator-purchase-button").fadeTo(0, 1.0);
    } else {
        $("#tier-1-cash-generator-purchase-button").fadeTo(0, 0.3);
    }
    //tier 2 cash
    var tier2CashGeneratorCost = Math.round(Math.pow(tier2CashGenerator.totalPurchased, 5.425)) + 150000;
    if (cashBalance >= tier2CashGeneratorCost){
        $("#tier-2-cash-generator-purchase-button").fadeTo(0, 1.0);
    } else {
        $("#tier-2-cash-generator-purchase-button").fadeTo(0, 0.3);
    }
    //tier 3 cash
    var tier3CashGeneratorCost = Math.round(Math.pow(tier3CashGenerator.totalPurchased, 12.675)) + 333333333;
    if (cashBalance >= tier3CashGeneratorCost){
        $("#tier-3-cash-generator-purchase-button").fadeTo(0, 1.0);
    } else {
        $("#tier-3-cash-generator-purchase-button").fadeTo(0, 0.3);
    }
    document.getElementById("cash-balance").innerHTML = formatNumber(cashBalance);
    document.getElementById("token-balance").innerHTML = formatNumber(tokenBalance);

    document.getElementById("tier-1-cash-generators-production").innerHTML = formatNumber(tier1CashGenerator.production);
    document.getElementById("tier-1-cash-generator-cost").innerHTML = formatNumber(tier1CashGeneratorCost);
    document.getElementById("tier-2-cash-generators-production").innerHTML = formatNumber(tier2CashGenerator.production);
    document.getElementById("tier-2-cash-generator-cost").innerHTML = formatNumber(tier2CashGeneratorCost);
    document.getElementById("tier-3-cash-generators-production").innerHTML = formatNumber(tier3CashGenerator.production);
    document.getElementById("tier-3-cash-generator-cost").innerHTML = formatNumber(tier3CashGeneratorCost);
}

function formatNumber(number){
    if (numberFormattingMethod == "shortest"){
        var suffixes = ["", "k", "M", "B", "T", "q", "Q", "s", "S", "o", "n", "d", "u", "D", "Td", "qd", "Qd", "sd", "Sd", "od", "nd"];
        var tier = Math.log10(number) / 3 | 0;
        if (tier < 0 || tier > 20){
            return number.toFixed(decimalPlaces);
        } else {
            var suffix = suffixes[tier];
            var scale = Math.pow(10, tier * 3);
            var dividedByScale = number / scale;
            return dividedByScale.toFixed(decimalPlaces) + "" + suffix;
        }
    } else if (numberFormattingMethod == "short"){
        var suffixes = ["", "k", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "De", "Ud", "DD", "TD", "QaD", "QiD", "SxD", "SpD", "OcD", "NoD"];
        var tier = Math.log10(number) / 3 | 0;
        if (tier < 0 || tier > 20){
            return number.toFixed(decimalPlaces);
        } else {
            var suffix = suffixes[tier];
            var scale = Math.pow(10, tier * 3);
            var dividedByScale = number / scale;
            return dividedByScale.toFixed(decimalPlaces) + "" + suffix;
       }
    } else if (numberFormattingMethod == "long"){
        var suffixes = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion" , "nonillion", "decillion", "undecillion", "duodecillion", "tredecillion", "quattordecillion", "quindecillion", "sexdecillion", "septendecillion", "octodecillion", "novemdecillion"];
        var tier = Math.log10(number) / 3 | 0;
        if (tier < 0 || tier > 20){
            return number.toFixed(decimalPlaces);
        } else {
            var suffix = suffixes[tier];
            var scale = Math.pow(10, tier * 3);
            var dividedByScale = number / scale;
           return dividedByScale.toFixed(decimalPlaces) + " " + suffix;
        }
    } else if (numberFormattingMethod == "si"){
        var suffixes = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];
        var tier = Math.log10(number) / 3 | 0;
        if (tier < 0 || tier > 8){
            return number.toFixed(decimalPlaces);
        } else {
            var suffix = suffixes[tier];
            var scale = Math.pow(10, tier * 3);
            var dividedByScale = number / scale;
           return dividedByScale.toFixed(decimalPlaces) + "" + suffix;
        }
    } else {
        return number.toFixed(decimalPlaces);
    }
}