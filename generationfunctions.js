window.setInterval(function(){
    generateFromTier1CashGenerators();
    generateFromTier2CashGenerators();
    generateFromTier3CashGenerators();
    generateFromTier4CashGenerators();
    generateFromTier5CashGenerators();
    generateFromTier6CashGenerators();
    generateFromTier7CashGenerators();
    generateFromTier8CashGenerators();
    generateFromTier9CashGenerators();
    generateFromTier10CashGenerators();
}, 1000);

function generateFromTier1CashGenerators(){
    game.cashBalance = Decimal.add(game.cashBalance, game.tier1CashGenerator.totalProduction);
}

function generateFromTier2CashGenerators(){
    game.tier1CashGenerator.totalOwned = Decimal.add(game.tier1CashGenerator.totalOwned, game.tier2CashGenerator.totalProduction);
    game.tier1CashGenerator.totalGenerated = Decimal.add(game.tier1CashGenerator.totalGenerated, game.tier2CashGenerator.totalProduction);
}

function generateFromTier3CashGenerators(){
    game.tier2CashGenerator.totalOwned = Decimal.add(game.tier2CashGenerator.totalOwned, game.tier3CashGenerator.totalProduction);
    game.tier2CashGenerator.totalGenerated = Decimal.add(game.tier2CashGenerator.totalGenerated, game.tier3CashGenerator.totalProduction);
}

function generateFromTier4CashGenerators(){
    game.tier3CashGenerator.totalOwned = Decimal.add(game.tier3CashGenerator.totalOwned, game.tier4CashGenerator.totalProduction);
    game.tier3CashGenerator.totalGenerated = Decimal.add(game.tier3CashGenerator.totalGenerated, game.tier4CashGenerator.totalProduction);
}

function generateFromTier5CashGenerators(){
    game.tier4CashGenerator.totalOwned = Decimal.add(game.tier4CashGenerator.totalOwned, game.tier5CashGenerator.totalProduction);
    game.tier4CashGenerator.totalGenerated = Decimal.add(game.tier4CashGenerator.totalGenerated, game.tier5CashGenerator.totalProduction);
}

function generateFromTier6CashGenerators(){
    game.tier5CashGenerator.totalOwned = Decimal.add(game.tier5CashGenerator.totalOwned, game.tier6CashGenerator.totalProduction);
    game.tier5CashGenerator.totalGenerated = Decimal.add(game.tier5CashGenerator.totalGenerated, game.tier6CashGenerator.totalProduction);
}

function generateFromTier7CashGenerators(){
    game.tier6CashGenerator.totalOwned = Decimal.add(game.tier6CashGenerator.totalOwned, game.tier7CashGenerator.totalProduction);
    game.tier6CashGenerator.totalGenerated = Decimal.add(game.tier6CashGenerator.totalGenerated, game.tier7CashGenerator.totalProduction);
}

function generateFromTier8CashGenerators(){
    game.tier7CashGenerator.totalOwned = Decimal.add(game.tier7CashGenerator.totalOwned, game.tier8CashGenerator.totalProduction);
    game.tier7CashGenerator.totalGenerated = Decimal.add(game.tier7CashGenerator.totalGenerated, game.tier8CashGenerator.totalProduction);
}

function generateFromTier9CashGenerators(){
    game.tier8CashGenerator.totalOwned = Decimal.add(game.tier8CashGenerator.totalOwned, game.tier9CashGenerator.totalProduction);
    game.tier8CashGenerator.totalGenerated = Decimal.add(game.tier8CashGenerator.totalGenerated, game.tier9CashGenerator.totalProduction);
}

function generateFromTier10CashGenerators(){
    game.tier9CashGenerator.totalOwned = Decimal.add(game.tier9CashGenerator.totalOwned, game.tier10CashGenerator.totalProduction);
    game.tier9CashGenerator.totalGenerated = Decimal.add(game.tier9CashGenerator.totalGenerated, game.tier10CashGenerator.totalProduction);
}