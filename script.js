"use strict";


window.addEventListener("DOMContentLoaded", loadSVG);


function loadSVG() {
    fetch("peaky.svg")
        .then(response => response.text())
        .then(svgdata => {
            //   document.querySelector("#svg_timeline").innerHTML = svgdata;
            document
                .querySelector("#svg_timeline")
                .insertAdjacentHTML("afterbegin", svgdata);
        });
}

$(document).ready(function () {
    let controller = new ScrollMagic.Controller();

    let textappear = new ScrollMagic.Scene({
        triggerElement: "tspan"
    })
        .setClassToggle(".st1", "textfade")
        .addTo(controller);
});
