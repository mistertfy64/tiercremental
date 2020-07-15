navigateTo("game", "main", "click");

function navigateTo(section, subsection, subsubsection, subsubsubsection, subsubsubsubsection, subsubsubsubsubsection, subsubsubsubsubsubsection, subsubsubsubsubsubsubsection, subsubsubsubsubsubsubsubsection, subsubsubsubsubsubsubsubsubsection, subsubsubsubsubsubsubsubsubsubsection){
    switch (section){
        case 'game':
            {
                $("#settings-container").hide();
                $("#game-main-container").show();
                switch (subsection){
                    case 'main':
                        {
                        switch (subsubsection){
                            case 'click':
                                {
                                    $("#main-automation-information-container").hide();
                                    $("#main-upgrade-information-container").hide();
                                    $("#main-prestige-information-container").hide(); 
                                    $("#main-currency-button-container").show();
                                    break;
                                }
                            case 'automation':
                                {
                                    $("#main-currency-button-container").hide();
                                    $("#main-upgrade-information-container").hide();
                                    $("#main-prestige-information-container").hide(); 
                                    $("#main-automation-information-container").show();
                                    break;
                                }
                            case 'upgrade':
                                {
                                    $("#main-automation-information-container").hide();
                                    $("#main-currency-button-container").hide();
                                    $("#main-prestige-information-container").hide(); 
                                    $("#main-upgrade-information-container").show();
                                    switch (subsubsubsection){
                                        case 'multipliers':
                                            {
                                                $("#main-upgrade-costs-information-container").hide();
                                                $("#main-upgrade-one-time-upgrades-information-container").hide();
                                                $("#main-upgrade-multipliers-information-container").show();
                                                break;
                                            }
                                        case 'costs':
                                            {

                                                $("#main-upgrade-one-time-upgrades-information-container").hide();
                                                $("#main-upgrade-multipliers-information-container").hide();
                                                $("#main-upgrade-costs-information-container").show();
                                                break;
                                            }
                                        case 'oneTime':
                                            {
                                                $("#main-upgrade-multipliers-information-container").hide();
                                                $("#main-upgrade-costs-information-container").hide();
                                                $("#main-upgrade-one-time-upgrades-information-container").show();

                                                break;
                                            }
                                            break;
                                    }
                                    break;
                                }
                            case 'prestige':
                                {
                                    $("#main-upgrade-information-container").hide();
                                    $("#main-automation-information-container").hide();
                                    $("#main-currency-button-container").hide();
                                    $("#main-prestige-information-container").show(); 
                                }
                        }
                        break;
                    }
                    break;
                }
                break;
            }
        case 'settings':
            {
                $("#game-main-container").hide();
                $("#settings-container").show();
                break;
            }
    }
}