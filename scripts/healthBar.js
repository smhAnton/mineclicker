window.onload = function (){
	var hp = 3;
	var fullHP = hp;
	var damage = 3;

	function reduceHP () {
		if (hp <= 0) {
			alert("Already Dead");
	    } else {
	    	hp = Math.max(0, hp - damage);
			let width = (hp / fullHP * 100); 
			currentHealth.style.width = Math.max(width, 0.0) + '%'; 
	  }
	};

	function resetHP(){
		document.getElementById("healthBar").style.width = '100%';
		hp = document.getElementById("HP").value;
		damage = document.getElementById("damage").value;
		fullHP = hp;
	};
};

