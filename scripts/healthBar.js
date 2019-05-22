var hp = 1000;
var fullHP = hp;
var damage = 3;
var bioms;

function load(){
	bioms = data;
	console.log(bioms[2]);
	makeList(permanentUpgrades, document.getElementById("perhit"));
}

function makeList(object, parent){
	for(var i in object) {
		var curObject = document.createElement('div');
		var curUpgrade = "";
		curObject.className = "upgrade";
		curUpgrade = '<div class="upgrade_photo_container">';
		curUpgrade += '<div class="upgrade_photo" style="background-image: url(' + '\'' + object[i].icon +  '\'' +')"></div></div>';
		curUpgrade += '<div class="upgrade_description">';
		curUpgrade += '<h1>' + object[i].topName + '</h1>';
		curUpgrade += '<p>Дает ' + object[i].bonus + ' к урону, стоит - ' + object[i].cost 
			+ ' золота</p>';
		curObject.innerHTML = curUpgrade;
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

