import parser from '../../parser.js'

const isUpper = (str) => str === str.toUpperCase()

const itemPriority = (item) => {
    const priority = parseInt(item.toLowerCase(), 36) - 9

    return isUpper(item) ? priority + 26 : priority
}

const rucksacks = parser.parse(import.meta.url)

const star1 = rucksacks
    .map(r => {
        const arr = r.split('')
        const half = Math.ceil(arr.length * 0.5)
        const compartments = [arr.slice(0, half), arr.slice(half)]

        const item = compartments[0].filter(i => compartments[1].includes(i)).find(Boolean)

        return itemPriority(item)
        
    })
    .reduce((c,v) => { return c + v }, 0)

const rucksacksCopy = rucksacks.slice()

const elfGroups = []

while (rucksacksCopy.length) {
    elfGroups.push(rucksacksCopy.splice(0, 3))
}

const star2 = elfGroups
    .map(g => {
        const arrs = g.map(e => e.split(''))

        const item = arrs[0].filter(i => arrs[1].includes(i) && arrs[2].includes(i)).find(Boolean)

        return itemPriority(item)
    })
    .reduce((c,v) => { return c + v }, 0)