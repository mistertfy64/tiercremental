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
    if (typeof saveFileToLoad.game.tier3CashGenerator !== "undefined") game.tier3CashGenerator = saveFileToLoad.game.tier3CashGenerator;
    if (typeof saveFileToLoad.game.tier4CashGenerator !== "undefined") game.tier4CashGenerator = saveFileToLoad.game.tier4CashGenerator;
    if (typeof saveFileToLoad.game.tier5CashGenerator !== "undefined") game.tier5CashGenerator = saveFileToLoad.game.tier5CashGenerator;
    if (typeof saveFileToLoad.game.tier6CashGenerator !== "undefined") game.tier6CashGenerator = saveFileToLoad.game.tier6CashGenerator;
    if (typeof saveFileToLoad.game.tier7CashGenerator !== "undefined") game.tier7CashGenerator = saveFileToLoad.game.tier7CashGenerator;
    if (typeof saveFileToLoad.game.tier8CashGenerator !== "undefined") game.tier8CashGenerator = saveFileToLoad.game.tier8CashGenerator;
    if (typeof saveFileToLoad.game.tier9CashGenerator !== "undefined") game.tier9ashGenerator = saveFileToLoad.game.tier9CashGenerator;
    if (typeof saveFileToLoad.game.tier10CashGenerator !== "undefined") game.tier10CashGenerator = saveFileToLoad.game.tier10CashGenerator;

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

    game.tier3CashGenerator.totalOwned = Decimal(game.tier3CashGenerator.totalOwned);
    game.tier3CashGenerator.totalPurchased = Decimal(game.tier3CashGenerator.totalPurchased);
    game.tier3CashGenerator.totalGenerated = Decimal(game.tier3CashGenerator.totalGenerated);
    game.tier3CashGenerator.productionMultiplier = Decimal(game.tier3CashGenerator.productionMultiplier);
    game.tier3CashGenerator.totalProduction = Decimal(game.tier3CashGenerator.totalProduction);
    game.tier3CashGenerator.productionPerGenerator = Decimal(game.tier3CashGenerator.productionPerGenerator);

    game.tier4CashGenerator.totalOwned = Decimal(game.tier4CashGenerator.totalOwned);
    game.tier4CashGenerator.totalPurchased = Decimal(game.tier4CashGenerator.totalPurchased);
    game.tier4CashGenerator.totalGenerated = Decimal(game.tier4CashGenerator.totalGenerated);
    game.tier4CashGenerator.productionMultiplier = Decimal(game.tier4CashGenerator.productionMultiplier);
    game.tier4CashGenerator.totalProduction = Decimal(game.tier4CashGenerator.totalProduction);
    game.tier4CashGenerator.productionPerGenerator = Decimal(game.tier4CashGenerator.productionPerGenerator);

    game.tier5CashGenerator.totalOwned = Decimal(game.tier5CashGenerator.totalOwned);
    game.tier5CashGenerator.totalPurchased = Decimal(game.tier5CashGenerator.totalPurchased);
    game.tier5CashGenerator.totalGenerated = Decimal(game.tier5CashGenerator.totalGenerated);
    game.tier5CashGenerator.productionMultiplier = Decimal(game.tier5CashGenerator.productionMultiplier);
    game.tier5CashGenerator.totalProduction = Decimal(game.tier5CashGenerator.totalProduction);
    game.tier5CashGenerator.productionPerGenerator = Decimal(game.tier5CashGenerator.productionPerGenerator);

    game.tier6CashGenerator.totalOwned = Decimal(game.tier6CashGenerator.totalOwned);
    game.tier6CashGenerator.totalPurchased = Decimal(game.tier6CashGenerator.totalPurchased);
    game.tier6CashGenerator.totalGenerated = Decimal(game.tier6CashGenerator.totalGenerated);
    game.tier6CashGenerator.productionMultiplier = Decimal(game.tier6CashGenerator.productionMultiplier);
    game.tier6CashGenerator.totalProduction = Decimal(game.tier6CashGenerator.totalProduction);
    game.tier6CashGenerator.productionPerGenerator = Decimal(game.tier6CashGenerator.productionPerGenerator);

    game.tier7CashGenerator.totalOwned = Decimal(game.tier7CashGenerator.totalOwned);
    game.tier7CashGenerator.totalPurchased = Decimal(game.tier7CashGenerator.totalPurchased);
    game.tier7CashGenerator.totalGenerated = Decimal(game.tier7CashGenerator.totalGenerated);
    game.tier7CashGenerator.productionMultiplier = Decimal(game.tier7CashGenerator.productionMultiplier);
    game.tier7CashGenerator.totalProduction = Decimal(game.tier7CashGenerator.totalProduction);
    game.tier7CashGenerator.productionPerGenerator = Decimal(game.tier7CashGenerator.productionPerGenerator);

    game.tier8CashGenerator.totalOwned = Decimal(game.tier8CashGenerator.totalOwned);
    game.tier8CashGenerator.totalPurchased = Decimal(game.tier8CashGenerator.totalPurchased);
    game.tier8CashGenerator.totalGenerated = Decimal(game.tier8CashGenerator.totalGenerated);
    game.tier8CashGenerator.productionMultiplier = Decimal(game.tier8CashGenerator.productionMultiplier);
    game.tier8CashGenerator.totalProduction = Decimal(game.tier8CashGenerator.totalProduction);
    game.tier8CashGenerator.productionPerGenerator = Decimal(game.tier8CashGenerator.productionPerGenerator);

    game.tier9CashGenerator.totalOwned = Decimal(game.tier9CashGenerator.totalOwned);
    game.tier9CashGenerator.totalPurchased = Decimal(game.tier9CashGenerator.totalPurchased);
    game.tier9CashGenerator.totalGenerated = Decimal(game.tier9CashGenerator.totalGenerated);
    game.tier9CashGenerator.productionMultiplier = Decimal(game.tier9CashGenerator.productionMultiplier);
    game.tier9CashGenerator.totalProduction = Decimal(game.tier9CashGenerator.totalProduction);
    game.tier9CashGenerator.productionPerGenerator = Decimal(game.tier9CashGenerator.productionPerGenerator);

    game.tier10CashGenerator.totalOwned = Decimal(game.tier10CashGenerator.totalOwned);
    game.tier10CashGenerator.totalPurchased = Decimal(game.tier10CashGenerator.totalPurchased);
    game.tier10CashGenerator.totalGenerated = Decimal(game.tier10CashGenerator.totalGenerated);
    game.tier10CashGenerator.productionMultiplier = Decimal(game.tier10CashGenerator.productionMultiplier);
    game.tier10CashGenerator.totalProduction = Decimal(game.tier10CashGenerator.totalProduction);
    game.tier10CashGenerator.productionPerGenerator = Decimal(game.tier10CashGenerator.productionPerGenerator);

    
}

