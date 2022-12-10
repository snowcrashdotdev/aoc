import fs from "fs"
import path from "path"
import {fileURLToPath} from "url"

const Parser = function() {
    this.read = (url) => {
        const dir = path.dirname(fileURLToPath(url))
        const file = path.join(dir, 'input.txt')
        return fs.readFileSync(file, 'utf8').toString().trim()
    }

    this.parse = (url) => {
        return this.read(url)
            .split(/\n/gi)
    }

    this.parse2d = (url) => {
        return this.read(url)
            .split(/\n\n/gi)
            .map(i => i.split(/\n/gi))
    }

    this.parseTuples = (url) => {
        return this.read(url)
            .split(/\n/gi)
            .map(i => i.split(/\s/gi))
    }
}

export default new Parser()