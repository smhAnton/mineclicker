var hp = 1000;
var fullHP = hp;
var damage = 3;

window.addEventListener ("load", function () {
	makeList(permanentUpgrades, document.getElementById("perhit"));
});



function makeList(object, parent) {
	for (var i = 0; i < object.length; i++) {
		var curObject = document.createElement('div');
		curObject.className = "upgrade";

		var curUpgrade = "";
		curUpgrade = '<div class="upgrade_photo_container">';
		curUpgrade += '<div class="upgrade_photo" style="background-image: url(' + '\'' + object[i].icon +  '\'' +')"></div></div>';
		curUpgrade += '<div class="upgrade_description">';
		curUpgrade += '<h1>' + object[i].topName + '</h1>';
		curUpgrade += '<p>Дает ' + object[i].bonus + ' к урону, стоит - ' + object[i].cost + ' золота</p></div>'; //ты тут забыл дивку закрыть
		curObject.innerHTML = curUpgrade;

		curObject.onclick = function () {
			var local_i = i, elem = curObject;
			return function () {
				console.log(local_i, elem);
			};
		}();
		/*
			Объясню что я сделал сверху
			С написал функцию, которая сразу исполняется и возвращает другую функцию
			Зачем? Если мы будем использовать просто так, то переменная i всегда будет иметь последнее принятое значение (6 в данном случае)
			А так я делаю её копию, и тогда она всегда будет равна значению, принятому на моменте исполнения функции
		*/

		parent.appendChild(curObject);
	}
}

function reduceHP () {
	if (hp <= 0) {
		alert("Already Dead");
    } else {
    	hp = Math.max(0, hp - damage);
		let width = (hp / fullHP * 100); 
		document.getElementById("healthBar").style.width = Math.max(width, 0.0) + '%';
  	}
};

function resetHP(){
	document.getElementById("healthBar").style.width = '100%';
	hp = document.getElementById("HP").value;
	damage = document.getElementById("damage").value;
	fullHP = hp;
};

/*
<div class="upgrade">
    <div class="upgrade_photo_container"><div class="upgrade_photo"></div></div>
    <div class="upgrade_description">
        <h1>Achievement</h1>
        <p>Some test text</p>
    </div>
</div>
*/

