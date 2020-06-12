//Elements + Variables

window.setInterval(function(){
    document.getElementById("cash-balance").innerHTML = game.cashBalance;
    document.getElementById("token-balance").innerHTML = game.tokenBalance;

    document.getElementById("tier-1-cash-generators-owned").innerHTML = Decimal(game.tier1CashGenerator.totalOwned);
    document.getElementById("tier-1-cash-generator-cost").innerHTML = Decimal.floor(Decimal.pow(game.tier1CashGenerator.totalPurchased, game.tier1CashGenerator.costExponent));
    document.getElementById("tier-1-cash-generators-purchased").innerHTML = Decimal(game.tier1CashGenerator.totalPurchased);
    document.getElementById("tier-1-cash-generators-generated").innerHTML = Decimal(game.tier1CashGenerator.totalGenerated);
    document.getElementById("tier-1-cash-generators-total-production").innerHTML = Decimal(game.tier1CashGenerator.totalProduction);

    document.getElementById("tier-2-cash-generators-owned").innerHTML = Decimal(game.tier2CashGenerator.totalOwned);
    document.getElementById("tier-2-cash-generator-cost").innerHTML = (Decimal.floor(Decimal.pow(game.tier2CashGenerator.totalPurchased, game.tier2CashGenerator.costExponent)).plus(10000));
    document.getElementById("tier-2-cash-generators-purchased").innerHTML = Decimal(game.tier2CashGenerator.totalPurchased);
    document.getElementById("tier-2-cash-generators-generated").innerHTML = Decimal(game.tier2CashGenerator.totalGenerated);
    document.getElementById("tier-2-cash-generators-total-production").innerHTML = Decimal(game.tier2CashGenerator.totalProduction);

    game.tier1CashGenerator.totalProduction = Decimal(game.tier1CashGenerator.totalOwned);
    game.tier2CashGenerator.totalProduction = Decimal(game.tier2CashGenerator.totalOwned);
}, 10)