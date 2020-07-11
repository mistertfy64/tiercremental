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
        var cost = Decimal.add(Decimal.floor(Decimal.pow(game.tier2CashGenerator.totalPurchased, game.tier2CashGenerator.costExponent)), game.tier2CashGenerator.costAddend);
    }
    if (game.cashBalance.greaterThanOrEqualTo(cost)){
        game.cashBalance = game.cashBalance.sub(cost);
        game.tier2CashGenerator.totalOwned = Decimal(game.tier2CashGenerator.totalOwned).add(1);
        game.tier2CashGenerator.totalPurchased = Decimal(game.tier2CashGenerator.totalPurchased).add(1);
    }  
}

function purchaseTier3CashGenerator(amount){
    for (i = 1; i <= amount; i++){
        var cost = Decimal.add(Decimal.floor(Decimal.pow(game.tier3CashGenerator.totalPurchased, game.tier3CashGenerator.costExponent)), game.tier3CashGenerator.costAddend);
    }
    if (game.cashBalance.greaterThanOrEqualTo(cost)){
        game.cashBalance = game.cashBalance.sub(cost);
        game.tier3CashGenerator.totalOwned = Decimal(game.tier3CashGenerator.totalOwned).add(1);
        game.tier3CashGenerator.totalPurchased = Decimal(game.tier3CashGenerator.totalPurchased).add(1);
    }  
}

function purchaseTier4CashGenerator(amount){
    for (i = 1; i <= amount; i++){
        var cost = Decimal.add(Decimal.floor(Decimal.pow(game.tier4CashGenerator.totalPurchased, game.tier4CashGenerator.costExponent)), game.tier4CashGenerator.costAddend);
    }
    if (game.cashBalance.greaterThanOrEqualTo(cost)){
        game.cashBalance = game.cashBalance.sub(cost);
        game.tier4CashGenerator.totalOwned = Decimal(game.tier4CashGenerator.totalOwned).add(1);
        game.tier4CashGenerator.totalPurchased = Decimal(game.tier4CashGenerator.totalPurchased).add(1);
    }  
}

function purchaseTier5CashGenerator(amount){
    for (i = 1; i <= amount; i++){
        var cost = Decimal.add(Decimal.floor(Decimal.pow(game.tier5CashGenerator.totalPurchased, game.tier5CashGenerator.costExponent)), game.tier5CashGenerator.costAddend);
    }
    if (game.cashBalance.greaterThanOrEqualTo(cost)){
        game.cashBalance = game.cashBalance.sub(cost);
        game.tier5CashGenerator.totalOwned = Decimal(game.tier5CashGenerator.totalOwned).add(1);
        game.tier5CashGenerator.totalPurchased = Decimal(game.tier5CashGenerator.totalPurchased).add(1);
    }  
}

function purchaseTier6CashGenerator(amount){
    for (i = 1; i <= amount; i++){
        var cost = Decimal.add(Decimal.floor(Decimal.pow(game.tier6CashGenerator.totalPurchased, game.tier6CashGenerator.costExponent)), game.tier6CashGenerator.costAddend);
    }
    if (game.cashBalance.greaterThanOrEqualTo(cost)){
        game.cashBalance = game.cashBalance.sub(cost);
        game.tier6CashGenerator.totalOwned = Decimal(game.tier6CashGenerator.totalOwned).add(1);
        game.tier6CashGenerator.totalPurchased = Decimal(game.tier6CashGenerator.totalPurchased).add(1);
    }  
}

function purchaseTier7CashGenerator(amount){
    for (i = 1; i <= amount; i++){
        var cost = Decimal.add(Decimal.floor(Decimal.pow(game.tier7CashGenerator.totalPurchased, game.tier7CashGenerator.costExponent)), game.tier7CashGenerator.costAddend);
    }
    if (game.cashBalance.greaterThanOrEqualTo(cost)){
        game.cashBalance = game.cashBalance.sub(cost);
        game.tier7CashGenerator.totalOwned = Decimal(game.tier7CashGenerator.totalOwned).add(1);
        game.tier7CashGenerator.totalPurchased = Decimal(game.tier7CashGenerator.totalPurchased).add(1);
    }  
}

function purchaseTier8CashGenerator(amount){
    for (i = 1; i <= amount; i++){
        var cost = Decimal.add(Decimal.floor(Decimal.pow(game.tier8CashGenerator.totalPurchased, game.tier8CashGenerator.costExponent)), game.tier8CashGenerator.costAddend);
    }
    if (game.cashBalance.greaterThanOrEqualTo(cost)){
        game.cashBalance = game.cashBalance.sub(cost);
        game.tier8CashGenerator.totalOwned = Decimal(game.tier8CashGenerator.totalOwned).add(1);
        game.tier8CashGenerator.totalPurchased = Decimal(game.tier8CashGenerator.totalPurchased).add(1);
    }  
}

function purchaseTier9CashGenerator(amount){
    for (i = 1; i <= amount; i++){
        var cost = Decimal.add(Decimal.floor(Decimal.pow(game.tier9CashGenerator.totalPurchased, game.tier9CashGenerator.costExponent)), game.tier9CashGenerator.costAddend);
    }
    if (game.cashBalance.greaterThanOrEqualTo(cost)){
        game.cashBalance = game.cashBalance.sub(cost);
        game.tier9CashGenerator.totalOwned = Decimal(game.tier9CashGenerator.totalOwned).add(1);
        game.tier9CashGenerator.totalPurchased = Decimal(game.tier9CashGenerator.totalPurchased).add(1);
    }  
}

function purchaseTier10CashGenerator(amount){
    for (i = 1; i <= amount; i++){
        var cost = Decimal.add(Decimal.floor(Decimal.pow(game.tier10CashGenerator.totalPurchased, game.tier10CashGenerator.costExponent)), game.tier10CashGenerator.costAddend);
    }
    if (game.cashBalance.greaterThanOrEqualTo(cost)){
        game.cashBalance = game.cashBalance.sub(cost);
        game.tier10CashGenerator.totalOwned = Decimal(game.tier10CashGenerator.totalOwned).add(1);
        game.tier10CashGenerator.totalPurchased = Decimal(game.tier10CashGenerator.totalPurchased).add(1);
    }  
}
//Upgrade Functions

function purchaseMainMultiplierUpgrade(tierAndCurrency, number){
    switch (tierAndCurrency){
        case "tier1CashGenerator" :
            {
                switch (number){
                    case 1:
                        {
                            if (game.cashBalance.greaterThanOrEqualTo(game.mainMultipliersPrices.tier1CashGeneratorMultiplier1)){
                                game.cashBalance = Decimal.sub(game.cashBalance, game.mainMultipliersPrices.tier1CashGeneratorMultiplier1);
                                game.mainMultipliers.tier1CashGenerator[0] = Decimal.add(game.mainMultipliers.tier1CashGenerator[0], "1");
                                typesetMath("main-tier-1-cash-generator-multiplier-1", "Multiplier_{Main_{Cash_{Tier1_{1}}}} = " + game.mainMultipliers.tier1CashGenerator[0])
                            }
                        }
                }
            }
    }
}