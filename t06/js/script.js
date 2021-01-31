'use strict'

function transformation () {
    let hero = document.getElementById('hero'),
        lab = document.getElementById('lab')

    if (hero.innerHTML === 'Bruce Banner') {
        hero.innerHTML = 'Hulk'
        hero.style.fontSize = '130px'
        hero.style.letterSpacing = '6px'
        lab.style.background = '#70964b'
    } else {
        hero.innerHTML = 'Bruce Banner'
        hero.style.fontSize = '60px'
        hero.style.letterSpacing = '2px'
        lab.style.background = '#ffb300'
    }
}