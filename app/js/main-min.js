function calcTrivia(){let e=trivia.getCheck(),t={};e.forEach(e=>{t[e]=(t[e]||0)+1});let n=Object.keys(t).reduce((e,n)=>t[e]>t[n]?e:n);document.getElementById("trivia").style.display="none",document.getElementById("questions__results").style.display="block";let o=proximus.getKeyValue(langObj,"respuestas");"a"===n?(document.getElementById("triviaTitle").innerHTML=o.A.titulo,document.getElementById("triviaText").innerHTML=o.A.text):"b"===n?(document.getElementById("triviaTitle").innerHTML=o.B.titulo,document.getElementById("triviaText").innerHTML=o.B.text):(document.getElementById("triviaTitle").innerHTML=o.Other.titulo,document.getElementById("triviaText").innerHTML=o.Other.text),window.location.href="#triviaTitle"}function showTrivia(){document.getElementById("doctor_container").style.display="none",document.getElementsByClassName("mobile-yes")[0].style.display="none",document.getElementsByClassName("mobile-no")[0].style.display="block",window.location.href="#triviaTitle"}function goForm(){document.getElementById("name").focus(),document.getElementById("name").select()}function goTarjeta(){document.getElementById("card").focus(),document.getElementById("card").select()}function goHome(){window.location.href="/"}function goGoogle(){window.location.href="http://google.com"}function goPayment(){window.location.href="payment.html"}function goConfirm(){window.location.href="confirm.html"}function showMobile(){let e=document.getElementsByClassName("hide_Mobile-block"),t=document.getElementsByClassName("hide_Mobile-flex");for(let t=0;t<e.length;t++)e[t].style.display="block";for(let e=0;e<t.length;e++)t[e].style.display="flex";goForm()}function runMediaOnly(){if(matchMedia){const e=window.matchMedia("(max-width: 990px)");e.addListener(WidthChange),WidthChange(e)}}function WidthChange(e){e.matches?(document.getElementsByClassName("mobile-no")[0].style.display="none",document.getElementsByClassName("mobile-yes")[0].style.display="block"):(document.getElementsByClassName("mobile-yes")[0].style.display="none",document.getElementsByClassName("mobile-no")[0].style.display="block")}