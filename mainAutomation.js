function buyTier1CashGenerator(n){
  var tier1CashGeneratorsCost = Math.floor(Math.pow(tier1CashGeneratorsBought , tier1CashGeneratorsCostExponent) + 15);
  if (cash >= tier1CashGeneratorsCost){
    tier1CashGeneratorsOwned = tier1CashGeneratorsOwned + 1;
    tier1CashGeneratorsBought = tier1CashGeneratorsBought + 1;
    cash = cash - tier1CashGeneratorsCost;
    document.getElementById("tier1CashGeneratorsOwned").innerHTML = tier1CashGeneratorsOwned;
    document.getElementById("cash").innerHTML = cash;
  };
  var tier1CashGeneratorsCost = Math.floor(Math.pow(tier1CashGeneratorsBought , tier1CashGeneratorsCostExponent) + 15);
  document.getElementById("tier1CashGeneratorsCost").innerHTML = tier1CashGeneratorsCost;
};









//Production
window.setInterval(function(){
  cash = cash + cashPerSecond;
}, 1000);

//Update
window.setInterval(function(){
  var tier1CashGeneratorsProduction = tier1CashGeneratorsOwned * mainPower * prestigeMainPower * tierMainPower * cashPower * tier1CashGeneratorsPower;
  cashPerSecond = tier1CashGeneratorsProduction;
  document.getElementById("cash").innerHTML = cash;
  document.getElementById("cashPerSecond").innerHTML = cashPerSecond;
}, 10);
