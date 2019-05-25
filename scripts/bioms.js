window.addEventListener ("load", function () {
    function createBioms () {
        var dom_bioms = document.getElementsByClassName("biom");
        for (var i = 0; i < bioms.length; i++) {
            if (curLevel >= bioms[i].level) {
                dom_bioms[i].style.backgroundImage = "url(" + bioms[i].picture + ")";
                dom_bioms[i].innerHTML = "";

                dom_bioms[i].onclick = function () {
                    var local_i = i;
                    return function () {
                        createMobList(local_i);
                    };
                }();
            }
            else {
                dom_bioms[i].style.backgroundColor = "black";
                dom_bioms[i].innerHTML = "<p>lvl. " + bioms[i].level + "</p>";
                dom_bioms[i].onclick = function () {};
            }
        };
    };

    function createMobList (biom_id) {
        var mobs_list = document.getElementById("mob_selection_container");
        mobs_list.style.display = "flex";
        mobs_list.onclick = function (obj) {
            var local_el = mobs_list;
            return function (obj) {
                if (obj.path[0] == local_el) {
                    local_el.style.display = "none";
                }
            };
        }();

        mobs_list = document.getElementById("mob_selection");
        mobs_list.innerHTML = "";

        for (var i = 0; i < bioms[biom_id].mobs.length; i++) {
            var mob = document.createElement("div");
            mob.classList = ["mob"];
            if (curLevel >= bioms[biom_id].mobs[i].level) {
                mob.innerHTML = "<h1>" + bioms[biom_id].mobs[i].name + "</h1>";
                mob.innerHTML += "<div style=\"background-image: url(" + bioms[biom_id].mobs[i].picture + ");\"></div>";
                mob.innerHTML += "<p>lvl. " + bioms[biom_id].mobs[i].level + " </p>";
                mob.innerHTML += "<p>HP " + bioms[biom_id].mobs[i].HP + " </p>";
                mob.innerHTML += "<p>XP " + bioms[biom_id].mobs[i].XP + "</p>";
            } 
            else {
                mob.innerHTML = "<h1>?</h1>";
                mob.innerHTML += "<div style=\"background-color: black;\"></div>";
                mob.innerHTML += "<p>???</p>";
            }
            mobs_list.appendChild(mob);
        }
    };

    createBioms();  
    notify("test");

    function notify (text) {
        var notification = document.getElementById("notification");
        notification.innerHTML = text;
        notification.style.display = "block";
        setTimeout(function () {
            notification.style.opacity = "1";
        }, 100);

        setTimeout(function () {
            notification.style.opacity = "0";
            setTimeout(function () {
                notification.style.display = "none";
            }, 1100);
        }, 3000);
    };
});