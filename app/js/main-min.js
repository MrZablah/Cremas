"use strict";function calcTrivia(){var e=trivia.getCheck(),t={};e.forEach(function(e){t[e]=(t[e]||0)+1});var n=Object.keys(t).reduce(function(e,n){return t[e]>t[n]?e:n});document.getElementById("trivia").style.display="none",document.getElementById("questions__results").style.display="block";var i=proximus.getKeyValue(langObj,"respuestas");"a"===n?(document.getElementById("triviaTitle").innerHTML=i.A.titulo,document.getElementById("triviaText").innerHTML=i.A.text):"b"===n?(document.getElementById("triviaTitle").innerHTML=i.B.titulo,document.getElementById("triviaText").innerHTML=i.B.text):(document.getElementById("triviaTitle").innerHTML=i.Other.titulo,document.getElementById("triviaText").innerHTML=i.Other.text)}function goForm(){document.getElementById("name").focus(),document.getElementById("name").select()}function goHome(){window.location.href="/"}function goPayment(){window.location.href="payment.html"}function goConfirm(){window.location.href="confirm.html"}