﻿bioms = [
    {
        "name": "Зеленые Равнины",
        "picture": "img/background/1.png",
        "level": 1,
        "mobs": [
            {
                "name": "Курица",
                "picture": "img/mobs/chicken.png",
                "level": 1,
                "HP": 50,
                "XP": 25,
                "sounds": "sounds/chicken_hurt.ogg"
            },
            {
                "name": "Свинья",
                "picture": "img/mobs/pig.png",
                "level": 3,
                "HP": 100,
                "XP": 50,
                "sounds": "sounds/pig_hurt.ogg"
            },
            {
                "name": "Корова",
                "picture": "img/mobs/cow.png",
                "level": 6,
                "HP": 200,
                "XP": 75,
                "sounds": "sounds/cow_hurt.ogg"
            },
            {
                "name": "Железный голем",
                "picture": "img/mobs/golem.png",
                "level": 9,
                "HP": 400,
                "XP": 100
            }
        ]
    },
    {
        "name": "Темные пещеры",
        "picture": "img/background/2.png",
        "level": 10,
        "mobs": [
            {
                "name": "Зомби",
                "picture": "img/mobs/zombie.png",
                "level": 10,
                "HP": 350,
                "XP": 100
            },
            {
                "name": "Паук",
                "picture": "img/mobs/spider.png",
                "level": 14,
                "HP": 600,
                "XP": 150
            },
            {
                "name": "Скелет",
                "picture": "img/mobs/skeleton.png",
                "level": 19,
                "HP": 900,
                "XP": 200
            },
            {
                "name": "Крипер",
                "picture": "img/mobs/crieper.png",
                "level": 24,
                "HP": 1400,
                "XP": 300
            }
        ]
    },
    {
        "name": "Кромешный ад",
        "picture": "img/background/3.jpg",
        "level": 25,
        "mobs": [
            {
                "name": "Свинозомби",
                "picture": "img/mobs/pigman.png",
                "level": 25,
                "HP": 1200,
                "XP": 400
            },
            {
                "name": "Ифрит",
                "picture": "img/mobs/ifrit.png",
                "level": 30,
                "HP": 1800,
                "XP": 550
            },
            {
                "name": "Гаст",
                "picture": "img/mobs/gust.png",
                "level": 34,
                "HP": 2500,
                "XP": 700
            },
            {
                "name": "Иссушитель",
                "picture": "img/mobs/sucker.png",
                "level": 39,
                "HP": 3500,
                "XP": 1000
            }
        ]
    },
    {
        "name": "Край Мира",
        "picture": "img/background/4.jpg",
        "level": 40,
        "mobs": [
            {
                "name": "Эндермен",
                "picture": "img/mobs/enderman.png",
                "level": 40,
                "HP": 3200,
                "XP": 1000
            },
            {
                "name": "Чешуйница края",
                "picture": "img/mobs/endermite.png",
                "level": 45,
                "HP": 4400,
                "XP": 1300
            },
            {
                "name": "Шалкер",
                "picture": "img/mobs/shalker.png",
                "level": 50,
                "HP": 6000,
                "XP": 2000
            },
            {
                "name": "Дракон Края",
                "picture": "img/mobs/dragon.png",
                "level": 60,
                "HP": 20000,
                "XP": 10000
            }
        ]
    }
];

///////////////////////////////////////////////////

