"use strict";

function ChangeColor() {
    par.style.backgroundColor = color[index];
    index++;
    if (index == 5) {
        index = 0;
    }
}

let infoBox = document.getElementById("infoDiv");
infoBox.style.width = "1000px";
infoBox.style.border = "4px solid #2d506a";
infoBox.style.marginTop = "20px";

let title1 = document.getElementById("firstTitle");
title1.innerText = "What is Lorem Ipsum?";

let title2 = document.getElementById("secondTitle");
title2.innerText = "Why do we use it?";

let par = document.getElementById("paragraph");
par.innerText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here. content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
par.style.color = "#2d506a";

let title3 = document.getElementById("thirdTitle");
title3.innerText = "Where does it come from?";

let title4 = document.getElementById("fourthTitle");
title4.innerText = "Where can I get some?";
title4.style.border = "none";

let color = new Array("lightblue", "lavender", "mistyrose", "oldlace", "ivory", "honeydew");
let index = 0;

setInterval("ChangeColor()", 1000);