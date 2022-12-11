import parser from '../../parser.js'

const pairs = parser.parse(import.meta.url)
    .map(p => p.split(','))
    .map(p => p.map(e => e.split('-').map(a => Number(a))))

const star1 = pairs.filter(p => {
    const [elf1, elf2] = p
    const [thisMin, thisMax] = elf1
    const [thatMin, thatMax] = elf2

    return (
        (thisMin <= thatMin && thisMax >= thatMax) ||
        (thatMin <= thisMin && thatMax >= thisMax)
    )
}).length

const star2 = pairs.filter(p => {
    const [elf1, elf2] = p
    const [thisMin, thisMax] = elf1
    const [thatMin, thatMax] = elf2

    return ! (thatMax < thisMin || thatMin > thisMax)
}).length