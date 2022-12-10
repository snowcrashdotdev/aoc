import parser from '../../parser.js'

const choices = new Map([
    ['X', 1],
    ['Y', 2],
    ['Z', 3],
])

const results = new Map([
    ['WIN', 6],
    ['LOSE', 0],
    ['DRAW', 3]
])

const strategy = new Map([
    ['X', 'C'],
    ['Y', 'A'],
    ['Z', 'B'],
    ['A', 'X'],
    ['B', 'Y'],
    ['C', 'Z']
])

const revisedStrategy = new Map([
    ['X', 'LOSE'],
    ['Y', 'DRAW'],
    ['Z', 'WIN'],
    ['A', ['Y', 'Z']],
    ['B', ['Z', 'X']],
    ['C', ['X', 'Y']]
])

const rounds = parser.parseTuples(import.meta.url)

const star1 = rounds.reduce((c,r) => {
    const [ opp, play ] = r
    const result = strategy.get(opp) === play ? 'DRAW' : strategy.get(play) === opp ? 'WIN' : 'LOSE'

    return c + choices.get(play) + results.get(result)
}, 0)

const star2 = rounds.reduce((c,r) => {
    const [ opp, desiredResult ] = r
    const result = revisedStrategy.get(desiredResult)
    const [win, lose] = revisedStrategy.get(opp)
    const draw = strategy.get(opp)

    const choice = result === 'DRAW' ? draw : result === 'WIN' ? win : lose

    return c + results.get(result) + choices.get(choice)

}, 0)