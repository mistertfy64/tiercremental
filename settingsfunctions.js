window.setInterval(function(){
    saveToFile1();
}, 60000);

loadFromFile1();
clickCurrencyButton('main', 1, 0);

function saveToFile1(){
    console.log("-----------")
    console.log("Game saved to file 1.")
    console.log("-----------")
    var saveFile1 = {
        game: game
    }
    localStorage.setItem("saveFile1",JSON.stringify(saveFile1));
}

function loadFromFile1(){
    var saveFileToLoad = JSON.parse(localStorage.getItem("saveFile1"));
    if (typeof saveFileToLoad.game.tier1CashGenerator !== "undefined") game.tier1CashGenerator = saveFileToLoad.game.tier1CashGenerator;
    if (typeof saveFileToLoad.game.tier2CashGenerator !== "undefined") game.tier2CashGenerator = saveFileToLoad.game.tier2CashGenerator;

    game.tier1CashGenerator.totalOwned = Decimal(game.tier1CashGenerator.totalOwned);
    game.tier1CashGenerator.totalPurchased = Decimal(game.tier1CashGenerator.totalPurchased);
    game.tier1CashGenerator.totalGenerated = Decimal(game.tier1CashGenerator.totalGenerated);
    game.tier1CashGenerator.productionMultiplier = Decimal(game.tier1CashGenerator.productionMultiplier);
    game.tier1CashGenerator.totalProduction = Decimal(game.tier1CashGenerator.totalProduction);
    game.tier1CashGenerator.productionPerGenerator = Decimal(game.tier1CashGenerator.productionPerGenerator);

    game.tier2CashGenerator.totalOwned = Decimal(game.tier2CashGenerator.totalOwned);
    game.tier2CashGenerator.totalPurchased = Decimal(game.tier2CashGenerator.totalPurchased);
    game.tier2CashGenerator.totalGenerated = Decimal(game.tier2CashGenerator.totalGenerated);
    game.tier2CashGenerator.productionMultiplier = Decimal(game.tier2CashGenerator.productionMultiplier);
    game.tier2CashGenerator.totalProduction = Decimal(game.tier2CashGenerator.totalProduction);
    game.tier2CashGenerator.productionPerGenerator = Decimal(game.tier2CashGenerator.productionPerGenerator);
}

