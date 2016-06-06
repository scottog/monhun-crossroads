(function(){

    var mhx = {};
    // -> SKILLS
    mhx.skills = {
        defense: {
            name: 'DEFENSE',
            '-10': 'Sucks to be you',
            '10': 'OMGAWESOME'},
        attack: {
            name: 'ATTACK',
            '-25': 'lolwut',
            '-20': 'less awful',
            '25': 'Is this even in MHG?'
        }
    };

    mhx.armorsets = {
        jaggi: {
            head: 'jaggi helm',
            chest: 'jaggi chest',
            legs: 'jaggi legs',
            and_so: 'much more!'
        }
    };

    //TODO - enter all tolerance increases.
    mhx.monsters = [{
        name: 'Tetsucabra',
        type: 'Amphibian',
        size: 'Large',
        subtype: false,
        hp: 4000,
        habitat: {
            'Ancient Forest': { start: [3,4],
                other: [2,7,8],
                rest: 9 },
            'Frozen Seaway': { start: [6,9],
                other: [3,4,5,7],
                rest: 6},
            'Deserted Island': {start: [3,7],
                other: [2,5],
                rest: 6},
            'Volcanic Hollow': {start: [2,8],
                other: [1,3],
                rest: 9}
        },
        statusEffects: [{
            type:   'Poison',
            initial: 100,
            max:     500,
            duration:60,
            damage:  300,
            recover: '5 / 10s'
        }, {
            type:   'Paralysis',
            initial: 200,
            max:     500,
            duration:10,
            recover: '5 / 10s'
        }, {
            type:   'Sleep',
            initial: 150,
            max:     550,
            duration:40,
            recover: '5 / 10s'
        }, {
            type:   'Stun',
            initial: 200,
            max:     500,
            duration:10,
            recover: '5 / 10s'
        }, {
            type:   'KO',
            initial: 150,
            max:     550,
            duration:40,
            recover: '5 / 10s'
        }, {
            type: 'Exhaust',
            initial: 180,
            step: 75,
            max: 480,
            recover: '5 / 10s'
        }, {
            type: 'Blast',
            initial: 100,
            step: 45,
            max: 1080,
            damage: 100
        }, {
            type: 'Jump',
            initial: 50,
            step: 100,
            max: 450
        }, {
            type: 'Ride',
            damage: '100 LR, 150 HR',
            initial: 60,
            step: 100,
            max: 760
        }],
        hitzone: [
            { name: 'Head',
                Cutting: 56,
                Impact: 56,
                Shot: 60,
                Water: 30,
                Thunder: 25,
                Ice: 5,
                Dragon: 5,
                KO: 100,
                Jump: 100 // % damage applied to 'Ride' accumulation
            }, {
                name: 'Fangs',
                Cutting: 42,
                Impact: 45,
                Shot: 40,
                Water: 25,
                Ice: 10,
                Thunder: 25,
                Dragon: 5,
                KO: 100,
                Jump: 100
            }, {name: 'Forelegs',
                Cutting: 45,
                Impact: 42,
                Shot: 40,
                Water: 20,
                Thunder: 15,
                Ice: 5,
                Dragon: 5,
                Jump: 100
            }, {
                name: 'Back Legs',
                Cutting: 42,
                Impact: 42,
                Shot: 40,
                Water: 15,
                Thunder: 15,
                Ice: 5,
                Dragon: 5,
                Jump: 100
            }, {
                name: 'Tail',
                Cutting: 36,
                Cutting2: 80,
                Impact: 36,
                Impact2: 80,
                Shot: 35,
                Shot2: 85,
                Water: 20,
                Water2: 30,
                Ice: 10,
                Ice2: 15,
                Thunder: 15,
                Thunder2: 30,
                Dragon: 5,
                Jump: 100
            }, {
                name: 'Rock',
                Cutting: 18,
                Impact: 18,
                Shot: 15,
                Dragon: 10
            }
        ],
        trapData: {
            'Pitfall Trap': { Susceptible: true, Normal: 15, Enraged: 12, Exhausted: 20 },
            'Flash Bomb': { Susceptible: true, Normal: 30, Enraged: 20, Exhausted: 30 },
            'Shock Trap': { Susceptible: true, Normal: 10, Enraged: 8, Exhausted: 12 },
            'Sonic Bomb': { Susceptible: false},
            'Meat Trap':  { Susceptible: false},
            'Beaten Ivy': { Susceptible: false}
        }
    }, // tetsucabra
    {
        name: 'Zamtrios',
        type: 'Amphibian',
        size: 'large',
        subtype: false,
        hp: 5200,
        habitat: {
            'Frozen Seaway': { start: [2,6],
                other: [1,3],
                rest: 7 }
        },
        statusEffects: [{
            type:   'Poison',
            effect: '60s (30 damage every 5 seconds)',
            initial: 150,
            step: 100,
            max:     550,
            recover: '5 / 10s'
        }, {
            type:   'Sleep',
            effect: '40s',
            initial: 150,
            step:    100,
            max:     550
        }, {
            type:   'Paralysis',
            effect: '10s',
            initial: 200,
            step:    75,
            max:     500
        }, {
            type:   'Stun',
            effect: '10s',
            initial: 200,
            step:    100,
            max:     500
        }, {
            type:   'Exhaust',
            initial: 180,
            step:    75,
            max:     480
        }, {
            type: 'Blast',
            effect: '100 damage',
            initial: 130,
            step:    45,
            max:     1030
        }, {
            type: 'Jump',
            initial: 60,
            step:    100,
            max:     460
        }, {
            type: 'Ride',
            effect: 'LR Nothing, HR 150 damage',　//XDATA missing a translation line here.
            initial: 70,
            step:    100,
            max:     770
        }],
        hitzone: [{
            name: 'Head',
            Cutting: 43,
            Cutting2: 24,
            Impact: 45,
            Impact2: 24,
            Shot: 45,
            Shot2: 20,
            Fire: 15,
            Fire2: 20,
            Thunder: 20,
            Dragon: 5,
            KO: 100,
            Jump: 100
        }, { name: 'Torso',
            Cutting: 36,
            Cutting2: 33,
            Impact: 36,
            Impact2: 33,
            Shot: 30,
            Shot2: 28,
            Fire: 10,
            Fire2: 15,
            Thunder: 15,
            Dragon: 5,
            Jump: 100
        }, {
            name: 'Belly',
            Cutting: 75,
            Impact: 66,
            Shot: 60,
            Fire: 30,
            Thunder: 30,
            Dragon: 10,
            Jump: 200
        }, {
            name: 'Dorsal Fin',
            Cutting: 45,
            Cutting2: 42,
            Impact: 45,
            Impact2: 42,
            Shot: 40,
            Fire: 15,
            Fire2: 20,
            Thunder: 15,
            Dragon: 5,
            Jump: 200
        }, {
            name: 'Forelegs',
            Cutting: 42,
            Cutting2: 20,
            Impact: 42,
            Impact2: 41,
            Shot: 40,
            Fire: 10,
            Fire2: 20,
            Thunder: 15,
            Dragon: 5,
            Jump: 100
        }, {
            name: 'Hindlimbs',
            Cutting: 36,
            Cutting2: 33,
            Impact: 36,
            Impact2: 33,
            Shot: 35,
            Shot2: 30,
            Fire: 10,
            Fire2: 15,
            Thunder: 15,
            Dragon: 5,
            Jump: 100
        }, {
            name: 'Tail',
            Cutting: 45,
            Cutting2: 24,
            Impact: 43,
            Impact2: 24,
            Shot: 40,
            Shot2: 25,
            Fire: 10,
            Fire2: 20,
            Thunder: 15,
            Thunder2: 10,
            Dragon: 5,
            Jump: 100
        }
        ],
        trapData: {
            'Pitfall Trap': { Susceptible: true, Normal: 15, Enraged: 12, Exhausted: 20 },
            'Shock Trap': { Susceptible: true, Normal: 10, Enraged: 8, Exhausted: 12 },
            'Flash Bomb': { Susceptible: true, Normal: 30, Enraged: 20, Exhausted: 30},
            'Sonic Bomb': { Susceptible: true, Note: 'Not when enraged. Only while swimming.'},
            'Meat Trap':  { Susceptible: false},
            'Beaten Ivy': { Susceptible: false}
        }
    }, //zamtrios
    {
        name: 'Gore Magala',
        type: '???',
        size: 'large',
        subtype: false,
        hp: 4800,
        habitat: {
        'Ancient Forest': { start: 6,
            other: [2,3,5],
            rest: 4 },
        'Ruined Plains': { start: 4,
            other: [3,5,6,7,8],
            rest: 9 },
        'Virgin Forest': { start: 5,
            other: [1,2,3,4],
            rest: 8 },
        'Confinement Area': {start: 1}
        },
        statusEffects: [{
            type:   'Poison',
            effect: '60s (5 damage every 1 seconds)',
            initial: 180,
            step:    120,
            max:     660,
            recover: '10 / 10s'
        }, {
            type:   'Sleep',
            effect: '40s',
            initial: 200,
            step:    150,
            max:     800,
            recover: '5 / 10s'
        }, {
            type:   'Paralysis',
            effect: '10s',
            initial: 180,
            step:    120,
            max:     780,
            recover: '5 / 10s'
        }, {
            type:   'Stun',
            effect: '10s',
            initial: 200,
            step:    150,
            max:     800,
            recover: '5 / 10s'
        }, {
            type:   'Exhaust',
            initial: 180,
            step:    100,
            max:     680,
            recover: '5 / 10s'
        }, {
            type: 'Blast',
            effect: '100 damage',
            initial: 70,
            step:    30,
            max:     670
        }, {
            type: 'Jump',
            initial: 80,
            step:    120,
            max:     650
        }, {
            type: 'Ride',
            effect: 'LR 100, HR 150 damage', //XDATA missing a translation line here.
            initial: 60,
            step:    100,
            max:     800
        }],
        hitzone: [{
            name: 'Head',
            Cutting: 65,
            Cutting2: 75,
            Impact: 55,
            Impact2: 70,
            Shot: 55,
            Shot2: 65,
            Fire: 15,
            Fire2: 25,
            Ice: 5,
            Thunder: 15,
            Dragon: 15,
            Dragon2: 30,
            KO: 100,
            Jump: 100
        }, {
            name: 'Neck',
            Cutting: 50,
            Impact: 50,
            Shot: 50,
            Fire: 15,
            Ice: 5,
            Thunder: 10,
            Dragon: 5,
            Jump: 100
        }, {
            name: 'Torso',
            Cutting: 25,
            Impact: 25,
            Shot: 35,
            Fire: 10,
            Ice: 5,
            Thunder: 5,
            Dragon: 5,
            Jump: 100
        }, {
            name: 'Wing Limb',
            Cutting: 30,
            Impact: 30,
            Shot: 30,
            Fire: 25,
            Fire2: 30,
            Ice: 5,
            Thunder: 15,
            Dragon: 10,
            Jump: 100
        }, {
            name: 'Forelegs',
            Cutting: 45,
            Impact: 45,
            Shot: 40,
            Fire: 10,
            Ice: 5,
            Thunder: 15,
            Dragon: 5,
            Jump: 100
        }, {
            name: 'Hindlimbs',
            Cutting: 42,
            Impact: 42,
            Shot: 50,
            Fire: 10,
            Ice: 5,
            Thunder: 5,
            Dragon: 5,
            Jump: 100
        }, {
            name: 'Wings',
            Cutting: 26,
            Impact: 26,
            Shot: 20,
            Fire: 15,
            Thunder: 10,
            Dragon: 5,
            Jump: 100
        }, {
            name: 'Tail',
            Cutting: 45,
            Impact: 45,
            Shot: 40,
            Fire: 10,
            Ice: 5,
            Thunder: 10,
            Dragon: 5,
            Jump: 100
        }
        ],
            trapData: {
            'Pitfall Trap': { Susceptible: true, Normal: 10, Enraged: 10, Exhausted: 20 },
            'Shock Trap': { Susceptible: true, Normal: 8, Enraged: 8, Exhausted: 15 },
            'Flash Bomb': { Susceptible: false},
            'Sonic Bomb': { Susceptible: false},
            'Meat Trap':  { Susceptible: false},
            'Beaten Ivy': { Susceptible: false}
        }
    } //gore magala
    ];

    // Usage is: mhx.jp[ englishString.toLowerCase() ]
    mhx.jp = {
        'abdomen': '腹部',
        'ancient forest': '古代林',
        'beaten ivy': 'ツタやられ', // No idea at all...
        'belly': '腹',
        'blast': '爆破',
        'confinement area': '禁足地',
        'deserted island': '孤島',
        'dorsal fin': '背ビレ',
        'dung bomb': 'こやし玉',
        'flash bomb': '閃光玉',
        'forelegs': '前脚',
        'frozen seaway': '氷海',
        'hindlimbs': '後脚',
        'enraged': '怒り',
        'exhaust': 'スタミナ', //stamina, but whatever.
        'exhausted': '疲れ',
        'jump': 'ジャンプ',
        'ko': '気絶',
        'meat trap': '罠肉',
        'mount': '乗り',
        'neck': '首',
        'normal': '通常',
        'not when enraged. only while swimming.': '怒り時以外。潜行中のみ',
        'paralysis': '麻痺',
        'pitfall trap': '落とし穴',
        'poison': '毒',
        'rest': '休',
        'ruined plains': '遺跡平原',
        'seconds': '秒',
        'shock trap': 'シビレ罠',
        'sleep': '睡眠',
        'sonic bomb': '音爆弾',
        'stun': '気絶',
        'tetsucabra': 'テツカブラ',
        'torso': '胴',
        'virgin forest': '原生林',
        'volcano': '火山',
        'volcanic hollow': '地底火山',
        'wing limb': '翼脚',
        'zamtrios': 'ザボあザギル'
    }

}());
