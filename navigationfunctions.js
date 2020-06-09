function navigate(currency, primarySection, secondarySection){
    switch (currency){
        case "main":
            $("#settings").hide();
            $("#main").show();
            switch (primarySection){
                case "click":
                    $("#main-upgrade,#main-automation").hide();
                    $("#main-click").show();
                    break;
                case "automation":
                    $("#main-upgrade,#main-click").hide();
                    $("#main-automation").show();
                    switch (secondarySection){
                        case "cash":
                            $("#main-automation-token").hide();
                            $("#main-automation-cash").show();
                            break;
                        case "token":
                            $("#main-automation-cash").hide();
                            $("#main-automation-token").show();
                            break;
                    }
                    break;
                case "upgrade":
                    $("#main-click,#main-automation").hide();
                    $("#main-upgrade").show();
                    break;
                    switch (secondarySection){
                        case "click":

                            break;
                        case "generator":
                            break;
                        case undefined:
                            break;
                    }
                case undefined:
                    break;
            }
            break;
        case "settings":
            $("#main").hide();
            $("#settings").show();
        }
        

    }