tempUpgrades =
    [
        {
            "name": "Необходимые блоки",
            "cur": -1,
            "items":
            [
                {
                    "topName": "Сделать верстак",
                    "cost": 100,
                    "bonus": 1,
                    "icon": "img/upgrades/crafting_table.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Создать печь",
                    "cost": 2000,
                    "bonus": 4,
                    "icon": "img/upgrades/pech.png",
                    "alreadySold": false
                }
            ]
        }
        ,
        {
            "name": "Шлемы",
            "cur": -1,
            "items":
            [
                {
                    "topName": "Сделать кожаный шлем",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/leather_helmet.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать железный шлем",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/iron_helmet.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать золотой шлем",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/golden_helmet.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать алмазный шлем",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/diamond_helmet.png",
                    "alreadySold": false
                }
            ]
        }
        ,
        {
            "name": "Нагрудники",
            "cur": -1,
            "items":
            [
                {
                    "topName": "Сделать кожаный нагрудник",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/leather_chestplate.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать железный нагрудник",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/iron_chestplate.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать золотой нагрудник",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/golden_chestplate.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать алмазный нагрудник",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/diamond_chestplate.png",
                    "alreadySold": false
                }
            ]
        }
        ,
        {
            "name": "Поножи",
            "cur": -1,
            "items":
            [
                {
                    "topName": "Сделать кожаные поножи",
                    "cost": 200,
                    "bonus": 1,
                    "icon": "img/upgrades/leather_leggins.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать железные поножи",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/iron_leggins.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать золотые поножи",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/golden_leggins.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать алмазные поножи",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/diamond_leggins.png",
                    "alreadySold": false
                }
            ]
        }
        ,
        {
            "name": "Ботинки",
            "cur": -1,
            "items":
            [
                {
                    "topName": "Сделать кожаные ботинки",
                    "cost": 200,
                    "bonus": 1,
                    "icon": "img/upgrades/leather_boots.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать железные ботинки",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/iron_boots.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать золотые ботинки",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/golden_boots.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать алмазные ботинки",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/diamond_boots.png",
                    "alreadySold": false
                }
            ]
        }
        ,
        {
            "name": "Мотыги",
            "cur": -1,
            "items":
            [
                {
                    "topName": "Сделать деревянную мотыгу",
                    "cost": 200,
                    "bonus": 1,
                    "icon": "img/upgrades/wood_motyga.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать каменную мотыгу",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/stone_motyga.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать железную мотыгу",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/iron_motyga.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать золотую мотыгу",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/golden_motyga.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать алмазную мотыгу",
                    "cost": 3000,
                    "bonus": 4,
                    "icon": "img/upgrades/diamond_motyga.png",
                    "alreadySold": false
                }
            ]
        }
        ,
        {
            "name": "Лопаты",
            "cur": -1,
            "items":
            [
                {
                    "topName": "Сделать деревянную лопату",
                    "cost": 300,
                    "bonus": 1.5,
                    "icon": "img/upgrades/wooden_lop.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать каменную лопату",
                    "cost": 5000,
                    "bonus": 4.5,
                    "icon": "img/upgrades/stone_lop.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать железную лопату",
                    "cost": 5000,
                    "bonus": 4.5,
                    "icon": "img/upgrades/iron_lop.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать золотую лопату",
                    "cost": 5000,
                    "bonus": 4.5,
                    "icon": "img/upgrades/golden_lop.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать алмазную лопату",
                    "cost": 5000,
                    "bonus": 4.5,
                    "icon": "img/upgrades/diamond_lop.png",
                    "alreadySold": false
                }
            ]
        }
        ,
        {
            "name": "Топоры",
            "cur": -1,
            "items":
            [
                {
                    "topName": "Сделать деревянный топор",
                    "cost": 500,
                    "bonus": 2,
                    "icon": "img/upgrades/wooden_axe.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать каменный топор",
                    "cost": 9000,
                    "bonus": 2,
                    "icon": "img/upgrades/stone_axe.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать железный топор",
                    "cost": 9000,
                    "bonus": 2,
                    "icon": "img/upgrades/iron_axe.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать золотой топор",
                    "cost": 9000,
                    "bonus": 2,
                    "icon": "img/upgrades/golden_axe.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать алмазный топор",
                    "cost": 9000,
                    "bonus": 2,
                    "icon": "img/upgrades/diamond_axe.png",
                    "alreadySold": false
                }
            ]
        }
        ,
        {
            "name": "Кирки",
            "cur": -1,
            "items":
            [
                {
                    "topName": "Сделать деревянную кирку",
                    "cost": 800,
                    "bonus": 3,
                    "icon": "img/upgrades/wooden_pickaxe.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать каменную кирку",
                    "cost": 13000,
                    "bonus": 3,
                    "icon": "img/upgrades/stone_pickaxe.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать железную кирку",
                    "cost": 13000,
                    "bonus": 3,
                    "icon": "img/upgrades/iron_pickaxe.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать золотую кирку",
                    "cost": 13000,
                    "bonus": 3,
                    "icon": "img/upgrades/golden_pickaxe.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать алмазную кирку",
                    "cost": 13000,
                    "bonus": 3,
                    "icon": "img/upgrades/diamond_pickaxe.png",
                    "alreadySold": false
                }
            ]
        }
        ,
        {
            "name": "Мечи",
            "cur": -1,
            "items":
            [
                {
                    "topName": "Сделать деревянный меч",
                    "cost": 1000,
                    "bonus": 4,
                    "icon": "img/upgrades/wooden_sword.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать каменный меч",
                    "cost": 20000,
                    "bonus": 4,
                    "icon": "img/upgrades/stone_sword.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать железный меч",
                    "cost": 20000,
                    "bonus": 4,
                    "icon": "img/upgrades/iron_sword.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать золотой меч",
                    "cost": 20000,
                    "bonus": 4,
                    "icon": "img/upgrades/golden_sword.png",
                    "alreadySold": false
                }
                ,
                {
                    "topName": "Сделать алмазный меч",
                    "cost": 20000,
                    "bonus": 4,
                    "icon": "img/upgrades/diamond_sword.png",
                    "alreadySold": false
                }
            ]
        }
];

/////////////////////////////////////////////////////////////////////

permanentUpgrades =
[
    {
        "name": "Пассивный заработок",
        "cur": -1,
        "items":
        [
            {
                "topName": "Прочитать книгу о боевых искусствах",
                "cost": 500,
                "bonus": 1,
                "icon": "img/upgrades/book.png",
                "alreadySold": false
            }
            ,
            {
                "topName": "Всполоть грядки",
                "cost": 5000,
                "bonus": 2,
                "icon": "img/upgrades/earth.png",
                "alreadySold": false
            }
            ,
            {
                "topName": "Попрактиковаться на маникене",
                "cost": 100000,
                "bonus": 10,
                "icon": "img/upgrades/stand.png",
                "alreadySold": false
            }
            ,
            {
                "topName": "Тренироваться в стрельбе из лука",
                "cost": 500000,
                "bonus": 20,
                "icon": "img/upgrades/bow.gif",
                "alreadySold": false
            }
        ]
    }
];