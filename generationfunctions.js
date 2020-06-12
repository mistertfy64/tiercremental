window.setInterval(function(){
    generateFromTier1CashGenerators();
    generateFromTier2CashGenerators();
}, 1000);

function generateFromTier1CashGenerators(){
    game.cashBalance = Decimal.add(game.cashBalance, game.tier1CashGenerator.totalProduction);
}

function generateFromTier2CashGenerators(){
    game.tier1CashGenerator.totalOwned = Decimal.add(game.tier1CashGenerator.totalOwned, game.tier2CashGenerator.totalProduction);
    game.tier1CashGenerator.totalGenerated = Decimal.add(game.tier1CashGenerator.totalGenerated, game.tier2CashGenerator.totalProduction);
}