/* global proximus, trivia, langObj */

function calcTrivia() { // eslint-disable-line
	let triviaRes = trivia.getCheck();
	let count = {};
	triviaRes.forEach(i => {
		count[i] = (count[i] || 0) + 1;
	});

	let max = Object.keys(count).reduce((key, val) => (count[key] > count[val] ? key : val));

	document.getElementById('trivia').style.display = 'none';
	document.getElementById('questions__results').style.display = 'block';

	let resObj = proximus.getKeyValue(langObj, 'respuestas');

	if (max === 'a') {
		document.getElementById('triviaTitle').innerHTML = resObj.A.titulo;
		document.getElementById('triviaText').innerHTML = resObj.A.text;
	} else if (max === 'b') {
		document.getElementById('triviaTitle').innerHTML = resObj.B.titulo;
		document.getElementById('triviaText').innerHTML = resObj.B.text;
	} else {
		document.getElementById('triviaTitle').innerHTML = resObj.Other.titulo;
		document.getElementById('triviaText').innerHTML = resObj.Other.text;
	}
}

function goForm() { // eslint-disable-line
	document.getElementById('name').focus();
	document.getElementById('name').select();
}

function goHome() { // eslint-disable-line
	window.location.href = '/';
}

function goPayment() { // eslint-disable-line
	window.location.href = 'payment.html';
}

function goConfirm() { // eslint-disable-line
	window.location.href = 'confirm.html';
}
