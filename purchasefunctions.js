//Generators
//Cash    

function purchaseTier1CashGenerator(amount){
    for (i = 1; i <= amount; i++){
        var tier1CashGeneratorCost = Math.round(Math.pow(tier1CashGenerator.totalPurchased, 2.725)); 
    }
    if (cashBalance >= tier1CashGeneratorCost){
        cashBalance = cashBalance - tier1CashGeneratorCost;
        tier1CashGenerator.totalOwned = tier1CashGenerator.totalOwned + 1;
        tier1CashGenerator.totalPurchased = tier1CashGenerator.totalPurchased + 1;
    }
    var tier1CashGeneratorCost = Math.floor(Math.pow(tier1CashGenerator.totalPurchased, 2.725)); 
    document.getElementById("tier-1-cash-generators-owned").innerHTML = tier1CashGenerator.totalOwned;
}

function purchaseTier2CashGenerator(amount){
    for (i = 1; i <= amount; i++){
        var tier2CashGeneratorCost = Math.round(Math.pow(tier2CashGenerator.totalPurchased, 5.425)) + 150000; 
    }
    if (cashBalance >= tier2CashGeneratorCost){
        cashBalance = cashBalance - tier2CashGeneratorCost;
        tier2CashGenerator.totalOwned = tier2CashGenerator.totalOwned + 1;
        tier2CashGenerator.totalPurchased = tier2CashGenerator.totalPurchased + 1;
    }
    var tier2CashGeneratorCost = Math.floor(Math.pow(tier2CashGenerator.totalPurchased, 5.425)) + 150000; 
    document.getElementById("tier-2-cash-generators-owned").innerHTML = tier2CashGenerator.totalOwned;
}

function purchaseTier3CashGenerator(amount){
    for (i = 1; i <= amount; i++){
        var tier3CashGeneratorCost = Math.round(Math.pow(tier3CashGenerator.totalPurchased, 12.675)) + 333333333; 
    }
    if (cashBalance >= tier3CashGeneratorCost){
        cashBalance = cashBalance - tier3CashGeneratorCost;
        tier3CashGenerator.totalOwned = tier3CashGenerator.totalOwned + 1;
        tier3CashGenerator.totalPurchased = tier3CashGenerator.totalPurchased + 1;
    }
    var tier3CashGeneratorCost = Math.floor(Math.pow(tier3CashGenerator.totalPurchased, 12.675)) + 333333333; 
    document.getElementById("tier-3-cash-generators-owned").innerHTML = tier3CashGenerator.totalOwned;
}
//Tokens

function purchaseTier1TokenGenerator(amount){
    for (i = 1; i <= amount; i++){
        var tier1TokenGeneratorCost = Math.pow(tier1TokenGenerator.totalPurchased / 5, 12.65) + 15;
    }
    if (tokenBalance >= tier1TokenGeneratorCost){
        tokenBalance = tokenBalance - tier1TokenGeneratorCost;
        tier1TokenGenerator.totalOwned = tier1TokenGenerator.totalOwned + 1;
        tier1TokenGenerator.totalPurchased = tier1TokenGenerator.totalPurchased + 1;
    }
    var tier1TokenGeneratorCost = Math.pow(tier1TokenGenerator.totalPurchased / 5, 12.65) + 15;
    document.getElementById("cash-balance").innerHTML = cashBalance;
    document.getElementById("tier-1-token-generators-owned").innerHTML = tier1TokenGenerator.totalOwned;
    document.getElementById("tier-1-token-generator-cost").innerHTML = tier1TokenGeneratorCost;
}
//Upgrades

//Misc