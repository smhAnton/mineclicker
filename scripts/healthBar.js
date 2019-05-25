var damage = 1;
var bioms;
var XP = 0;
var xpGoal = 1000;
var curLevel = 60;
var curMob;
var HP, fullHP;
var coin = 90;

window.addEventListener ("load", function () {
	makeList(tempUpgrades, document.getElementById("perhit"), 0);
	makeList(permanentUpgrades, document.getElementById("persec"), 1);
	createBioms();  
	statUpdate(); 
	changeMob(bioms[0].mobs[0]);

	notify("test");
});

function statUpdate() {
	document.getElementById("player_stats").innerHTML = "<p>У вас " + curLevel + " уровень</p>Ваш урон равен " + damage + "</p><p>Количество опыта: " + XP + "</p><p>Количество опыта до следующего уровня: " + xpGoal + "</p><p>Количество монет: " + coin + "</p>";
};

function changeMob(new_mob) {
	curMob = new_mob;
	HP = curMob.HP;
	let width = (HP / curMob.HP * 100); 
	document.getElementById("healthBar").style.width = Math.max(width, 0.0) + '%';
	document.getElementById("current_mob_image").style.backgroundImage = 'url("' + curMob.picture +'")';
};

function makeList(object, parent, listType) {
	let n = object.length;
	for (let i = 0; i < n; i++) {
		let typeObject = document.createElement('div');
   		typeObject.className = "category";
		parent.appendChild(typeObject);
		typeObject.innerHTML = '<div class="info">' + object[i].name + '</div>'; 

		elemCount = object[i].items.length;

		for(let j = 0; j < elemCount; j++) {
			let curObject = document.createElement('div');
			curObject.className = "upgrade";
			let curUpgrade = '<div class="upgrade_photo_container">' + '<div class="upgrade_photo" style="background-image: url(' + '\'' + object[i].items[j].icon +  '\'' + ')"></div></div>' 
			+ '<div class="upgrade_description">' + '<h1>' + object[i].items[j].topName + '</h1><br>' + '<p>Дает ' + object[i].items[j].bonus + ' к урону, стоит - ' + object[i].items[j].cost + ' золота</p></div>';
			curObject.innerHTML = curUpgrade;
			curObject.onclick = function () {
				let local_i = j, elem = curObject, curText = curUpgrade, itemType = i;
				return function () {
					console.log(object[itemType].items[local_i]);
					if(object[itemType].items[local_i].cost <= coin && !object[itemType].items[local_i].status) {
						coin -= object[itemType].items[local_i].cost;
						statUpdate();
						damage += object[itemType].items[local_i].bonus;
						if(listType == 0) {
							object[itemType].items[local_i].status = true;
							curObject.style.backgroundColor = '#009432';	
							curText = '<div class="upgrade_photo_container">' + '<div class="upgrade_photo" style="background-image: url(' + '\'' + object[itemType].items[local_i].icon +  '\'' +')"></div></div>'
								+ '<div class="upgrade_description">' + '<h1>' + object[itemType].items[local_i].topName + '</h1><br>' + '<p>Куплено</p>';
							curObject.innerHTML = curText;
							object[itemType].cur++;
						} else {
							object[itemType].items[local_i].cost = Math.round(object[itemType].items[local_i].cost * 1.6);
							curText = '<div class="upgrade_photo_container">' + '<div class="upgrade_photo" style="background-image: url(' + '\'' + object[i].items[j].icon +  '\'' + ')"></div></div>' 
									+ '<div class="upgrade_description">' + '<h1>' + object[i].items[j].topName + '</h1><br>' + '<p>Дает ' + object[i].items[j].bonus 
									+ ' к урону, стоит - ' + object[i].items[j].cost + ' золота</p></div>';
							curObject.innerHTML = curText;
							object[itemType].cur++;
						}
					} else {
						console.log('Данный апгрейд приобретен или вам не хватает средств');
					}
				};

			}();
			parent.appendChild(curObject);
		}
	}
}	

function reduceHP () {
	HP = Math.max(0, HP - damage);
	coin += damage;
	let width = (HP / curMob.HP * 100); 
	document.getElementById("healthBar").style.width = Math.max(width, 0.0) + '%';
	console.log("curHP: " + HP + " maxHP: " + curMob.HP);
	if(HP == 0) {
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
	HP = document.getElementById("HP").value;
	damage = document.getElementById("damage").value;
	fullHP = HP;
};

