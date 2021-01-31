'use strict'

let x = 3
let y = 10
let data = ['Name', 'Strength', 'Age',
            'Black Panther', '66', '53',
            'Captain America', '79', '137',
            'Captain Marvel', '97', '26',
            'Hulk', '80', '49',
            'Iron Man', '88', '48',
            'Spider-Man', '78', '16',
            'Thanos', '99', '1000',
            'Thor', '95', '1000',
            'Yon-Rogg', '73', '52']

document.getElementById('placeholder').innerHTML = ''
tableCreate()

function tableCreate() {
    let ph, tbl, tblBody, row, cell, cellText, id = 0

    ph = document.getElementById('placeholder')
    tbl = document.createElement('table')
    tblBody = document.createElement('tbody')

    for (let j = 0; j < y; ++j) {
        row = document.createElement('tr')
        for (let i = 0; i < x; ++i) {
            cell = document.createElement('td')

            cell.setAttribute('id', id)
            if (id >= 0 && id <= 2)
                cell.setAttribute('onclick', `tableSort(${id})`)
            cellText = document.createTextNode(`${data[id++]}`)

            cell.appendChild(cellText)
            row.appendChild(cell)
        }
        tblBody.appendChild(row)
    }
    tbl.appendChild(tblBody)
    ph.appendChild(tbl)
    // set attributes
    tbl.setAttribute('id', 'table')
}

function tableSort(n) {
    let tbl, rows, switching, shouldSwitch, i, r1, r2, dir, switchCount = 0

    tbl = document.getElementById('table')
    switching = true
    dir = 'asc'
    while (switching) {
        switching = false
        rows = tbl.rows
        for (i = 1; i < (rows.length - 1); ++i) {
            shouldSwitch = false
            r1 = rows[i].getElementsByTagName('td')[n]
            r2 = rows[i + 1].getElementsByTagName('td')[n]
            if (dir === 'asc') {
                if (r1.innerHTML.toLowerCase() > r2.innerHTML.toLowerCase()) {
                    shouldSwitch = true
                    break
                }
            } else if (dir == 'desc') {
                if (r1.innerHTML.toLowerCase() < r2.innerHTML.toLowerCase()) {
                    shouldSwitch = true
                    break
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
            switching = true
            switchCount ++
        } else if (switchCount === 0 && dir === 'asc') {
            dir = 'desc'
            switching = true
        }
    }
    showMessage(n, dir)
}

function showMessage(n, dir) {
    let msg, name

    msg = document.getElementById('notification')
    name = document.getElementById(n).innerHTML
    msg.innerHTML = `Sorting by ${name}, order: ${dir.toUpperCase()}`
}