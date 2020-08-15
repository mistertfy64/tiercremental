//Elements + Variables

window.setInterval(function(){

    document.getElementById("cash-balance").innerHTML = formatNumber(game.cashBalance);
    document.getElementById("token-balance").innerHTML = formatNumber(game.tokenBalance);

    document.getElementById("tier-1-cash-generators-owned").innerHTML = formatNumber(Decimal(game.tier1CashGenerator.totalOwned));
    document.getElementById("tier-1-cash-generator-cost").innerHTML = formatNumber(Decimal.floor(Decimal.pow(game.tier1CashGenerator.totalPurchased, game.tier1CashGenerator.costExponent)));
    document.getElementById("tier-1-cash-generators-purchased").innerHTML = formatNumber(Decimal(game.tier1CashGenerator.totalPurchased));
    document.getElementById("tier-1-cash-generators-generated").innerHTML = formatNumber(Decimal(game.tier1CashGenerator.totalGenerated));
    document.getElementById("tier-1-cash-generators-total-production").innerHTML = formatNumber(Decimal(game.tier1CashGenerator.totalProduction));

    document.getElementById("tier-2-cash-generators-owned").innerHTML = formatNumber(Decimal(game.tier2CashGenerator.totalOwned));
    document.getElementById("tier-2-cash-generator-cost").innerHTML = formatNumber((Decimal.floor(Decimal.pow(game.tier2CashGenerator.totalPurchased, game.tier2CashGenerator.costExponent)).plus(game.tier2CashGenerator.costAddend)));
    document.getElementById("tier-2-cash-generators-purchased").innerHTML = formatNumber(Decimal(game.tier2CashGenerator.totalPurchased));
    document.getElementById("tier-2-cash-generators-generated").innerHTML = formatNumber(Decimal(game.tier2CashGenerator.totalGenerated));
    document.getElementById("tier-2-cash-generators-total-production").innerHTML = formatNumber(Decimal(game.tier2CashGenerator.totalProduction));

    document.getElementById("tier-3-cash-generators-owned").innerHTML = formatNumber(Decimal(game.tier3CashGenerator.totalOwned));
    document.getElementById("tier-3-cash-generator-cost").innerHTML = formatNumber((Decimal.floor(Decimal.pow(game.tier3CashGenerator.totalPurchased, game.tier3CashGenerator.costExponent)).plus(game.tier3CashGenerator.costAddend)));
    document.getElementById("tier-3-cash-generators-purchased").innerHTML = formatNumber(Decimal(game.tier3CashGenerator.totalPurchased));
    document.getElementById("tier-3-cash-generators-generated").innerHTML = formatNumber(Decimal(game.tier3CashGenerator.totalGenerated));
    document.getElementById("tier-3-cash-generators-total-production").innerHTML = formatNumber(Decimal(game.tier3CashGenerator.totalProduction));

    document.getElementById("tier-4-cash-generators-owned").innerHTML = formatNumber(Decimal(game.tier4CashGenerator.totalOwned));
    document.getElementById("tier-4-cash-generator-cost").innerHTML = formatNumber((Decimal.floor(Decimal.pow(game.tier4CashGenerator.totalPurchased, game.tier4CashGenerator.costExponent)).plus(game.tier4CashGenerator.costAddend)));
    document.getElementById("tier-4-cash-generators-purchased").innerHTML = formatNumber(Decimal(game.tier4CashGenerator.totalPurchased));
    document.getElementById("tier-4-cash-generators-generated").innerHTML = formatNumber(Decimal(game.tier4CashGenerator.totalGenerated));
    document.getElementById("tier-4-cash-generators-total-production").innerHTML = formatNumber(Decimal(game.tier4CashGenerator.totalProduction));

    document.getElementById("tier-5-cash-generators-owned").innerHTML = formatNumber(Decimal(game.tier5CashGenerator.totalOwned));
    document.getElementById("tier-5-cash-generator-cost").innerHTML = formatNumber((Decimal.floor(Decimal.pow(game.tier5CashGenerator.totalPurchased, game.tier5CashGenerator.costExponent)).plus(game.tier5CashGenerator.costAddend)));
    document.getElementById("tier-5-cash-generators-purchased").innerHTML = formatNumber(Decimal(game.tier5CashGenerator.totalPurchased));
    document.getElementById("tier-5-cash-generators-generated").innerHTML = formatNumber(Decimal(game.tier5CashGenerator.totalGenerated));
    document.getElementById("tier-5-cash-generators-total-production").innerHTML = formatNumber(Decimal(game.tier5CashGenerator.totalProduction));

    document.getElementById("tier-6-cash-generators-owned").innerHTML = formatNumber(Decimal(game.tier6CashGenerator.totalOwned));
    document.getElementById("tier-6-cash-generator-cost").innerHTML = formatNumber((Decimal.floor(Decimal.pow(game.tier6CashGenerator.totalPurchased, game.tier6CashGenerator.costExponent)).plus(game.tier6CashGenerator.costAddend)));
    document.getElementById("tier-6-cash-generators-purchased").innerHTML = formatNumber(Decimal(game.tier6CashGenerator.totalPurchased));
    document.getElementById("tier-6-cash-generators-generated").innerHTML = formatNumber(Decimal(game.tier6CashGenerator.totalGenerated));
    document.getElementById("tier-6-cash-generators-total-production").innerHTML = formatNumber(Decimal(game.tier6CashGenerator.totalProduction));

    document.getElementById("tier-7-cash-generators-owned").innerHTML = formatNumber(Decimal(game.tier7CashGenerator.totalOwned));
    document.getElementById("tier-7-cash-generator-cost").innerHTML = formatNumber((Decimal.floor(Decimal.pow(game.tier7CashGenerator.totalPurchased, game.tier7CashGenerator.costExponent)).plus(game.tier7CashGenerator.costAddend)));
    document.getElementById("tier-7-cash-generators-purchased").innerHTML = formatNumber(Decimal(game.tier7CashGenerator.totalPurchased));
    document.getElementById("tier-7-cash-generators-generated").innerHTML = formatNumber(Decimal(game.tier7CashGenerator.totalGenerated));
    document.getElementById("tier-7-cash-generators-total-production").innerHTML = formatNumber(Decimal(game.tier7CashGenerator.totalProduction));

    document.getElementById("tier-8-cash-generators-owned").innerHTML = formatNumber(Decimal(game.tier8CashGenerator.totalOwned));
    document.getElementById("tier-8-cash-generator-cost").innerHTML = formatNumber((Decimal.floor(Decimal.pow(game.tier8CashGenerator.totalPurchased, game.tier8CashGenerator.costExponent)).plus(game.tier8CashGenerator.costAddend)));
    document.getElementById("tier-8-cash-generators-purchased").innerHTML = formatNumber(Decimal(game.tier8CashGenerator.totalPurchased));
    document.getElementById("tier-8-cash-generators-generated").innerHTML = formatNumber(Decimal(game.tier8CashGenerator.totalGenerated));
    document.getElementById("tier-8-cash-generators-total-production").innerHTML = formatNumber(Decimal(game.tier8CashGenerator.totalProduction));

    document.getElementById("tier-9-cash-generators-owned").innerHTML = formatNumber(Decimal(game.tier9CashGenerator.totalOwned));
    document.getElementById("tier-9-cash-generator-cost").innerHTML = formatNumber((Decimal.floor(Decimal.pow(game.tier9CashGenerator.totalPurchased, game.tier9CashGenerator.costExponent)).plus(game.tier9CashGenerator.costAddend)));
    document.getElementById("tier-9-cash-generators-purchased").innerHTML = formatNumber(Decimal(game.tier9CashGenerator.totalPurchased));
    document.getElementById("tier-9-cash-generators-generated").innerHTML = formatNumber(Decimal(game.tier9CashGenerator.totalGenerated));
    document.getElementById("tier-9-cash-generators-total-production").innerHTML = formatNumber(Decimal(game.tier9CashGenerator.totalProduction));

    document.getElementById("tier-10-cash-generators-owned").innerHTML = formatNumber(Decimal(game.tier10CashGenerator.totalOwned));
    document.getElementById("tier-10-cash-generator-cost").innerHTML = formatNumber((Decimal.floor(Decimal.pow(game.tier10CashGenerator.totalPurchased, game.tier10CashGenerator.costExponent)).plus(game.tier10CashGenerator.costAddend)));
    document.getElementById("tier-10-cash-generators-purchased").innerHTML = formatNumber(Decimal(game.tier10CashGenerator.totalPurchased));
    document.getElementById("tier-10-cash-generators-generated").innerHTML = formatNumber(Decimal(game.tier10CashGenerator.totalGenerated));
    document.getElementById("tier-10-cash-generators-total-production").innerHTML = formatNumber(Decimal(game.tier10CashGenerator.totalProduction));


    document.getElementById("main-tier-1-cash-generator-multiplier-1-upgrade-cost").innerHTML = formatNumber(Decimal(game.mainMultipliersPrices.tier1CashGeneratorMultiplier1));

    game.tier1CashGenerator.totalProduction = Decimal(game.tier1CashGenerator.totalOwned).mul(game.mainMultipliers.prestige).mul(game.mainMultipliers.tier1CashGenerator[0]);
    game.tier2CashGenerator.totalProduction = Decimal(game.tier2CashGenerator.totalOwned);
    game.tier3CashGenerator.totalProduction = Decimal(game.tier3CashGenerator.totalOwned);
    game.tier4CashGenerator.totalProduction = Decimal(game.tier4CashGenerator.totalOwned);
    game.tier5CashGenerator.totalProduction = Decimal(game.tier5CashGenerator.totalOwned);
    game.tier6CashGenerator.totalProduction = Decimal(game.tier6CashGenerator.totalOwned);
    game.tier7CashGenerator.totalProduction = Decimal(game.tier7CashGenerator.totalOwned);
    game.tier8CashGenerator.totalProduction = Decimal(game.tier8CashGenerator.totalOwned);
    game.tier9CashGenerator.totalProduction = Decimal(game.tier9CashGenerator.totalOwned)
    game.tier10CashGenerator.totalProduction = Decimal(game.tier10CashGenerator.totalOwned);

    game.mainMultipliersPrices.tier1CashGeneratorMultiplier1 = Decimal.mul("1e5", Decimal.pow(10, Decimal.mul(Decimal.sub(game.mainMultipliers.tier1CashGenerator[0], "1"), "3")));


    Decimal.precision = game.settings.precision;


}, 10)



