function clickCurrencyButton(currency, modifier){
    switch (currency){
    case "main":
        for (i = 1; i <= modifier; i++){
        cashBalance = cashBalance + 1;
        tokenBalance = tokenBalance + (Math.random() / 100000);
        }
    rawMainClicks = rawMainClicks + 1;
    mainClicks = mainClicks + modifier;
    }
}