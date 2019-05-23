var damage = 1;
var bioms;
var XP = 0;
var xpGoal = 1000;
var curLevel = 1;
var curMob;
var hp;

function load(){
	bioms = data;
	makeList(permanentUpgrades, document.getElementById("perhit"));
	statUpdate(); 
	changeMob();
}

function statUpdate() {
	document.getElementById("player_stats").innerHTML = "<p>У вас " + curLevel + " уровень</p>Ваш урон равен " + damage + "</p><p>Количество опыта: " + XP + "</p><p>Количество опыта до следующего уровня: " + xpGoal + "</p>";
}

function changeMob() {
	curMob = bioms[0].mobs[0];
	hp = curMob.HP;
	let width = (hp / curMob.HP * 100); 
	document.getElementById("healthBar").style.width = Math.max(width, 0.0) + '%';
	document.getElementById("current_mob_image").style.backgroundImage = 'url("' + curMob.picture +'")';
}

function makeList(object, parent) {
	let n = object.length;
	for (let i = 0; i < n; i++) {
		let curObject = document.createElement('div');
		curObject.className = "upgrade";

		let curUpgrade = "";
		curUpgrade = '<div class="upgrade_photo_container">';
		curUpgrade += '<div class="upgrade_photo" style="background-image: url(' + '\'' + object[i].icon +  '\'' +')"></div></div>';
		curUpgrade += '<div class="upgrade_description">';
		curUpgrade += '<h1>' + object[i].topName + '</h1>';
		curUpgrade += '<p>Дает ' + object[i].bonus + ' к урону, стоит - ' + object[i].cost + ' золота</p></div>'; //ты тут забыл дивку закрыть
		curObject.innerHTML = curUpgrade;

		curObject.onclick = function () {
			let local_i = i, elem = curObject;
			return function () {
				console.log(local_i, elem);
			};
		}();
		parent.appendChild(curObject);
	}
}

function reduceHP () {
	hp = Math.max(0, hp - damage);
	let width = (hp / curMob.HP * 100); 
	document.getElementById("healthBar").style.width = Math.max(width, 0.0) + '%';
	console.log("curHP: " + hp + " maxHP: " + curMob.HP);
	if(hp == 0) {
		let xpReward = curMob.XP + Math.round(Math.random() * 7) - 3; 
		console.log("Вы подебил! Ваша награда: " + xpReward + " опыта");
		XP += xpReward;
		if(XP >= xpGoal) {
			curLevel++;
			XP -= xpGoal;
			xpGoal = Math.round(xpGoal * 1.1);
		}
		changeMob();
	}
  	statUpdate();
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

