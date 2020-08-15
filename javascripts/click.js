function clickCurrencyButton(currency, modifier, multiplier){
    switch (currency){
    case "main":
        for (i = 1; i <= modifier; i++){
            game.cashBalance = Decimal(game.cashBalance).add(multiplier)
            tokenGainRandomDivider = Decimal.random();
            tokenGainConstantDivider = new Decimal("1e7");
            game.tokenBalance = Decimal.add(game.tokenBalance, (Decimal.mul(multiplier, tokenGainRandomDivider).dividedBy(tokenGainConstantDivider)));
        }
    }
}