'use strict'

let createP = (str) => {
    let p = document.createElement('p')
    p.textContent = str
    list.append(p)
}

let showCookies = () => {
    let cookies = document.cookie.split(';')
    if (!cookies || (cookies.length <= 1 && cookies[0] === '')) {
        createP('[Empty]')
    } else {
        for (let i in cookies) {
            createP(`~~>${cookies[i].split('=')[1]}`)
            cookieCount++
        }    
    }
}

let addCookies = () => {
    let expDate, textValue = text.value.trim()

    if (text.value === '' || textValue.length === 0) {
        alert('It\'s empty. Try to input something it \'Text input\'.')
        return
    }
    if (cookieCount === 0)
        document.querySelector('#cookiesList p').remove()
    
    expDate = new Date()
    expDate.setDate(expDate.getDate() + 30)
    document.cookie = `${cookieCount} = ${textValue}; expires = ${expDate.toUTCString()}; path=/`

    createP(`~~> ${textValue}`)
    text.value = ''
    cookieCount++
}

let clearCookies = () => {
    if (confirm('Are you sure?')) {

        document.querySelectorAll('#cookiesList p').forEach(p => p.remove())
        createP('[Empty]')

        let all = document.cookie.split(';')
        for (let i in all)
            document.cookie = `${all[i].split('=')[0]} = ''; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/`

        cookieCount = 0
    }
}

let list = document.querySelector('#cookiesList')
let text = document.querySelector('#text')
let cookieCount = 0

showCookies()