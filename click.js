function clickMain(){
    cash = cash + mainPower * cashPower * prestigeMainPower * clickPower;
    tokens = tokens + Math.random() * 0.0001 * mainPower * tokensPower * prestigeMainPower * clickPower;
    document.getElementById("cash").innerHTML = cash;
    document.getElementById("tokens").innerHTML = tokens;
};
