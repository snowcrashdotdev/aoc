import parser from '../../parser.js'

const input = parser.read(import.meta.url)
    .split(/\n\n/gi)

const [crates, directions] = input

const rows = crates.split(/\n/g)
    .map(l => {
        const arr = [...l]
        const r = []
        
        while (arr.length) { r.push(arr.splice(0,4).find(s => s.match(/[A-Z]/))) }

        return r
    })
    .filter(r => r.some(i => i))

let piles = []

for (let row of rows) {
    row.forEach((c,i) => {
        if (undefined === piles[i]) {
            piles[i] = []
        }

        piles[i].push(c)
    })
}

piles = piles.map(p => p.filter(c => c))
const star1Copy = piles.map(p => p.slice())
const star2Copy = piles.map(p => p.slice())

const machineReadableDirections = directions.split(/\n/g).map(d => {
    const instructions = d.match(/\d*/g).filter(v => v).map(n => Number(n))

    let [move, from, to] = instructions
    from -= 1
    to -= 1

    return [
        move,
        from,
        to
    ]
})

function doOps(piles, multiple=false) {
    for (let op of machineReadableDirections) {
        const [move, from, to] = op
    
        let transport = piles[from].splice(0,move)

        if (false === multiple) {
            transport.reverse()
        }

        piles[to].unshift(...transport)
    }

    return piles
}

const star1 = doOps(star1Copy).map(p => p[0]).join('')
const star2 = doOps(star2Copy, true).map(p => p[0]).join('')