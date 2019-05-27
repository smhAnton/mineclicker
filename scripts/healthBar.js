var isAnimationGoing = 0; // Идет ли сейчас анимация
var damage = 1; // Урон игрока
var bioms; // Объект, содержащий все биомы и монстров
var XP = 0; // Опыт
var xpGoal = 1000; //Нужно для достижения 1 уровня
var xpCoef = 1.3 // Множитель увеличения количества опыта нужного для повышения уровня
var valCoef = 1.6 // Множитель увеличения цены апгрейдов
var curLevel = 1; // Текущий уровень
var curMob; // Текущий моб
var HP, fullHP; // Текущее/ максимальное количество жизней
var coin = 0; // Количество монет
var moneyPerSec = 0; // Количество монет в секунду
var killStreak = 0; // Количество убитых монстров
var curId = 0; 

//Начальная загрузка 
window.addEventListener ("load", function () {
	makeList(tempUpgrades, document.getElementById("perhit"), 0);
	makeList(permanentUpgrades, document.getElementById("persec"), 1);
	createBioms();  
	changeMob(bioms[0].mobs[0], 0);
	xpBar();
	notify("test");
	statUpdate();
});

//Обновление статистики
function statUpdate() {
	let curStat = '<div class="stat_block">У вас <br>' + curLevel + '<br>уровень</div><div class="stat_block">Ваш урон равен<br>' + damage + '</div><div class="stat_block">Количество опыта:<br>' + XP + '</div><div class="stat_block">Убито монстров:<br>' +
					killStreak + '</div><div class="stat_block">Ваши сбережения:<br>' + coin.toFixed(1) + 'g</div><div class="stat_block">Количество монет в секунду:<br>' + moneyPerSec.toFixed(1) + 'g</div>	'; 
	document.getElementById("stats").innerHTML = curStat;
	createBioms();  
}


//Смена моба
function changeMob(newMob, worldId) {
	curId = worldId;
	document.body.style.backgroundImage = 'url("' + bioms[worldId].picture + '")';
	curMob = newMob;
	HP = curMob.HP;
	let width = (HP / curMob.HP * 100); 
	document.getElementById("healthBar").style.width = Math.max(width, 0.0) + '%';
	document.getElementById("health_bar_number").innerHTML = HP;
	document.getElementById("current_mob_image").style.backgroundImage = 'url("' + curMob.picture +'")';
	document.getElementById("mob_image_mask").style.mask = 'url("' + curMob.picture +'")';
};


//Составление списка апгрейдов
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
			+ '<div class="upgrade_description">' + '<h1>' + object[i].items[j].topName + '</h1><br>' + '<p>Дает ' + object[i].items[j].bonus + ' к урону за клик. Стоимость: ' + object[i].items[j].cost + 'g</p></div>';
			if(listType == 1) {
				curUpgrade = '<div class="upgrade_photo_container">' + '<div class="upgrade_photo" style="background-image: url(' + '\'' + object[i].items[j].icon +  '\'' + ')"></div></div>' 
							+ '<div class="upgrade_description">' + '<h1>' + object[i].items[j].topName + '</h1><br>' + '<p>Дает ' + object[i].items[j].bonus + 'g в секунду. Стоимость: ' 
							+ object[i].items[j].cost + 'g</p></div>';
			}
			curObject.innerHTML = curUpgrade;


			//Клик по объекту в магазине 
			curObject.onclick = function () {
				let local_i = j, elem = curObject, curText = curUpgrade, itemType = i;
				return function () {
					console.log(object[itemType].items[local_i]);
					if(object[itemType].items[local_i].cost <= coin && !object[itemType].items[local_i].status) {
						coin -= object[itemType].items[local_i].cost;
						//0 - Список единовременных, 1 - бесконечных
						if(listType == 0) {
							object[itemType].items[local_i].status = true;	
							curText = '<div class="upgrade_photo_container">' + '<div class="upgrade_photo" style="background-image: url(\'img/upgrades/done.png\'' +')"></div></div>'
								+ '<div class="upgrade_description">' + '<h1>' + object[itemType].items[local_i].topName + '</h1><br>' + '<p>Куплено</p>';
							curObject.innerHTML = curText;
							curObject.style.backgroundColor = '#009432';
							object[itemType].cur++;
							damage += object[itemType].items[local_i].bonus;
						} else {
							object[itemType].items[local_i].cost = Math.round(object[itemType].items[local_i].cost * valCoef);
							curText = '<div class="upgrade_photo_container">' + '<div class="upgrade_photo" style="background-image: url(' + '\'' + object[i].items[j].icon +  '\'' + ')"></div></div>' 
									+ '<div class="upgrade_description">' + '<h1>' + object[i].items[j].topName + '</h1><br>' + '<p>Дает ' + object[i].items[j].bonus + 'g в секунду. Стоимость: ' 
									+ object[i].items[j].cost + 'g</p></div>';
							curObject.innerHTML = curText;
							object[itemType].cur++;
							moneyPerSec += object[itemType].items[local_i].bonus;
						}
						statUpdate();
					} else {
						console.log('Данный апгрейд приобретен или вам не хватает средств');
					}
				};

			}();
			parent.appendChild(curObject);
		}
	}
}	

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

//Обработка клика
function reduceHP () {
	HP = Math.max(0, HP - damage);
	coin += damage;
	let width = (HP / curMob.HP * 100); 
	document.getElementById("healthBar").style.width = Math.max(width, 0.0) + '%';
	document.getElementById("health_bar_number").innerHTML = HP;
	console.log("curHP: " + HP + " maxHP: " + curMob.HP);
	if (!isAnimationGoing) {
		document.getElementById("current_mob_image").style.animationName = "didlidu";
		isAnimationGoing = 1;
		setTimeout(function(){document.getElementById("current_mob_image").style.animationName = ""; isAnimationGoing = 0;}, 300);
	}
	if (HP == 0) {
		killStreak++;
		let xpReward = curMob.XP + Math.round(Math.random() * 7) - 3; 
		console.log("Вы подебил! Ваша награда: " + xpReward + " опыта");
		XP += xpReward;
		if(XP >= xpGoal) {
			curLevel++;
			XP -= xpGoal;
			xpGoal = Math.round(xpGoal * xpCoef);
		}
		changeMob(curMob, curId);
		xpBar();
	}
  	statUpdate();
};

//Обработка ежесекундного прироста
setInterval(function() {coin = round(coin +  moneyPerSec / 10, 1); statUpdate();}, 100);   

//Обработка опыта
function xpBar() {
	let xpBarElement = document.getElementById("player_level_1");

}