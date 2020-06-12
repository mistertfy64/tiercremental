//Generators
function purchaseTier1CashGenerator(amount){
    for (i = 1; i <= amount; i++){
        var cost = Decimal.floor(Decimal.pow(game.tier1CashGenerator.totalPurchased, game.tier1CashGenerator.costExponent));
    }
    if (game.cashBalance.greaterThanOrEqualTo(cost)){
        game.cashBalance = game.cashBalance.sub(cost);
        game.tier1CashGenerator.totalOwned = Decimal(game.tier1CashGenerator.totalOwned).add(1);
        game.tier1CashGenerator.totalPurchased = Decimal(game.tier1CashGenerator.totalPurchased).add(1);
    }  
}

function purchaseTier2CashGenerator(amount){
    for (i = 1; i <= amount; i++){
        var cost = Decimal.add(Decimal.floor(Decimal.pow(game.tier2CashGenerator.totalPurchased, game.tier2CashGenerator.costExponent)), 10000);
    }
    if (game.cashBalance.greaterThanOrEqualTo(cost)){
        game.cashBalance = game.cashBalance.sub(cost);
        game.tier2CashGenerator.totalOwned = Decimal(game.tier2CashGenerator.totalOwned).add(1);
        game.tier2CashGenerator.totalPurchased = Decimal(game.tier2CashGenerator.totalPurchased).add(1);
    }  
}