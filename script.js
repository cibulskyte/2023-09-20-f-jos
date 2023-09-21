
function years (personYears) {
    let age = personYears *7
    let result = personYears + 'žmogaus metai yra' + age + 'šuns metai'  
        switch(personYears) {
            case 2:
            console.log (personYears + 'žmogaus metai yra' + age + 'šuns metų')   
            break
            case 10:
            console.log (personYears + 'žmogaus metų yra' + age + 'šuns metų')
            break
        }
    console.log(result)
}
years(-2)



function books (booksNumber) {
let number = Math.floor(365/booksNumber)
let result = 'Norint perskaityti'+ ' '+booksNumber + ' ' + 'knygų per metus, turėsi'+ ' ' + number + ' '+ 'dienas'
    switch(booksNumber){
        case 1:
            console.log('Norint perskaityti'+ ' '+booksNumber + ' ' + 'knygą per metus, turėsi'+ ' ' + number + ' '+ 'dienas')
            break
        case 2:
        case 3:
        case 5:
        case 7:
        case 8:
            console.log ('Norint perskaityti'+ ' '+booksNumber + ' ' + 'knygas per metus, turėsi'+ ' ' + number + ' '+ 'dienas')
            break
        case 4:
            console.log ('Norint perskaityti'+ ' '+booksNumber + ' ' + 'knygas per metus, turėsi'+ ' ' + number + ' '+ 'dieną')
            break
        case 6:
        case 9:
            console.log ('Norint perskaityti'+ ' '+booksNumber + ' ' + 'knygas per metus, turėsi'+ ' ' + number + ' '+ 'dienų')
            break
    }
console.log(result)
}
books(9)

function days(daysOfWeek){
let weeks = Math.floor (daysOfWeek / 7)
let result = daysOfWeek+ ' '+ 'dienos yra'+ ' ' + weeks+ ' '+ 'savaitės'

let dayText = 'diena'
let weekText = 'savaitė'

if (daysOfWeek !==1) {
    dayText = 'dienos'
    weekText = 'savaitės'
}
    switch(daysOfWeek){
        case 1:
        case 3:
            console.log(daysOfWeek + ' '+ dayText + ' ' + weeks+ ' '+ weekText)
        case 2:
        case 7:
        case 4:
        case 5:
        case 6:
        case 9:
          console.log (daysOfWeek+ ' '+ dayText+ ' ' + weeks+ ' '+ weekText)
    }
    if(daysOfWeek>=14)
    console.log (daysOfWeek+ ' '+ 'dienų yra'+ ' ' + weeks+ ' '+ 'savaitės')
    else if (daysOfWeek=10)
    console.log (daysOfWeek+ ' '+ 'dienų yra'+ ' ' + weeks+ ' '+ 'savaitė')
    
console.log(result)
}

days(10)

function daysAndYears (time) {
let years = Math.floor(time / 365)
let result = time +' '+ 'dienos yra'+ ' ' + years  + ' ' + 'metai'  
    switch(daysAndYears) {
        case 1:
        console.log(time +' '+ 'diena yra'+ ' ' + years  + ' ' + 'metų')
        break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        console.log(time +' '+ 'dienos yra'+ ' ' + years  + ' ' + 'metų')
        break
    }
console.log(result)
}

daysAndYears(9)


function yearsIntoHours (years) {
let hours = (years*366)*24
let result = years+ ' ' + 'metai turi'+ ' '+ hours+ ' ' + 'valandas'
console.log(result)
}

yearsIntoHours(5)

function monthIntoHours(month){
let hours = (month*31)*24
let result = month + 'mėnesiai turi'+ ' ' + hours+ 'valandas '
console.log(result)
}
monthIntoHours(3)

function monthIntoMinutes(month) {
let minutes = month*30*24*60
let result = month + ' '+ 'mėnesiai turi' + minutes+ ' ' + 'minutes'
switch (monthIntoMinutes){
    case 1:
        console.log(month + ' '+ 'mėnnuo turi' + minutes+ ' ' + 'minutes')
        break
    
}
console.log(result)
}
monthIntoMinutes(2)