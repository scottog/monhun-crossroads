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
                fight: [2,7,8],
                rest: 9 },
            'Frozen Seaway': { start: [6,9],
                fight: [3,4,5,7],
                rest: 6},
            'Deserted Island': {start: [3,7],
                fight: [2,5],
                rest: 6},
            'Volcanic Hollow': {start: [2,8],
                fight: [1,3],
                rest: 9}
        },
        statusEffects: [{
            type:   'Poison',
            initial: 100,
            max:     500,
            duration:60,
            damage:  300,
            decrease: '10 / 5s'
        }, {
            type:   'Paralysis',
            initial: 200,
            max:     500,
            duration:10,
            decrease: '10 / 5s'
        }, {
            type:   'Sleep',
            initial: 150,
            max:     550,
            duration:40,
            decrease: '10 / 5s'
        }, {
            type:   'Stun',
            initial: 200,
            max:     500,
            duration:10,
            decrease: '10 / 5s'
        }, {
            type:   'KO',
            initial: 150,
            max:     550,
            duration:40,
            decrease: '10 / 5s'
        }, {
            type: 'Exhaust',
            initial: 180,
            step: 75,
            max: 480,
            decrease: '10 / 5s'
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
        hitzone: {
            Head: {
                Cutting: 56,
                Impact: 56,
                Shot: 60,
                Water: 30,
                Thunder: 25,
                Ice: 5,
                Dragon: 5,
                KO: 100,
                Mount: 100
            },
            Fangs: {
                Cutting: 42,
                Impact: 45,
                Shot: 40,
                Water: 25,
                Ice: 10,
                Thunder: 25,
                Dragon: 5,
                KO: 100,
                Mount: 100
            },
            'Front Legs': {
                Cutting: 45,
                Impact: 42,
                Shot: 40,
                Water: 20,
                Thunder: 15,
                Ice: 5,
                Dragon: 5,
                Mount: 100
            },
            'Back Legs': {
                Cutting: 42,
                Impact: 42,
                Shot: 40,
                Water: 15,
                Thunder: 15,
                Ice: 5,
                Dragon: 5,
                Mount: 100
            },
            Tail: {
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
                Mount: 100
            },
            Rock: {
                Cutting: 18,
                Impact: 18,
                Shot: 15,
                Dragon: 10
            }
        },
        trapData: {
            'Pitfall Trap': { Susceptible: true, Normal: 15, Enraged: 12, Exhausted: 20 },
            'Flash Bomb': { Susceptible: true, Normal: 30, Enraged: 20, Exhausted: 30 },
            'Shock Trap': { Susceptible: true, Normal: 10, Enraged: 8, Exhausted: 12 },
            'Sonic Bomb': { Susceptible: false},
            Meat: { Susceptible: false }
        }
    }, {

        name: 'Zamtrios',
        type: 'Amphibian',
        size: 'large',
        subtype: false,
        habitat: {
            'Sunken Hollow': { start: 1, //XDATA this is all wrong
                fight: [2,3,4],
                sleep: 7 }
        },
        statusEffects: [{
            type:   'Poison',
            initial: 100,
            max:     500,
            duration:60,
            damage:  300
        }, {
            type:   'Paralysis',
            initial: 200,
            max:     500,
            duration:10,
            damage:  0
        }, {
            type:   'Sleep',
            initial: 150,
            max:     550,
            duration:40,
            damage:  0
        }, {
            type:   'Stun',
            initial: 200,
            max:     500,
            duration:10,
            damage:  0
        }, {
            type:   'Fatigue',
            initial: 150,
            max:     550,
            duration:40,
            damage:  0
        }],
        hitzone: [{
            Head: {
                Cutting: 56,
                Impact: 56,
                Shot: 60,
                Fire: 15,
                Fire2: 20,
                Water: 0,
                Ice: 0,
                Thunder: 20,
                Dragon: 5
            },
            'Front Legs': {
                Cutting: 45,
                Impact: 42,
                Shot: 40,
                Fire: 0,
                Water: 20,
                Ice: 5,
                Thunder: 15,
                Dragon: 5
            },
            'Back Legs': {
                Cutting: 42,
                Impact: 42,
                Shot: 40,
                Fire: 0,
                Water: 15,
                Thunder: 15,
                Ice: 5,
                Dragon: 5
            },
            Tail: {
                Cutting: 36,
                Impact: 36,
                Shot: 35,
                Fire: 0,
                Water: 20,
                Thunder: 15,
                Ice: 10,
                Dragon: 5
            }
        }],
        trapData: {
            'Pitfall Trap': { Susceptible: true, Normal: '?', Enraged: '?', Exhausted: 20 },
            'Shock Trap': { Susceptible: true, Normal: '?', Enraged: '?', Exhausted: 12 },
            'Flash Bomb': { Susceptible: true, Normal: '?', Enraged: '?', Exhausted: '?' },
            'Sonic Bomb': { Susceptible: true},
            Meat: { Susceptible: false }
        }
    }];

    // Usage is: mhx.jp[ englishString.toLowerCase() ]
    mhx.jp = {
        'ancient forest': '古代林',
        'deserted island': '孤島',
        'tetsucabra': 'テツカブラ',
        'volcano': '火山',
        'volcanic hollow': '地底火山',
        'zamtrios': 'ザボあザギル'
    }

}());
