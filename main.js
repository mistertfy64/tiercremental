// Tiercremental

// mistertfy64.github.io/tiercremental

// mistertfy64.github.io

// Discord: mistertfy64#0001
// Twitter: @mistertfy64
// Instagram: @mistertfy64

var cashBalance = 0;
var tokenBalance = 0;


var rawMainClicks = 0;
var mainClicks = 0;

function cashGenerator(){
    this.totalOwned = 0;
    this.totalPurchased = 0;
    this.totalGenerated = 0;
    this.production = 0;
    this.productionMultiplier1 = 1;
}

function tokenGenerator(){
    this.totalOwned = 0;
    this.totalPurchased = 0;
    this.totalGenerated = 0;
    this.production = 0;
    this.productionMultiplier1 = 1;
}

var tier1CashGenerator = new cashGenerator();
var tier1CashGeneratorCostExponent = 2.75;
var tier2CashGenerator = new cashGenerator();
var tier2CashGeneratorCostExponent = 5.425;
var tier3CashGenerator = new cashGenerator();
var tier3CashGeneratorCostExponent = 12.675;


var tier1TokenGenerator = new tokenGenerator();
var tier1TokenGeneratorCostExponent = 12.65;


