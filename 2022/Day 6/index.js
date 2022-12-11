import parser from '../../parser.js'

const signal = parser.read(import.meta.url).split('')

function indexOfMarker(markerLength) {
    let i = markerLength

    for (i; i < signal.length; i++) {
        let marker = new Set(signal.slice(i - markerLength, i))
    
        if (marker.size === markerLength) {
            break;
        }
    }

    return i
}

const star1 = indexOfMarker(4)
const star2 = indexOfMarker(14)