function checkAndFixMultipliers(idToCheck){
    for (i = 0; i <= idToCheck.length - 1; i++){
        if (idToCheck[i] == undefined){
            idToCheck[i] = new Decimal("1");
        }
    }
}



setTimeout(typesetAllMath, 1000);

function typesetAllMath(){
    var toReplace = MathJax.Hub.getAllJax("main-tier-1-cash-generator-multiplier-1")[0];
    MathJax.Hub.Queue(["Text",toReplace,"Multiplier_{Main_{Cash_{Tier1_{1}}}} = " + game.mainMultipliers.tier1CashGenerator[0]]);
}

function typesetMath(whatToTypeset, whatToTypesetTo){
    var toReplace = MathJax.Hub.getAllJax(whatToTypeset)[0];
    MathJax.Hub.Queue(["Text",toReplace,whatToTypesetTo]);
}