//Generators

window.setInterval(function(){
    generateFromTier1CashGenerator();
    generateFromTier2CashGenerator();
    generateFromTier3CashGenerator();
}, 1000);

function generateFromTier1CashGenerator(){
    cashBalance = cashBalance + tier1CashGenerator.production;
}

function generateFromTier2CashGenerator(){
    cashBalance = cashBalance + tier2CashGenerator.production;
}

function generateFromTier3CashGenerator(){
    cashBalance = cashBalance + tier3CashGenerator.production;
}