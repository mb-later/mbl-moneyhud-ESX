(() => {
    MBL = {};

    MBL.Open = function(data) {
        $(".mbl-nakit").css("display", "block");
        $("#nakit").html(data.cash);
    };
    MBL.Show = function(data) {
        if(data.type == "cash") {
            $(".mbl-nakit").fadeIn(150);
            $("#nakit").html(data.cash);
            setTimeout(function() {
                $(".mbl-nakit").fadeOut(750);
            }, 3500)
        } 
    };

    MBL.Update = function(data) {
        if(data.type == "cash") {
            $(".mbl-nakit").css("display", "block");
            $("#nakit").html(data.cash);
            if (data.minus) {
                $(".mbl-nakit").append('<p class="moneyupdate minus">-<span id="cash-symbol">&dollar;&nbsp;</span><span><span id="minus-changeamount">' + data.amount + '</span></span></p>')
                $(".minus").css("display", "block");
                setTimeout(function() {
                    $(".minus").fadeOut(750, function() {
                        $(".minus").remove();
                        $(".mbl-nakit").fadeOut(750);
                    });
                }, 3500)
            } else {
                $(".mbl-nakit").append('<p class="moneyupdate plus">+<span id="cash-symbol">&dollar;&nbsp;</span><span><span id="plus-changeamount">' + data.amount + '</span></span></p>')
                $(".plus").css("display", "block");
                setTimeout(function() {
                    $(".plus").fadeOut(750, function() {
                        $(".plus").remove();
                        $(".mbl-nakit").fadeOut(750);
                    });
                }, 3500)
            }
        }
    };



    window.onload = function(e) {
        window.addEventListener('message', function(event) {
            switch(event.data.action) {
                case "open":
                    MBL.Open(event.data);
                    break;
                case "update":
                    MBL.Update(event.data);
                    break;
                case "show":
                    MBL.Show(event.data);
                    break;
            }
        })
    }
})();