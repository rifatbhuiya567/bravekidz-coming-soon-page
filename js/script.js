window.onscroll = function () {
    let scrolling = $(this).scrollTop(),
        navBar = document.querySelector(".main-header");

    if(scrolling > 60) {
        $(navBar).addClass("nav-anim");
    }else {
        $(navBar).removeClass("nav-anim");
    }
};
// Scroll Function End

function pageDisclaimer() {
    let disClam = document.querySelector(".disclaimer"),
        btnClose = document.querySelector(".dis-btn"),
        underClose = document.querySelector(".under-btn");

    $(document).ready(function() {
        $(disClam).addClass("dis-visual");
    });

    $(underClose).click(function() {
        $(disClam).removeClass("dis-visual");
    });

    $(btnClose).click(function() {
        $(disClam).removeClass("dis-visual");
    });

    window.addEventListener("click", function( event ) {
        $(disClam).toggleClass("dis-anim");
    });
};

pageDisclaimer();
// Disclaimer Funtion End

function toolTip() {
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  
    let empty = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
};
  
toolTip();
// Tool Tip Function

