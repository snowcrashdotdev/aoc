import parser from '../../../parser.js'

const input = parser.parse2d(import.meta.url)

const elfCalTotals = input.map(e => e.reduce((c,v) => {
    return c + Number(v)
}, 0))

const star1 = elfCalTotals.reduce((c,v) => {
    return (c > v) ? c : v
}, 0)

const star2 = elfCalTotals.sort((a,b) => { return a - b }).reverse().slice(0,3).reduce((c,v) => { return c + v }, 0)
